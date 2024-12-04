import { useQuery } from "@tanstack/react-query";
import { CoinName } from "@/src/utils/coinsConfig";
import { ApiBaseUrl, IndexerUrl, SQDIndexerUrl } from "@/src/utils/constants";
import { createPoolIdFromIdString, isPoolIdValid } from "@/src/utils/common";
import request, { gql } from "graphql-request";
import { time } from "console";
import { useEffect, useState } from "react";
import { NumberParam, StringParam, useQueryParam, withDefault } from "use-query-params";

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
const ITEMS_IN_PAGE = 5;
const DEFAULT_ORDER_BY = "tvlUSD_ASC";
const DEFAULT_PAGE = 1;
const DEFAULT_SEARCH = "";

export const usePoolsData = (): { data: PoolData[] | undefined; isLoading: boolean } => {
  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, DEFAULT_PAGE));
  const [search, setSearch] = useQueryParam("search", withDefault(StringParam, DEFAULT_SEARCH));
  const [orderBy, setOrderBy] = useQueryParam("orderBy", withDefault(StringParam, DEFAULT_ORDER_BY));

  const timestamp24hAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;

  useEffect(() => {
    setPage(DEFAULT_PAGE);
    setOrderBy(DEFAULT_ORDER_BY);
  }, [search]);

  const query = gql`
    query PoolsConnection($first: Int!, $after: String, $orderBy: [PoolOrderByInput!]!, $poolWhereInput: PoolWhereInput) {
      poolsConnection(first: $first, after: $after, orderBy: $orderBy, where: $poolWhereInput ) {
        totalCount
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        totalCount
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
    queryKey: ["pools", page, orderBy, search],
    queryFn: () =>
      request({
        url: SQDIndexerUrl,
        document: query,
        variables: {
          first: 5,
          after: page === 1 ? null : String((page - 1) * ITEMS_IN_PAGE),
          orderBy,
          poolWhereInput: { asset0: { symbol_containsInsensitive: search } },
        },
      }),
    // enabled: shouldFetch,
  });

  const totalPages = Math.ceil(data?.poolsConnection?.totalCount / ITEMS_IN_PAGE);

  console.log({
    data,
    totalPages,
    setPage,
    setOrderBy,
    page,
    orderBy,
    search,
    setSearch,
  });

  const dataTransformed = data?.poolsConnection?.edges
    .map((poolNode: any): PoolData => {
      const pool = poolNode.node;
      // const volume24h = pool.snapshots.reduce((acc: number, snapshot: any) => acc + parseFloat(snapshot.volumeUSD), 0);
      const fees24h = pool.snapshots.reduce((acc: number, snapshot: any) => acc + parseFloat(snapshot.feesUSD), 0);
      const apr = (fees24h / parseFloat(pool.tvlUSD)) * 365 * 100;

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
    })
    .sort((a: PoolData, b: PoolData) => b.details.tvl - a.details.tvl);

  return { data: dataTransformed, isLoading };
};

export default usePoolsData;
