import {useQuery} from "@tanstack/react-query";
import {CoinName} from "@/src/utils/coinsConfig";
import {ApiBaseUrl, IndexerUrl, SQDIndexerUrl} from "@/src/utils/constants";
import {createPoolIdFromIdString, isPoolIdValid} from "@/src/utils/common";
import request, { gql } from "graphql-request";
import { time } from "console";

export type PoolData = {
  id: string;
  reserve_0: string;
  reserve_1: string;
  details: {
    asset0Id: string;
    asset1Id: string;
    asset_0_symbol: CoinName;
    asset_1_symbol: CoinName;
    apr: number | null;
    volume: string;
    tvl: number;
  };
  swap_count: number;
  create_time: number;
};

export type PoolsData = {
  pools: PoolData[];
};

export const usePoolsData = (paginationVariables: any): { data: PoolData[] | undefined, pageInfo:any, totalCount: number, isLoading: boolean } => {
  console.log(paginationVariables)
  const timestamp24hAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  const query = gql`
    query PoolsConnection($first: Int, $after: String) {
      poolsConnection(first: $first, after: $after, orderBy: id_DESC) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            isStable
            reserve0
            reserve1
            reserve0Decimal
            reserve1Decimal
            volumeAsset0
            volumeAsset1
            tvlUSD
            lpToken {
              symbol
              name
            }
            asset1 {
              id
              symbol
              decimals
            }
            asset0 {
              id
              symbol
              decimals
            }
            snapshots(where: { timestamp_gt: ${timestamp24hAgo} }) {
              timestamp
              volumeAsset0
              volumeAsset1
              volumeAsset0Decimal
              volumeAsset1Decimal
              volumeUSD
              feesUSD
            }
          }
        }
      }
    }
  `;

  const { data, isLoading } = useQuery<any>({
    queryKey: ['pools'],
    queryFn: () => request(
      SQDIndexerUrl,
      query,
      paginationVariables,
    ),
    // enabled: shouldFetch,
  });

  const dataTransformed = data?.poolsConnection?.edges?.map((edge: any) => {
    // const volume24h = pool.snapshots.reduce((acc: number, snapshot: any) => acc + parseFloat(snapshot.volumeUSD), 0);
    const pool = edge.node;
    const fees24h = pool.snapshots.reduce((acc: number, snapshot: any) => acc + parseFloat(snapshot.feesUSD), 0);
    const apr = fees24h / parseFloat(pool.tvlUSD) * 365 * 100;

    return {
      id: pool.id,
      reserve_0: pool.reserve0Decimal,
      reserve_1: pool.reserve1Decimal,
      details: {
        asset0Id: pool.asset0.id,
        asset1Id: pool.asset1.id,
        asset_0_symbol: pool.asset0.symbol as CoinName,
        asset_1_symbol: pool.asset1.symbol as CoinName,
        apr,
        volume: pool.snapshots.reduce((acc: number, snapshot: any) => acc + parseFloat(snapshot.volumeUSD), 0),
        tvl: parseFloat(pool.tvlUSD),
      },
      swap_count: 0,
      create_time: 0,
    };
  }).sort((a: PoolData, b: PoolData) => b.details.tvl - a.details.tvl);

  return  {
    data: dataTransformed,
    pageInfo: data?.poolsConnection.pageInfo,
    totalCount: data?.poolsConnection.totalCount,
    isLoading,
  };
};

export default usePoolsData;
