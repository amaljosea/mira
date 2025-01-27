import {useQuery} from "@tanstack/react-query";
import useReadonlyMira from "@/src/hooks/useReadonlyMira";
import useBalances from "@/src/hooks/useBalances/useBalances";
import request, {gql} from "graphql-request";
import {SQDIndexerUrl} from "../utils/constants";
import {createPoolIdFromIdString} from "../utils/common";
import {Asset, PoolId} from "mira-dex-ts";

export interface Position {
  poolId: PoolId;
  lpAssetId: string;
  isStable: boolean;
  token0Item: {
    token0Position: Asset;
    price: number;
  };
  token1Item: {
    token1Position: Asset;
    price: number;
  };
}

const usePositions = (): {data: Position[] | undefined; isLoading: boolean} => {
  const mira = useReadonlyMira();
  const {balances} = useBalances();

  const miraExists = Boolean(mira);

  const {data, isLoading} = useQuery({
    queryKey: ["positions", balances],
    queryFn: async () => {
      const assetIds = balances?.map((balance) => balance.assetId);

      const query = gql`
        query MyQuery {
          pools(where: {
            lpToken: {id_in: [${assetIds!.map((assetId) => `"${assetId}"`).join(", ")}]}
          }) {
            id
            lpToken {
              id
            }
            asset0 {
              id
              price
            }
            asset1 {
              id
              price
            }
            isStable
          }
        }
      `;

      const result = await request<{pools: any[]}>({
        url: SQDIndexerUrl,
        document: query,
      });

      const pools = await Promise.all(
        result.pools.map(async (pool: any) => {
          const poolId = createPoolIdFromIdString(pool.id);
          const lpBalance = balances!.find(
            (balance) => balance.assetId === pool.lpToken.id,
          );
          const [token0Position, token1Position] =
            await mira!.getLiquidityPosition(
              poolId,
              lpBalance!.amount.toString(),
            );

          const price1 = result?.pools.find(
            (pool) => pool.asset0.id === token0Position[0].bits,
          );

          const price2 = result?.pools.find(
            (pool) => pool.asset1.id === token1Position[0].bits,
          );

          const token0Price = parseFloat(
            parseFloat(price1?.asset0.price).toFixed(2),
          );
          const token1Price = parseFloat(
            parseFloat(price2?.asset1.price).toFixed(2),
          );

          const token0Item = {
            token0Position: token0Position,
            price: token0Price,
          };
          const token1Item = {
            token1Position: token1Position,
            price: token1Price,
          };

          return {
            poolId,
            lpAssetId: pool.lpToken.id,
            isStable: pool.isStable,
            token0Item,
            token1Item,
          };
        }),
      );

      return pools;
    },
    enabled: miraExists && !!balances,
  });

  return {data, isLoading};
};

export default usePositions;
