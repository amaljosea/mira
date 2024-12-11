import {useQuery} from "@tanstack/react-query";
import useReadonlyMira from "@/src/hooks/useReadonlyMira";
import useBalances from "@/src/hooks/useBalances/useBalances";
import request, {gql} from "graphql-request";
import {SQDIndexerUrl} from "../utils/constants";
import {createPoolIdFromIdString} from "../utils/common";
import {Asset, PoolId} from "mira-dex-ts";

import getPoolPositionsQuery from "@/src/graphql/queries/getPoolPositions.graphql";
import {Query} from "../generated/graphql";

const usePositions = () => {
  const mira = useReadonlyMira();
  const {balances} = useBalances();

  const miraExists = Boolean(mira);

  const {data, isLoading} = useQuery<Query>({
    queryKey: ["positions", balances],
    queryFn: async () => {
      const assetIds = balances?.map((balance) => balance.assetId);

      const result = await request<Query>({
        url: SQDIndexerUrl,
        document: getPoolPositionsQuery,
        variables: assetIds,
      });

      const pools = await Promise.all(
        result.pools.map(async (pool: any) => {
          const poolId = createPoolIdFromIdString(pool.id);
          const lpBalance = balances!.find(
            (balance) => balance.assetId === pool.lpToken.id
          );
          const [token0Position, token1Position] =
            await mira!.getLiquidityPosition(
              poolId,
              lpBalance!.amount.toString()
            );

          return {
            poolId,
            lpAssetId: pool.lpToken.id,
            isStable: pool.isStable,
            token0Position,
            token1Position,
          };
        })
      );

      return pools;
    },
    enabled: miraExists && !!balances,
  });

  return {data, isLoading};
};

export default usePositions;
