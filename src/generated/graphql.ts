export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
};

export type Action = {
  __typename?: 'Action';
  amount0In: Scalars['BigInt']['output'];
  amount0Out: Scalars['BigInt']['output'];
  amount1In: Scalars['BigInt']['output'];
  amount1Out: Scalars['BigInt']['output'];
  asset0: Asset;
  asset1: Asset;
  blockNumber: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  pool: Pool;
  reserves0After: Scalars['BigInt']['output'];
  reserves0Before: Scalars['BigInt']['output'];
  reserves1After: Scalars['BigInt']['output'];
  reserves1Before: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  transaction: Scalars['String']['output'];
  type: Type;
};

export type ActionEdge = {
  __typename?: 'ActionEdge';
  cursor: Scalars['String']['output'];
  node: Action;
};

export enum ActionOrderByInput {
  Amount0InAsc = 'amount0In_ASC',
  Amount0InAscNullsFirst = 'amount0In_ASC_NULLS_FIRST',
  Amount0InAscNullsLast = 'amount0In_ASC_NULLS_LAST',
  Amount0InDesc = 'amount0In_DESC',
  Amount0InDescNullsFirst = 'amount0In_DESC_NULLS_FIRST',
  Amount0InDescNullsLast = 'amount0In_DESC_NULLS_LAST',
  Amount0OutAsc = 'amount0Out_ASC',
  Amount0OutAscNullsFirst = 'amount0Out_ASC_NULLS_FIRST',
  Amount0OutAscNullsLast = 'amount0Out_ASC_NULLS_LAST',
  Amount0OutDesc = 'amount0Out_DESC',
  Amount0OutDescNullsFirst = 'amount0Out_DESC_NULLS_FIRST',
  Amount0OutDescNullsLast = 'amount0Out_DESC_NULLS_LAST',
  Amount1InAsc = 'amount1In_ASC',
  Amount1InAscNullsFirst = 'amount1In_ASC_NULLS_FIRST',
  Amount1InAscNullsLast = 'amount1In_ASC_NULLS_LAST',
  Amount1InDesc = 'amount1In_DESC',
  Amount1InDescNullsFirst = 'amount1In_DESC_NULLS_FIRST',
  Amount1InDescNullsLast = 'amount1In_DESC_NULLS_LAST',
  Amount1OutAsc = 'amount1Out_ASC',
  Amount1OutAscNullsFirst = 'amount1Out_ASC_NULLS_FIRST',
  Amount1OutAscNullsLast = 'amount1Out_ASC_NULLS_LAST',
  Amount1OutDesc = 'amount1Out_DESC',
  Amount1OutDescNullsFirst = 'amount1Out_DESC_NULLS_FIRST',
  Amount1OutDescNullsLast = 'amount1Out_DESC_NULLS_LAST',
  Asset0ContractIdAsc = 'asset0_contractId_ASC',
  Asset0ContractIdAscNullsFirst = 'asset0_contractId_ASC_NULLS_FIRST',
  Asset0ContractIdAscNullsLast = 'asset0_contractId_ASC_NULLS_LAST',
  Asset0ContractIdDesc = 'asset0_contractId_DESC',
  Asset0ContractIdDescNullsFirst = 'asset0_contractId_DESC_NULLS_FIRST',
  Asset0ContractIdDescNullsLast = 'asset0_contractId_DESC_NULLS_LAST',
  Asset0DecimalsAsc = 'asset0_decimals_ASC',
  Asset0DecimalsAscNullsFirst = 'asset0_decimals_ASC_NULLS_FIRST',
  Asset0DecimalsAscNullsLast = 'asset0_decimals_ASC_NULLS_LAST',
  Asset0DecimalsDesc = 'asset0_decimals_DESC',
  Asset0DecimalsDescNullsFirst = 'asset0_decimals_DESC_NULLS_FIRST',
  Asset0DecimalsDescNullsLast = 'asset0_decimals_DESC_NULLS_LAST',
  Asset0IdAsc = 'asset0_id_ASC',
  Asset0IdAscNullsFirst = 'asset0_id_ASC_NULLS_FIRST',
  Asset0IdAscNullsLast = 'asset0_id_ASC_NULLS_LAST',
  Asset0IdDesc = 'asset0_id_DESC',
  Asset0IdDescNullsFirst = 'asset0_id_DESC_NULLS_FIRST',
  Asset0IdDescNullsLast = 'asset0_id_DESC_NULLS_LAST',
  Asset0ImageAsc = 'asset0_image_ASC',
  Asset0ImageAscNullsFirst = 'asset0_image_ASC_NULLS_FIRST',
  Asset0ImageAscNullsLast = 'asset0_image_ASC_NULLS_LAST',
  Asset0ImageDesc = 'asset0_image_DESC',
  Asset0ImageDescNullsFirst = 'asset0_image_DESC_NULLS_FIRST',
  Asset0ImageDescNullsLast = 'asset0_image_DESC_NULLS_LAST',
  Asset0L1AddressAsc = 'asset0_l1Address_ASC',
  Asset0L1AddressAscNullsFirst = 'asset0_l1Address_ASC_NULLS_FIRST',
  Asset0L1AddressAscNullsLast = 'asset0_l1Address_ASC_NULLS_LAST',
  Asset0L1AddressDesc = 'asset0_l1Address_DESC',
  Asset0L1AddressDescNullsFirst = 'asset0_l1Address_DESC_NULLS_FIRST',
  Asset0L1AddressDescNullsLast = 'asset0_l1Address_DESC_NULLS_LAST',
  Asset0NameAsc = 'asset0_name_ASC',
  Asset0NameAscNullsFirst = 'asset0_name_ASC_NULLS_FIRST',
  Asset0NameAscNullsLast = 'asset0_name_ASC_NULLS_LAST',
  Asset0NameDesc = 'asset0_name_DESC',
  Asset0NameDescNullsFirst = 'asset0_name_DESC_NULLS_FIRST',
  Asset0NameDescNullsLast = 'asset0_name_DESC_NULLS_LAST',
  Asset0NumPoolsAsc = 'asset0_numPools_ASC',
  Asset0NumPoolsAscNullsFirst = 'asset0_numPools_ASC_NULLS_FIRST',
  Asset0NumPoolsAscNullsLast = 'asset0_numPools_ASC_NULLS_LAST',
  Asset0NumPoolsDesc = 'asset0_numPools_DESC',
  Asset0NumPoolsDescNullsFirst = 'asset0_numPools_DESC_NULLS_FIRST',
  Asset0NumPoolsDescNullsLast = 'asset0_numPools_DESC_NULLS_LAST',
  Asset0PriceAsc = 'asset0_price_ASC',
  Asset0PriceAscNullsFirst = 'asset0_price_ASC_NULLS_FIRST',
  Asset0PriceAscNullsLast = 'asset0_price_ASC_NULLS_LAST',
  Asset0PriceDesc = 'asset0_price_DESC',
  Asset0PriceDescNullsFirst = 'asset0_price_DESC_NULLS_FIRST',
  Asset0PriceDescNullsLast = 'asset0_price_DESC_NULLS_LAST',
  Asset0SubIdAsc = 'asset0_subId_ASC',
  Asset0SubIdAscNullsFirst = 'asset0_subId_ASC_NULLS_FIRST',
  Asset0SubIdAscNullsLast = 'asset0_subId_ASC_NULLS_LAST',
  Asset0SubIdDesc = 'asset0_subId_DESC',
  Asset0SubIdDescNullsFirst = 'asset0_subId_DESC_NULLS_FIRST',
  Asset0SubIdDescNullsLast = 'asset0_subId_DESC_NULLS_LAST',
  Asset0SupplyAsc = 'asset0_supply_ASC',
  Asset0SupplyAscNullsFirst = 'asset0_supply_ASC_NULLS_FIRST',
  Asset0SupplyAscNullsLast = 'asset0_supply_ASC_NULLS_LAST',
  Asset0SupplyDesc = 'asset0_supply_DESC',
  Asset0SupplyDescNullsFirst = 'asset0_supply_DESC_NULLS_FIRST',
  Asset0SupplyDescNullsLast = 'asset0_supply_DESC_NULLS_LAST',
  Asset0SymbolAsc = 'asset0_symbol_ASC',
  Asset0SymbolAscNullsFirst = 'asset0_symbol_ASC_NULLS_FIRST',
  Asset0SymbolAscNullsLast = 'asset0_symbol_ASC_NULLS_LAST',
  Asset0SymbolDesc = 'asset0_symbol_DESC',
  Asset0SymbolDescNullsFirst = 'asset0_symbol_DESC_NULLS_FIRST',
  Asset0SymbolDescNullsLast = 'asset0_symbol_DESC_NULLS_LAST',
  Asset0TradeVolumeDecimalAsc = 'asset0_tradeVolumeDecimal_ASC',
  Asset0TradeVolumeDecimalAscNullsFirst = 'asset0_tradeVolumeDecimal_ASC_NULLS_FIRST',
  Asset0TradeVolumeDecimalAscNullsLast = 'asset0_tradeVolumeDecimal_ASC_NULLS_LAST',
  Asset0TradeVolumeDecimalDesc = 'asset0_tradeVolumeDecimal_DESC',
  Asset0TradeVolumeDecimalDescNullsFirst = 'asset0_tradeVolumeDecimal_DESC_NULLS_FIRST',
  Asset0TradeVolumeDecimalDescNullsLast = 'asset0_tradeVolumeDecimal_DESC_NULLS_LAST',
  Asset0TradeVolumeAsc = 'asset0_tradeVolume_ASC',
  Asset0TradeVolumeAscNullsFirst = 'asset0_tradeVolume_ASC_NULLS_FIRST',
  Asset0TradeVolumeAscNullsLast = 'asset0_tradeVolume_ASC_NULLS_LAST',
  Asset0TradeVolumeDesc = 'asset0_tradeVolume_DESC',
  Asset0TradeVolumeDescNullsFirst = 'asset0_tradeVolume_DESC_NULLS_FIRST',
  Asset0TradeVolumeDescNullsLast = 'asset0_tradeVolume_DESC_NULLS_LAST',
  Asset1ContractIdAsc = 'asset1_contractId_ASC',
  Asset1ContractIdAscNullsFirst = 'asset1_contractId_ASC_NULLS_FIRST',
  Asset1ContractIdAscNullsLast = 'asset1_contractId_ASC_NULLS_LAST',
  Asset1ContractIdDesc = 'asset1_contractId_DESC',
  Asset1ContractIdDescNullsFirst = 'asset1_contractId_DESC_NULLS_FIRST',
  Asset1ContractIdDescNullsLast = 'asset1_contractId_DESC_NULLS_LAST',
  Asset1DecimalsAsc = 'asset1_decimals_ASC',
  Asset1DecimalsAscNullsFirst = 'asset1_decimals_ASC_NULLS_FIRST',
  Asset1DecimalsAscNullsLast = 'asset1_decimals_ASC_NULLS_LAST',
  Asset1DecimalsDesc = 'asset1_decimals_DESC',
  Asset1DecimalsDescNullsFirst = 'asset1_decimals_DESC_NULLS_FIRST',
  Asset1DecimalsDescNullsLast = 'asset1_decimals_DESC_NULLS_LAST',
  Asset1IdAsc = 'asset1_id_ASC',
  Asset1IdAscNullsFirst = 'asset1_id_ASC_NULLS_FIRST',
  Asset1IdAscNullsLast = 'asset1_id_ASC_NULLS_LAST',
  Asset1IdDesc = 'asset1_id_DESC',
  Asset1IdDescNullsFirst = 'asset1_id_DESC_NULLS_FIRST',
  Asset1IdDescNullsLast = 'asset1_id_DESC_NULLS_LAST',
  Asset1ImageAsc = 'asset1_image_ASC',
  Asset1ImageAscNullsFirst = 'asset1_image_ASC_NULLS_FIRST',
  Asset1ImageAscNullsLast = 'asset1_image_ASC_NULLS_LAST',
  Asset1ImageDesc = 'asset1_image_DESC',
  Asset1ImageDescNullsFirst = 'asset1_image_DESC_NULLS_FIRST',
  Asset1ImageDescNullsLast = 'asset1_image_DESC_NULLS_LAST',
  Asset1L1AddressAsc = 'asset1_l1Address_ASC',
  Asset1L1AddressAscNullsFirst = 'asset1_l1Address_ASC_NULLS_FIRST',
  Asset1L1AddressAscNullsLast = 'asset1_l1Address_ASC_NULLS_LAST',
  Asset1L1AddressDesc = 'asset1_l1Address_DESC',
  Asset1L1AddressDescNullsFirst = 'asset1_l1Address_DESC_NULLS_FIRST',
  Asset1L1AddressDescNullsLast = 'asset1_l1Address_DESC_NULLS_LAST',
  Asset1NameAsc = 'asset1_name_ASC',
  Asset1NameAscNullsFirst = 'asset1_name_ASC_NULLS_FIRST',
  Asset1NameAscNullsLast = 'asset1_name_ASC_NULLS_LAST',
  Asset1NameDesc = 'asset1_name_DESC',
  Asset1NameDescNullsFirst = 'asset1_name_DESC_NULLS_FIRST',
  Asset1NameDescNullsLast = 'asset1_name_DESC_NULLS_LAST',
  Asset1NumPoolsAsc = 'asset1_numPools_ASC',
  Asset1NumPoolsAscNullsFirst = 'asset1_numPools_ASC_NULLS_FIRST',
  Asset1NumPoolsAscNullsLast = 'asset1_numPools_ASC_NULLS_LAST',
  Asset1NumPoolsDesc = 'asset1_numPools_DESC',
  Asset1NumPoolsDescNullsFirst = 'asset1_numPools_DESC_NULLS_FIRST',
  Asset1NumPoolsDescNullsLast = 'asset1_numPools_DESC_NULLS_LAST',
  Asset1PriceAsc = 'asset1_price_ASC',
  Asset1PriceAscNullsFirst = 'asset1_price_ASC_NULLS_FIRST',
  Asset1PriceAscNullsLast = 'asset1_price_ASC_NULLS_LAST',
  Asset1PriceDesc = 'asset1_price_DESC',
  Asset1PriceDescNullsFirst = 'asset1_price_DESC_NULLS_FIRST',
  Asset1PriceDescNullsLast = 'asset1_price_DESC_NULLS_LAST',
  Asset1SubIdAsc = 'asset1_subId_ASC',
  Asset1SubIdAscNullsFirst = 'asset1_subId_ASC_NULLS_FIRST',
  Asset1SubIdAscNullsLast = 'asset1_subId_ASC_NULLS_LAST',
  Asset1SubIdDesc = 'asset1_subId_DESC',
  Asset1SubIdDescNullsFirst = 'asset1_subId_DESC_NULLS_FIRST',
  Asset1SubIdDescNullsLast = 'asset1_subId_DESC_NULLS_LAST',
  Asset1SupplyAsc = 'asset1_supply_ASC',
  Asset1SupplyAscNullsFirst = 'asset1_supply_ASC_NULLS_FIRST',
  Asset1SupplyAscNullsLast = 'asset1_supply_ASC_NULLS_LAST',
  Asset1SupplyDesc = 'asset1_supply_DESC',
  Asset1SupplyDescNullsFirst = 'asset1_supply_DESC_NULLS_FIRST',
  Asset1SupplyDescNullsLast = 'asset1_supply_DESC_NULLS_LAST',
  Asset1SymbolAsc = 'asset1_symbol_ASC',
  Asset1SymbolAscNullsFirst = 'asset1_symbol_ASC_NULLS_FIRST',
  Asset1SymbolAscNullsLast = 'asset1_symbol_ASC_NULLS_LAST',
  Asset1SymbolDesc = 'asset1_symbol_DESC',
  Asset1SymbolDescNullsFirst = 'asset1_symbol_DESC_NULLS_FIRST',
  Asset1SymbolDescNullsLast = 'asset1_symbol_DESC_NULLS_LAST',
  Asset1TradeVolumeDecimalAsc = 'asset1_tradeVolumeDecimal_ASC',
  Asset1TradeVolumeDecimalAscNullsFirst = 'asset1_tradeVolumeDecimal_ASC_NULLS_FIRST',
  Asset1TradeVolumeDecimalAscNullsLast = 'asset1_tradeVolumeDecimal_ASC_NULLS_LAST',
  Asset1TradeVolumeDecimalDesc = 'asset1_tradeVolumeDecimal_DESC',
  Asset1TradeVolumeDecimalDescNullsFirst = 'asset1_tradeVolumeDecimal_DESC_NULLS_FIRST',
  Asset1TradeVolumeDecimalDescNullsLast = 'asset1_tradeVolumeDecimal_DESC_NULLS_LAST',
  Asset1TradeVolumeAsc = 'asset1_tradeVolume_ASC',
  Asset1TradeVolumeAscNullsFirst = 'asset1_tradeVolume_ASC_NULLS_FIRST',
  Asset1TradeVolumeAscNullsLast = 'asset1_tradeVolume_ASC_NULLS_LAST',
  Asset1TradeVolumeDesc = 'asset1_tradeVolume_DESC',
  Asset1TradeVolumeDescNullsFirst = 'asset1_tradeVolume_DESC_NULLS_FIRST',
  Asset1TradeVolumeDescNullsLast = 'asset1_tradeVolume_DESC_NULLS_LAST',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberAscNullsFirst = 'blockNumber_ASC_NULLS_FIRST',
  BlockNumberAscNullsLast = 'blockNumber_ASC_NULLS_LAST',
  BlockNumberDesc = 'blockNumber_DESC',
  BlockNumberDescNullsFirst = 'blockNumber_DESC_NULLS_FIRST',
  BlockNumberDescNullsLast = 'blockNumber_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  PoolFeesUsdAsc = 'pool_feesUSD_ASC',
  PoolFeesUsdAscNullsFirst = 'pool_feesUSD_ASC_NULLS_FIRST',
  PoolFeesUsdAscNullsLast = 'pool_feesUSD_ASC_NULLS_LAST',
  PoolFeesUsdDesc = 'pool_feesUSD_DESC',
  PoolFeesUsdDescNullsFirst = 'pool_feesUSD_DESC_NULLS_FIRST',
  PoolFeesUsdDescNullsLast = 'pool_feesUSD_DESC_NULLS_LAST',
  PoolIdAsc = 'pool_id_ASC',
  PoolIdAscNullsFirst = 'pool_id_ASC_NULLS_FIRST',
  PoolIdAscNullsLast = 'pool_id_ASC_NULLS_LAST',
  PoolIdDesc = 'pool_id_DESC',
  PoolIdDescNullsFirst = 'pool_id_DESC_NULLS_FIRST',
  PoolIdDescNullsLast = 'pool_id_DESC_NULLS_LAST',
  PoolIsStableAsc = 'pool_isStable_ASC',
  PoolIsStableAscNullsFirst = 'pool_isStable_ASC_NULLS_FIRST',
  PoolIsStableAscNullsLast = 'pool_isStable_ASC_NULLS_LAST',
  PoolIsStableDesc = 'pool_isStable_DESC',
  PoolIsStableDescNullsFirst = 'pool_isStable_DESC_NULLS_FIRST',
  PoolIsStableDescNullsLast = 'pool_isStable_DESC_NULLS_LAST',
  PoolPrice0Asc = 'pool_price0_ASC',
  PoolPrice0AscNullsFirst = 'pool_price0_ASC_NULLS_FIRST',
  PoolPrice0AscNullsLast = 'pool_price0_ASC_NULLS_LAST',
  PoolPrice0Desc = 'pool_price0_DESC',
  PoolPrice0DescNullsFirst = 'pool_price0_DESC_NULLS_FIRST',
  PoolPrice0DescNullsLast = 'pool_price0_DESC_NULLS_LAST',
  PoolPrice1Asc = 'pool_price1_ASC',
  PoolPrice1AscNullsFirst = 'pool_price1_ASC_NULLS_FIRST',
  PoolPrice1AscNullsLast = 'pool_price1_ASC_NULLS_LAST',
  PoolPrice1Desc = 'pool_price1_DESC',
  PoolPrice1DescNullsFirst = 'pool_price1_DESC_NULLS_FIRST',
  PoolPrice1DescNullsLast = 'pool_price1_DESC_NULLS_LAST',
  PoolReserve0DecimalAsc = 'pool_reserve0Decimal_ASC',
  PoolReserve0DecimalAscNullsFirst = 'pool_reserve0Decimal_ASC_NULLS_FIRST',
  PoolReserve0DecimalAscNullsLast = 'pool_reserve0Decimal_ASC_NULLS_LAST',
  PoolReserve0DecimalDesc = 'pool_reserve0Decimal_DESC',
  PoolReserve0DecimalDescNullsFirst = 'pool_reserve0Decimal_DESC_NULLS_FIRST',
  PoolReserve0DecimalDescNullsLast = 'pool_reserve0Decimal_DESC_NULLS_LAST',
  PoolReserve0Asc = 'pool_reserve0_ASC',
  PoolReserve0AscNullsFirst = 'pool_reserve0_ASC_NULLS_FIRST',
  PoolReserve0AscNullsLast = 'pool_reserve0_ASC_NULLS_LAST',
  PoolReserve0Desc = 'pool_reserve0_DESC',
  PoolReserve0DescNullsFirst = 'pool_reserve0_DESC_NULLS_FIRST',
  PoolReserve0DescNullsLast = 'pool_reserve0_DESC_NULLS_LAST',
  PoolReserve1DecimalAsc = 'pool_reserve1Decimal_ASC',
  PoolReserve1DecimalAscNullsFirst = 'pool_reserve1Decimal_ASC_NULLS_FIRST',
  PoolReserve1DecimalAscNullsLast = 'pool_reserve1Decimal_ASC_NULLS_LAST',
  PoolReserve1DecimalDesc = 'pool_reserve1Decimal_DESC',
  PoolReserve1DecimalDescNullsFirst = 'pool_reserve1Decimal_DESC_NULLS_FIRST',
  PoolReserve1DecimalDescNullsLast = 'pool_reserve1Decimal_DESC_NULLS_LAST',
  PoolReserve1Asc = 'pool_reserve1_ASC',
  PoolReserve1AscNullsFirst = 'pool_reserve1_ASC_NULLS_FIRST',
  PoolReserve1AscNullsLast = 'pool_reserve1_ASC_NULLS_LAST',
  PoolReserve1Desc = 'pool_reserve1_DESC',
  PoolReserve1DescNullsFirst = 'pool_reserve1_DESC_NULLS_FIRST',
  PoolReserve1DescNullsLast = 'pool_reserve1_DESC_NULLS_LAST',
  PoolTvlUsdAsc = 'pool_tvlUSD_ASC',
  PoolTvlUsdAscNullsFirst = 'pool_tvlUSD_ASC_NULLS_FIRST',
  PoolTvlUsdAscNullsLast = 'pool_tvlUSD_ASC_NULLS_LAST',
  PoolTvlUsdDesc = 'pool_tvlUSD_DESC',
  PoolTvlUsdDescNullsFirst = 'pool_tvlUSD_DESC_NULLS_FIRST',
  PoolTvlUsdDescNullsLast = 'pool_tvlUSD_DESC_NULLS_LAST',
  PoolVolumeAsset0DecimalAsc = 'pool_volumeAsset0Decimal_ASC',
  PoolVolumeAsset0DecimalAscNullsFirst = 'pool_volumeAsset0Decimal_ASC_NULLS_FIRST',
  PoolVolumeAsset0DecimalAscNullsLast = 'pool_volumeAsset0Decimal_ASC_NULLS_LAST',
  PoolVolumeAsset0DecimalDesc = 'pool_volumeAsset0Decimal_DESC',
  PoolVolumeAsset0DecimalDescNullsFirst = 'pool_volumeAsset0Decimal_DESC_NULLS_FIRST',
  PoolVolumeAsset0DecimalDescNullsLast = 'pool_volumeAsset0Decimal_DESC_NULLS_LAST',
  PoolVolumeAsset0Asc = 'pool_volumeAsset0_ASC',
  PoolVolumeAsset0AscNullsFirst = 'pool_volumeAsset0_ASC_NULLS_FIRST',
  PoolVolumeAsset0AscNullsLast = 'pool_volumeAsset0_ASC_NULLS_LAST',
  PoolVolumeAsset0Desc = 'pool_volumeAsset0_DESC',
  PoolVolumeAsset0DescNullsFirst = 'pool_volumeAsset0_DESC_NULLS_FIRST',
  PoolVolumeAsset0DescNullsLast = 'pool_volumeAsset0_DESC_NULLS_LAST',
  PoolVolumeAsset1DecimalAsc = 'pool_volumeAsset1Decimal_ASC',
  PoolVolumeAsset1DecimalAscNullsFirst = 'pool_volumeAsset1Decimal_ASC_NULLS_FIRST',
  PoolVolumeAsset1DecimalAscNullsLast = 'pool_volumeAsset1Decimal_ASC_NULLS_LAST',
  PoolVolumeAsset1DecimalDesc = 'pool_volumeAsset1Decimal_DESC',
  PoolVolumeAsset1DecimalDescNullsFirst = 'pool_volumeAsset1Decimal_DESC_NULLS_FIRST',
  PoolVolumeAsset1DecimalDescNullsLast = 'pool_volumeAsset1Decimal_DESC_NULLS_LAST',
  PoolVolumeAsset1Asc = 'pool_volumeAsset1_ASC',
  PoolVolumeAsset1AscNullsFirst = 'pool_volumeAsset1_ASC_NULLS_FIRST',
  PoolVolumeAsset1AscNullsLast = 'pool_volumeAsset1_ASC_NULLS_LAST',
  PoolVolumeAsset1Desc = 'pool_volumeAsset1_DESC',
  PoolVolumeAsset1DescNullsFirst = 'pool_volumeAsset1_DESC_NULLS_FIRST',
  PoolVolumeAsset1DescNullsLast = 'pool_volumeAsset1_DESC_NULLS_LAST',
  PoolVolumeUsdAsc = 'pool_volumeUSD_ASC',
  PoolVolumeUsdAscNullsFirst = 'pool_volumeUSD_ASC_NULLS_FIRST',
  PoolVolumeUsdAscNullsLast = 'pool_volumeUSD_ASC_NULLS_LAST',
  PoolVolumeUsdDesc = 'pool_volumeUSD_DESC',
  PoolVolumeUsdDescNullsFirst = 'pool_volumeUSD_DESC_NULLS_FIRST',
  PoolVolumeUsdDescNullsLast = 'pool_volumeUSD_DESC_NULLS_LAST',
  Reserves0AfterAsc = 'reserves0After_ASC',
  Reserves0AfterAscNullsFirst = 'reserves0After_ASC_NULLS_FIRST',
  Reserves0AfterAscNullsLast = 'reserves0After_ASC_NULLS_LAST',
  Reserves0AfterDesc = 'reserves0After_DESC',
  Reserves0AfterDescNullsFirst = 'reserves0After_DESC_NULLS_FIRST',
  Reserves0AfterDescNullsLast = 'reserves0After_DESC_NULLS_LAST',
  Reserves0BeforeAsc = 'reserves0Before_ASC',
  Reserves0BeforeAscNullsFirst = 'reserves0Before_ASC_NULLS_FIRST',
  Reserves0BeforeAscNullsLast = 'reserves0Before_ASC_NULLS_LAST',
  Reserves0BeforeDesc = 'reserves0Before_DESC',
  Reserves0BeforeDescNullsFirst = 'reserves0Before_DESC_NULLS_FIRST',
  Reserves0BeforeDescNullsLast = 'reserves0Before_DESC_NULLS_LAST',
  Reserves1AfterAsc = 'reserves1After_ASC',
  Reserves1AfterAscNullsFirst = 'reserves1After_ASC_NULLS_FIRST',
  Reserves1AfterAscNullsLast = 'reserves1After_ASC_NULLS_LAST',
  Reserves1AfterDesc = 'reserves1After_DESC',
  Reserves1AfterDescNullsFirst = 'reserves1After_DESC_NULLS_FIRST',
  Reserves1AfterDescNullsLast = 'reserves1After_DESC_NULLS_LAST',
  Reserves1BeforeAsc = 'reserves1Before_ASC',
  Reserves1BeforeAscNullsFirst = 'reserves1Before_ASC_NULLS_FIRST',
  Reserves1BeforeAscNullsLast = 'reserves1Before_ASC_NULLS_LAST',
  Reserves1BeforeDesc = 'reserves1Before_DESC',
  Reserves1BeforeDescNullsFirst = 'reserves1Before_DESC_NULLS_FIRST',
  Reserves1BeforeDescNullsLast = 'reserves1Before_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  TransactionAsc = 'transaction_ASC',
  TransactionAscNullsFirst = 'transaction_ASC_NULLS_FIRST',
  TransactionAscNullsLast = 'transaction_ASC_NULLS_LAST',
  TransactionDesc = 'transaction_DESC',
  TransactionDescNullsFirst = 'transaction_DESC_NULLS_FIRST',
  TransactionDescNullsLast = 'transaction_DESC_NULLS_LAST',
  TypeAsc = 'type_ASC',
  TypeAscNullsFirst = 'type_ASC_NULLS_FIRST',
  TypeAscNullsLast = 'type_ASC_NULLS_LAST',
  TypeDesc = 'type_DESC',
  TypeDescNullsFirst = 'type_DESC_NULLS_FIRST',
  TypeDescNullsLast = 'type_DESC_NULLS_LAST'
}

export type ActionWhereInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  amount0In_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0In_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount0In_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount0In_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0Out_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount0Out_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount0Out_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1In_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1In_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount1In_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount1In_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1Out_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount1Out_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount1Out_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  asset0?: InputMaybe<AssetWhereInput>;
  asset0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  asset1?: InputMaybe<AssetWhereInput>;
  asset1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  pool?: InputMaybe<PoolWhereInput>;
  pool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserves0After_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves0After_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserves0After_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0After_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves0Before_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves0Before_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserves0Before_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves0Before_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves1After_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves1After_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserves1After_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1After_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves1Before_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserves1Before_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserves1Before_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserves1Before_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  transaction_endsWith?: InputMaybe<Scalars['String']['input']>;
  transaction_eq?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  transaction_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  transaction_not_eq?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  transaction_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<Type>;
  type_in?: InputMaybe<Array<Type>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_not_eq?: InputMaybe<Type>;
  type_not_in?: InputMaybe<Array<Type>>;
};

export type ActionsConnection = {
  __typename?: 'ActionsConnection';
  edges: Array<ActionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Asset = {
  __typename?: 'Asset';
  contractId?: Maybe<Scalars['String']['output']>;
  decimals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  l1Address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numPools: Scalars['Int']['output'];
  price: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  supply: Scalars['BigInt']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  tradeVolume: Scalars['BigInt']['output'];
  tradeVolumeDecimal: Scalars['String']['output'];
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  cursor: Scalars['String']['output'];
  node: Asset;
};

export enum AssetOrderByInput {
  ContractIdAsc = 'contractId_ASC',
  ContractIdAscNullsFirst = 'contractId_ASC_NULLS_FIRST',
  ContractIdAscNullsLast = 'contractId_ASC_NULLS_LAST',
  ContractIdDesc = 'contractId_DESC',
  ContractIdDescNullsFirst = 'contractId_DESC_NULLS_FIRST',
  ContractIdDescNullsLast = 'contractId_DESC_NULLS_LAST',
  DecimalsAsc = 'decimals_ASC',
  DecimalsAscNullsFirst = 'decimals_ASC_NULLS_FIRST',
  DecimalsAscNullsLast = 'decimals_ASC_NULLS_LAST',
  DecimalsDesc = 'decimals_DESC',
  DecimalsDescNullsFirst = 'decimals_DESC_NULLS_FIRST',
  DecimalsDescNullsLast = 'decimals_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  ImageAsc = 'image_ASC',
  ImageAscNullsFirst = 'image_ASC_NULLS_FIRST',
  ImageAscNullsLast = 'image_ASC_NULLS_LAST',
  ImageDesc = 'image_DESC',
  ImageDescNullsFirst = 'image_DESC_NULLS_FIRST',
  ImageDescNullsLast = 'image_DESC_NULLS_LAST',
  L1AddressAsc = 'l1Address_ASC',
  L1AddressAscNullsFirst = 'l1Address_ASC_NULLS_FIRST',
  L1AddressAscNullsLast = 'l1Address_ASC_NULLS_LAST',
  L1AddressDesc = 'l1Address_DESC',
  L1AddressDescNullsFirst = 'l1Address_DESC_NULLS_FIRST',
  L1AddressDescNullsLast = 'l1Address_DESC_NULLS_LAST',
  NameAsc = 'name_ASC',
  NameAscNullsFirst = 'name_ASC_NULLS_FIRST',
  NameAscNullsLast = 'name_ASC_NULLS_LAST',
  NameDesc = 'name_DESC',
  NameDescNullsFirst = 'name_DESC_NULLS_FIRST',
  NameDescNullsLast = 'name_DESC_NULLS_LAST',
  NumPoolsAsc = 'numPools_ASC',
  NumPoolsAscNullsFirst = 'numPools_ASC_NULLS_FIRST',
  NumPoolsAscNullsLast = 'numPools_ASC_NULLS_LAST',
  NumPoolsDesc = 'numPools_DESC',
  NumPoolsDescNullsFirst = 'numPools_DESC_NULLS_FIRST',
  NumPoolsDescNullsLast = 'numPools_DESC_NULLS_LAST',
  PriceAsc = 'price_ASC',
  PriceAscNullsFirst = 'price_ASC_NULLS_FIRST',
  PriceAscNullsLast = 'price_ASC_NULLS_LAST',
  PriceDesc = 'price_DESC',
  PriceDescNullsFirst = 'price_DESC_NULLS_FIRST',
  PriceDescNullsLast = 'price_DESC_NULLS_LAST',
  SubIdAsc = 'subId_ASC',
  SubIdAscNullsFirst = 'subId_ASC_NULLS_FIRST',
  SubIdAscNullsLast = 'subId_ASC_NULLS_LAST',
  SubIdDesc = 'subId_DESC',
  SubIdDescNullsFirst = 'subId_DESC_NULLS_FIRST',
  SubIdDescNullsLast = 'subId_DESC_NULLS_LAST',
  SupplyAsc = 'supply_ASC',
  SupplyAscNullsFirst = 'supply_ASC_NULLS_FIRST',
  SupplyAscNullsLast = 'supply_ASC_NULLS_LAST',
  SupplyDesc = 'supply_DESC',
  SupplyDescNullsFirst = 'supply_DESC_NULLS_FIRST',
  SupplyDescNullsLast = 'supply_DESC_NULLS_LAST',
  SymbolAsc = 'symbol_ASC',
  SymbolAscNullsFirst = 'symbol_ASC_NULLS_FIRST',
  SymbolAscNullsLast = 'symbol_ASC_NULLS_LAST',
  SymbolDesc = 'symbol_DESC',
  SymbolDescNullsFirst = 'symbol_DESC_NULLS_FIRST',
  SymbolDescNullsLast = 'symbol_DESC_NULLS_LAST',
  TradeVolumeDecimalAsc = 'tradeVolumeDecimal_ASC',
  TradeVolumeDecimalAscNullsFirst = 'tradeVolumeDecimal_ASC_NULLS_FIRST',
  TradeVolumeDecimalAscNullsLast = 'tradeVolumeDecimal_ASC_NULLS_LAST',
  TradeVolumeDecimalDesc = 'tradeVolumeDecimal_DESC',
  TradeVolumeDecimalDescNullsFirst = 'tradeVolumeDecimal_DESC_NULLS_FIRST',
  TradeVolumeDecimalDescNullsLast = 'tradeVolumeDecimal_DESC_NULLS_LAST',
  TradeVolumeAsc = 'tradeVolume_ASC',
  TradeVolumeAscNullsFirst = 'tradeVolume_ASC_NULLS_FIRST',
  TradeVolumeAscNullsLast = 'tradeVolume_ASC_NULLS_LAST',
  TradeVolumeDesc = 'tradeVolume_DESC',
  TradeVolumeDescNullsFirst = 'tradeVolume_DESC_NULLS_FIRST',
  TradeVolumeDescNullsLast = 'tradeVolume_DESC_NULLS_LAST'
}

export type AssetWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  contractId_contains?: InputMaybe<Scalars['String']['input']>;
  contractId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  contractId_endsWith?: InputMaybe<Scalars['String']['input']>;
  contractId_eq?: InputMaybe<Scalars['String']['input']>;
  contractId_gt?: InputMaybe<Scalars['String']['input']>;
  contractId_gte?: InputMaybe<Scalars['String']['input']>;
  contractId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contractId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  contractId_lt?: InputMaybe<Scalars['String']['input']>;
  contractId_lte?: InputMaybe<Scalars['String']['input']>;
  contractId_not_contains?: InputMaybe<Scalars['String']['input']>;
  contractId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  contractId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  contractId_not_eq?: InputMaybe<Scalars['String']['input']>;
  contractId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contractId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  contractId_startsWith?: InputMaybe<Scalars['String']['input']>;
  decimals_eq?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_eq?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  image_endsWith?: InputMaybe<Scalars['String']['input']>;
  image_eq?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  image_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  image_not_eq?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  image_startsWith?: InputMaybe<Scalars['String']['input']>;
  l1Address_contains?: InputMaybe<Scalars['String']['input']>;
  l1Address_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  l1Address_endsWith?: InputMaybe<Scalars['String']['input']>;
  l1Address_eq?: InputMaybe<Scalars['String']['input']>;
  l1Address_gt?: InputMaybe<Scalars['String']['input']>;
  l1Address_gte?: InputMaybe<Scalars['String']['input']>;
  l1Address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  l1Address_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  l1Address_lt?: InputMaybe<Scalars['String']['input']>;
  l1Address_lte?: InputMaybe<Scalars['String']['input']>;
  l1Address_not_contains?: InputMaybe<Scalars['String']['input']>;
  l1Address_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  l1Address_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  l1Address_not_eq?: InputMaybe<Scalars['String']['input']>;
  l1Address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  l1Address_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  l1Address_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
  numPools_eq?: InputMaybe<Scalars['Int']['input']>;
  numPools_gt?: InputMaybe<Scalars['Int']['input']>;
  numPools_gte?: InputMaybe<Scalars['Int']['input']>;
  numPools_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numPools_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  numPools_lt?: InputMaybe<Scalars['Int']['input']>;
  numPools_lte?: InputMaybe<Scalars['Int']['input']>;
  numPools_not_eq?: InputMaybe<Scalars['Int']['input']>;
  numPools_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  price_contains?: InputMaybe<Scalars['String']['input']>;
  price_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price_endsWith?: InputMaybe<Scalars['String']['input']>;
  price_eq?: InputMaybe<Scalars['String']['input']>;
  price_gt?: InputMaybe<Scalars['String']['input']>;
  price_gte?: InputMaybe<Scalars['String']['input']>;
  price_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price_lt?: InputMaybe<Scalars['String']['input']>;
  price_lte?: InputMaybe<Scalars['String']['input']>;
  price_not_contains?: InputMaybe<Scalars['String']['input']>;
  price_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  price_not_eq?: InputMaybe<Scalars['String']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  price_startsWith?: InputMaybe<Scalars['String']['input']>;
  subId_contains?: InputMaybe<Scalars['String']['input']>;
  subId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  subId_endsWith?: InputMaybe<Scalars['String']['input']>;
  subId_eq?: InputMaybe<Scalars['String']['input']>;
  subId_gt?: InputMaybe<Scalars['String']['input']>;
  subId_gte?: InputMaybe<Scalars['String']['input']>;
  subId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  subId_lt?: InputMaybe<Scalars['String']['input']>;
  subId_lte?: InputMaybe<Scalars['String']['input']>;
  subId_not_contains?: InputMaybe<Scalars['String']['input']>;
  subId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  subId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  subId_not_eq?: InputMaybe<Scalars['String']['input']>;
  subId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  subId_startsWith?: InputMaybe<Scalars['String']['input']>;
  supply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  supply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_not_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_startsWith?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_contains?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_eq?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_gt?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_gte?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradeVolumeDecimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeDecimal_lt?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_lte?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tradeVolumeDecimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tradeVolumeDecimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  tradeVolume_eq?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeVolume_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type AssetsConnection = {
  __typename?: 'AssetsConnection';
  edges: Array<AssetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Pool = {
  __typename?: 'Pool';
  asset0: Asset;
  asset1: Asset;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isStable: Scalars['Boolean']['output'];
  lpToken: Asset;
  price0: Scalars['String']['output'];
  price1: Scalars['String']['output'];
  reserve0: Scalars['BigInt']['output'];
  reserve0Decimal: Scalars['String']['output'];
  reserve1: Scalars['BigInt']['output'];
  reserve1Decimal: Scalars['String']['output'];
  snapshots: Array<PoolHourlySnapshot>;
  tvlUSD: Scalars['String']['output'];
  volumeAsset0: Scalars['BigInt']['output'];
  volumeAsset0Decimal: Scalars['String']['output'];
  volumeAsset1: Scalars['BigInt']['output'];
  volumeAsset1Decimal: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type PoolSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PoolHourlySnapshotOrderByInput>>;
  where?: InputMaybe<PoolHourlySnapshotWhereInput>;
};

export type PoolEdge = {
  __typename?: 'PoolEdge';
  cursor: Scalars['String']['output'];
  node: Pool;
};

export type PoolHourlySnapshot = {
  __typename?: 'PoolHourlySnapshot';
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  pool: Pool;
  price0: Scalars['String']['output'];
  price1: Scalars['String']['output'];
  reserve0: Scalars['BigInt']['output'];
  reserve0Decimal: Scalars['String']['output'];
  reserve1: Scalars['BigInt']['output'];
  reserve1Decimal: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tvlUSD: Scalars['String']['output'];
  volumeAsset0: Scalars['BigInt']['output'];
  volumeAsset0Decimal: Scalars['String']['output'];
  volumeAsset1: Scalars['BigInt']['output'];
  volumeAsset1Decimal: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolHourlySnapshotEdge = {
  __typename?: 'PoolHourlySnapshotEdge';
  cursor: Scalars['String']['output'];
  node: PoolHourlySnapshot;
};

export enum PoolHourlySnapshotOrderByInput {
  FeesUsdAsc = 'feesUSD_ASC',
  FeesUsdAscNullsFirst = 'feesUSD_ASC_NULLS_FIRST',
  FeesUsdAscNullsLast = 'feesUSD_ASC_NULLS_LAST',
  FeesUsdDesc = 'feesUSD_DESC',
  FeesUsdDescNullsFirst = 'feesUSD_DESC_NULLS_FIRST',
  FeesUsdDescNullsLast = 'feesUSD_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  PoolFeesUsdAsc = 'pool_feesUSD_ASC',
  PoolFeesUsdAscNullsFirst = 'pool_feesUSD_ASC_NULLS_FIRST',
  PoolFeesUsdAscNullsLast = 'pool_feesUSD_ASC_NULLS_LAST',
  PoolFeesUsdDesc = 'pool_feesUSD_DESC',
  PoolFeesUsdDescNullsFirst = 'pool_feesUSD_DESC_NULLS_FIRST',
  PoolFeesUsdDescNullsLast = 'pool_feesUSD_DESC_NULLS_LAST',
  PoolIdAsc = 'pool_id_ASC',
  PoolIdAscNullsFirst = 'pool_id_ASC_NULLS_FIRST',
  PoolIdAscNullsLast = 'pool_id_ASC_NULLS_LAST',
  PoolIdDesc = 'pool_id_DESC',
  PoolIdDescNullsFirst = 'pool_id_DESC_NULLS_FIRST',
  PoolIdDescNullsLast = 'pool_id_DESC_NULLS_LAST',
  PoolIsStableAsc = 'pool_isStable_ASC',
  PoolIsStableAscNullsFirst = 'pool_isStable_ASC_NULLS_FIRST',
  PoolIsStableAscNullsLast = 'pool_isStable_ASC_NULLS_LAST',
  PoolIsStableDesc = 'pool_isStable_DESC',
  PoolIsStableDescNullsFirst = 'pool_isStable_DESC_NULLS_FIRST',
  PoolIsStableDescNullsLast = 'pool_isStable_DESC_NULLS_LAST',
  PoolPrice0Asc = 'pool_price0_ASC',
  PoolPrice0AscNullsFirst = 'pool_price0_ASC_NULLS_FIRST',
  PoolPrice0AscNullsLast = 'pool_price0_ASC_NULLS_LAST',
  PoolPrice0Desc = 'pool_price0_DESC',
  PoolPrice0DescNullsFirst = 'pool_price0_DESC_NULLS_FIRST',
  PoolPrice0DescNullsLast = 'pool_price0_DESC_NULLS_LAST',
  PoolPrice1Asc = 'pool_price1_ASC',
  PoolPrice1AscNullsFirst = 'pool_price1_ASC_NULLS_FIRST',
  PoolPrice1AscNullsLast = 'pool_price1_ASC_NULLS_LAST',
  PoolPrice1Desc = 'pool_price1_DESC',
  PoolPrice1DescNullsFirst = 'pool_price1_DESC_NULLS_FIRST',
  PoolPrice1DescNullsLast = 'pool_price1_DESC_NULLS_LAST',
  PoolReserve0DecimalAsc = 'pool_reserve0Decimal_ASC',
  PoolReserve0DecimalAscNullsFirst = 'pool_reserve0Decimal_ASC_NULLS_FIRST',
  PoolReserve0DecimalAscNullsLast = 'pool_reserve0Decimal_ASC_NULLS_LAST',
  PoolReserve0DecimalDesc = 'pool_reserve0Decimal_DESC',
  PoolReserve0DecimalDescNullsFirst = 'pool_reserve0Decimal_DESC_NULLS_FIRST',
  PoolReserve0DecimalDescNullsLast = 'pool_reserve0Decimal_DESC_NULLS_LAST',
  PoolReserve0Asc = 'pool_reserve0_ASC',
  PoolReserve0AscNullsFirst = 'pool_reserve0_ASC_NULLS_FIRST',
  PoolReserve0AscNullsLast = 'pool_reserve0_ASC_NULLS_LAST',
  PoolReserve0Desc = 'pool_reserve0_DESC',
  PoolReserve0DescNullsFirst = 'pool_reserve0_DESC_NULLS_FIRST',
  PoolReserve0DescNullsLast = 'pool_reserve0_DESC_NULLS_LAST',
  PoolReserve1DecimalAsc = 'pool_reserve1Decimal_ASC',
  PoolReserve1DecimalAscNullsFirst = 'pool_reserve1Decimal_ASC_NULLS_FIRST',
  PoolReserve1DecimalAscNullsLast = 'pool_reserve1Decimal_ASC_NULLS_LAST',
  PoolReserve1DecimalDesc = 'pool_reserve1Decimal_DESC',
  PoolReserve1DecimalDescNullsFirst = 'pool_reserve1Decimal_DESC_NULLS_FIRST',
  PoolReserve1DecimalDescNullsLast = 'pool_reserve1Decimal_DESC_NULLS_LAST',
  PoolReserve1Asc = 'pool_reserve1_ASC',
  PoolReserve1AscNullsFirst = 'pool_reserve1_ASC_NULLS_FIRST',
  PoolReserve1AscNullsLast = 'pool_reserve1_ASC_NULLS_LAST',
  PoolReserve1Desc = 'pool_reserve1_DESC',
  PoolReserve1DescNullsFirst = 'pool_reserve1_DESC_NULLS_FIRST',
  PoolReserve1DescNullsLast = 'pool_reserve1_DESC_NULLS_LAST',
  PoolTvlUsdAsc = 'pool_tvlUSD_ASC',
  PoolTvlUsdAscNullsFirst = 'pool_tvlUSD_ASC_NULLS_FIRST',
  PoolTvlUsdAscNullsLast = 'pool_tvlUSD_ASC_NULLS_LAST',
  PoolTvlUsdDesc = 'pool_tvlUSD_DESC',
  PoolTvlUsdDescNullsFirst = 'pool_tvlUSD_DESC_NULLS_FIRST',
  PoolTvlUsdDescNullsLast = 'pool_tvlUSD_DESC_NULLS_LAST',
  PoolVolumeAsset0DecimalAsc = 'pool_volumeAsset0Decimal_ASC',
  PoolVolumeAsset0DecimalAscNullsFirst = 'pool_volumeAsset0Decimal_ASC_NULLS_FIRST',
  PoolVolumeAsset0DecimalAscNullsLast = 'pool_volumeAsset0Decimal_ASC_NULLS_LAST',
  PoolVolumeAsset0DecimalDesc = 'pool_volumeAsset0Decimal_DESC',
  PoolVolumeAsset0DecimalDescNullsFirst = 'pool_volumeAsset0Decimal_DESC_NULLS_FIRST',
  PoolVolumeAsset0DecimalDescNullsLast = 'pool_volumeAsset0Decimal_DESC_NULLS_LAST',
  PoolVolumeAsset0Asc = 'pool_volumeAsset0_ASC',
  PoolVolumeAsset0AscNullsFirst = 'pool_volumeAsset0_ASC_NULLS_FIRST',
  PoolVolumeAsset0AscNullsLast = 'pool_volumeAsset0_ASC_NULLS_LAST',
  PoolVolumeAsset0Desc = 'pool_volumeAsset0_DESC',
  PoolVolumeAsset0DescNullsFirst = 'pool_volumeAsset0_DESC_NULLS_FIRST',
  PoolVolumeAsset0DescNullsLast = 'pool_volumeAsset0_DESC_NULLS_LAST',
  PoolVolumeAsset1DecimalAsc = 'pool_volumeAsset1Decimal_ASC',
  PoolVolumeAsset1DecimalAscNullsFirst = 'pool_volumeAsset1Decimal_ASC_NULLS_FIRST',
  PoolVolumeAsset1DecimalAscNullsLast = 'pool_volumeAsset1Decimal_ASC_NULLS_LAST',
  PoolVolumeAsset1DecimalDesc = 'pool_volumeAsset1Decimal_DESC',
  PoolVolumeAsset1DecimalDescNullsFirst = 'pool_volumeAsset1Decimal_DESC_NULLS_FIRST',
  PoolVolumeAsset1DecimalDescNullsLast = 'pool_volumeAsset1Decimal_DESC_NULLS_LAST',
  PoolVolumeAsset1Asc = 'pool_volumeAsset1_ASC',
  PoolVolumeAsset1AscNullsFirst = 'pool_volumeAsset1_ASC_NULLS_FIRST',
  PoolVolumeAsset1AscNullsLast = 'pool_volumeAsset1_ASC_NULLS_LAST',
  PoolVolumeAsset1Desc = 'pool_volumeAsset1_DESC',
  PoolVolumeAsset1DescNullsFirst = 'pool_volumeAsset1_DESC_NULLS_FIRST',
  PoolVolumeAsset1DescNullsLast = 'pool_volumeAsset1_DESC_NULLS_LAST',
  PoolVolumeUsdAsc = 'pool_volumeUSD_ASC',
  PoolVolumeUsdAscNullsFirst = 'pool_volumeUSD_ASC_NULLS_FIRST',
  PoolVolumeUsdAscNullsLast = 'pool_volumeUSD_ASC_NULLS_LAST',
  PoolVolumeUsdDesc = 'pool_volumeUSD_DESC',
  PoolVolumeUsdDescNullsFirst = 'pool_volumeUSD_DESC_NULLS_FIRST',
  PoolVolumeUsdDescNullsLast = 'pool_volumeUSD_DESC_NULLS_LAST',
  Price0Asc = 'price0_ASC',
  Price0AscNullsFirst = 'price0_ASC_NULLS_FIRST',
  Price0AscNullsLast = 'price0_ASC_NULLS_LAST',
  Price0Desc = 'price0_DESC',
  Price0DescNullsFirst = 'price0_DESC_NULLS_FIRST',
  Price0DescNullsLast = 'price0_DESC_NULLS_LAST',
  Price1Asc = 'price1_ASC',
  Price1AscNullsFirst = 'price1_ASC_NULLS_FIRST',
  Price1AscNullsLast = 'price1_ASC_NULLS_LAST',
  Price1Desc = 'price1_DESC',
  Price1DescNullsFirst = 'price1_DESC_NULLS_FIRST',
  Price1DescNullsLast = 'price1_DESC_NULLS_LAST',
  Reserve0DecimalAsc = 'reserve0Decimal_ASC',
  Reserve0DecimalAscNullsFirst = 'reserve0Decimal_ASC_NULLS_FIRST',
  Reserve0DecimalAscNullsLast = 'reserve0Decimal_ASC_NULLS_LAST',
  Reserve0DecimalDesc = 'reserve0Decimal_DESC',
  Reserve0DecimalDescNullsFirst = 'reserve0Decimal_DESC_NULLS_FIRST',
  Reserve0DecimalDescNullsLast = 'reserve0Decimal_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1DecimalAsc = 'reserve1Decimal_ASC',
  Reserve1DecimalAscNullsFirst = 'reserve1Decimal_ASC_NULLS_FIRST',
  Reserve1DecimalAscNullsLast = 'reserve1Decimal_ASC_NULLS_LAST',
  Reserve1DecimalDesc = 'reserve1Decimal_DESC',
  Reserve1DecimalDescNullsFirst = 'reserve1Decimal_DESC_NULLS_FIRST',
  Reserve1DecimalDescNullsLast = 'reserve1Decimal_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  TvlUsdAsc = 'tvlUSD_ASC',
  TvlUsdAscNullsFirst = 'tvlUSD_ASC_NULLS_FIRST',
  TvlUsdAscNullsLast = 'tvlUSD_ASC_NULLS_LAST',
  TvlUsdDesc = 'tvlUSD_DESC',
  TvlUsdDescNullsFirst = 'tvlUSD_DESC_NULLS_FIRST',
  TvlUsdDescNullsLast = 'tvlUSD_DESC_NULLS_LAST',
  VolumeAsset0DecimalAsc = 'volumeAsset0Decimal_ASC',
  VolumeAsset0DecimalAscNullsFirst = 'volumeAsset0Decimal_ASC_NULLS_FIRST',
  VolumeAsset0DecimalAscNullsLast = 'volumeAsset0Decimal_ASC_NULLS_LAST',
  VolumeAsset0DecimalDesc = 'volumeAsset0Decimal_DESC',
  VolumeAsset0DecimalDescNullsFirst = 'volumeAsset0Decimal_DESC_NULLS_FIRST',
  VolumeAsset0DecimalDescNullsLast = 'volumeAsset0Decimal_DESC_NULLS_LAST',
  VolumeAsset0Asc = 'volumeAsset0_ASC',
  VolumeAsset0AscNullsFirst = 'volumeAsset0_ASC_NULLS_FIRST',
  VolumeAsset0AscNullsLast = 'volumeAsset0_ASC_NULLS_LAST',
  VolumeAsset0Desc = 'volumeAsset0_DESC',
  VolumeAsset0DescNullsFirst = 'volumeAsset0_DESC_NULLS_FIRST',
  VolumeAsset0DescNullsLast = 'volumeAsset0_DESC_NULLS_LAST',
  VolumeAsset1DecimalAsc = 'volumeAsset1Decimal_ASC',
  VolumeAsset1DecimalAscNullsFirst = 'volumeAsset1Decimal_ASC_NULLS_FIRST',
  VolumeAsset1DecimalAscNullsLast = 'volumeAsset1Decimal_ASC_NULLS_LAST',
  VolumeAsset1DecimalDesc = 'volumeAsset1Decimal_DESC',
  VolumeAsset1DecimalDescNullsFirst = 'volumeAsset1Decimal_DESC_NULLS_FIRST',
  VolumeAsset1DecimalDescNullsLast = 'volumeAsset1Decimal_DESC_NULLS_LAST',
  VolumeAsset1Asc = 'volumeAsset1_ASC',
  VolumeAsset1AscNullsFirst = 'volumeAsset1_ASC_NULLS_FIRST',
  VolumeAsset1AscNullsLast = 'volumeAsset1_ASC_NULLS_LAST',
  VolumeAsset1Desc = 'volumeAsset1_DESC',
  VolumeAsset1DescNullsFirst = 'volumeAsset1_DESC_NULLS_FIRST',
  VolumeAsset1DescNullsLast = 'volumeAsset1_DESC_NULLS_LAST',
  VolumeUsdAsc = 'volumeUSD_ASC',
  VolumeUsdAscNullsFirst = 'volumeUSD_ASC_NULLS_FIRST',
  VolumeUsdAscNullsLast = 'volumeUSD_ASC_NULLS_LAST',
  VolumeUsdDesc = 'volumeUSD_DESC',
  VolumeUsdDescNullsFirst = 'volumeUSD_DESC_NULLS_FIRST',
  VolumeUsdDescNullsLast = 'volumeUSD_DESC_NULLS_LAST'
}

export type PoolHourlySnapshotWhereInput = {
  AND?: InputMaybe<Array<PoolHourlySnapshotWhereInput>>;
  OR?: InputMaybe<Array<PoolHourlySnapshotWhereInput>>;
  feesUSD_contains?: InputMaybe<Scalars['String']['input']>;
  feesUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  feesUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_eq?: InputMaybe<Scalars['String']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['String']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['String']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feesUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesUSD_lt?: InputMaybe<Scalars['String']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feesUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  pool?: InputMaybe<PoolWhereInput>;
  pool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price0_contains?: InputMaybe<Scalars['String']['input']>;
  price0_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price0_endsWith?: InputMaybe<Scalars['String']['input']>;
  price0_eq?: InputMaybe<Scalars['String']['input']>;
  price0_gt?: InputMaybe<Scalars['String']['input']>;
  price0_gte?: InputMaybe<Scalars['String']['input']>;
  price0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price0_lt?: InputMaybe<Scalars['String']['input']>;
  price0_lte?: InputMaybe<Scalars['String']['input']>;
  price0_not_contains?: InputMaybe<Scalars['String']['input']>;
  price0_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price0_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  price0_not_eq?: InputMaybe<Scalars['String']['input']>;
  price0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price0_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  price0_startsWith?: InputMaybe<Scalars['String']['input']>;
  price1_contains?: InputMaybe<Scalars['String']['input']>;
  price1_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price1_endsWith?: InputMaybe<Scalars['String']['input']>;
  price1_eq?: InputMaybe<Scalars['String']['input']>;
  price1_gt?: InputMaybe<Scalars['String']['input']>;
  price1_gte?: InputMaybe<Scalars['String']['input']>;
  price1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price1_lt?: InputMaybe<Scalars['String']['input']>;
  price1_lte?: InputMaybe<Scalars['String']['input']>;
  price1_not_contains?: InputMaybe<Scalars['String']['input']>;
  price1_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price1_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  price1_not_eq?: InputMaybe<Scalars['String']['input']>;
  price1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price1_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  price1_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve0Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve0Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve1Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve1Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tvlUSD_contains?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_eq?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tvlUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tvlUSD_lt?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tvlUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset0Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset0Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset0Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset1Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset1Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset1Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset1Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_contains?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_eq?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PoolHourlySnapshotsConnection = {
  __typename?: 'PoolHourlySnapshotsConnection';
  edges: Array<PoolHourlySnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum PoolOrderByInput {
  Asset0ContractIdAsc = 'asset0_contractId_ASC',
  Asset0ContractIdAscNullsFirst = 'asset0_contractId_ASC_NULLS_FIRST',
  Asset0ContractIdAscNullsLast = 'asset0_contractId_ASC_NULLS_LAST',
  Asset0ContractIdDesc = 'asset0_contractId_DESC',
  Asset0ContractIdDescNullsFirst = 'asset0_contractId_DESC_NULLS_FIRST',
  Asset0ContractIdDescNullsLast = 'asset0_contractId_DESC_NULLS_LAST',
  Asset0DecimalsAsc = 'asset0_decimals_ASC',
  Asset0DecimalsAscNullsFirst = 'asset0_decimals_ASC_NULLS_FIRST',
  Asset0DecimalsAscNullsLast = 'asset0_decimals_ASC_NULLS_LAST',
  Asset0DecimalsDesc = 'asset0_decimals_DESC',
  Asset0DecimalsDescNullsFirst = 'asset0_decimals_DESC_NULLS_FIRST',
  Asset0DecimalsDescNullsLast = 'asset0_decimals_DESC_NULLS_LAST',
  Asset0IdAsc = 'asset0_id_ASC',
  Asset0IdAscNullsFirst = 'asset0_id_ASC_NULLS_FIRST',
  Asset0IdAscNullsLast = 'asset0_id_ASC_NULLS_LAST',
  Asset0IdDesc = 'asset0_id_DESC',
  Asset0IdDescNullsFirst = 'asset0_id_DESC_NULLS_FIRST',
  Asset0IdDescNullsLast = 'asset0_id_DESC_NULLS_LAST',
  Asset0ImageAsc = 'asset0_image_ASC',
  Asset0ImageAscNullsFirst = 'asset0_image_ASC_NULLS_FIRST',
  Asset0ImageAscNullsLast = 'asset0_image_ASC_NULLS_LAST',
  Asset0ImageDesc = 'asset0_image_DESC',
  Asset0ImageDescNullsFirst = 'asset0_image_DESC_NULLS_FIRST',
  Asset0ImageDescNullsLast = 'asset0_image_DESC_NULLS_LAST',
  Asset0L1AddressAsc = 'asset0_l1Address_ASC',
  Asset0L1AddressAscNullsFirst = 'asset0_l1Address_ASC_NULLS_FIRST',
  Asset0L1AddressAscNullsLast = 'asset0_l1Address_ASC_NULLS_LAST',
  Asset0L1AddressDesc = 'asset0_l1Address_DESC',
  Asset0L1AddressDescNullsFirst = 'asset0_l1Address_DESC_NULLS_FIRST',
  Asset0L1AddressDescNullsLast = 'asset0_l1Address_DESC_NULLS_LAST',
  Asset0NameAsc = 'asset0_name_ASC',
  Asset0NameAscNullsFirst = 'asset0_name_ASC_NULLS_FIRST',
  Asset0NameAscNullsLast = 'asset0_name_ASC_NULLS_LAST',
  Asset0NameDesc = 'asset0_name_DESC',
  Asset0NameDescNullsFirst = 'asset0_name_DESC_NULLS_FIRST',
  Asset0NameDescNullsLast = 'asset0_name_DESC_NULLS_LAST',
  Asset0NumPoolsAsc = 'asset0_numPools_ASC',
  Asset0NumPoolsAscNullsFirst = 'asset0_numPools_ASC_NULLS_FIRST',
  Asset0NumPoolsAscNullsLast = 'asset0_numPools_ASC_NULLS_LAST',
  Asset0NumPoolsDesc = 'asset0_numPools_DESC',
  Asset0NumPoolsDescNullsFirst = 'asset0_numPools_DESC_NULLS_FIRST',
  Asset0NumPoolsDescNullsLast = 'asset0_numPools_DESC_NULLS_LAST',
  Asset0PriceAsc = 'asset0_price_ASC',
  Asset0PriceAscNullsFirst = 'asset0_price_ASC_NULLS_FIRST',
  Asset0PriceAscNullsLast = 'asset0_price_ASC_NULLS_LAST',
  Asset0PriceDesc = 'asset0_price_DESC',
  Asset0PriceDescNullsFirst = 'asset0_price_DESC_NULLS_FIRST',
  Asset0PriceDescNullsLast = 'asset0_price_DESC_NULLS_LAST',
  Asset0SubIdAsc = 'asset0_subId_ASC',
  Asset0SubIdAscNullsFirst = 'asset0_subId_ASC_NULLS_FIRST',
  Asset0SubIdAscNullsLast = 'asset0_subId_ASC_NULLS_LAST',
  Asset0SubIdDesc = 'asset0_subId_DESC',
  Asset0SubIdDescNullsFirst = 'asset0_subId_DESC_NULLS_FIRST',
  Asset0SubIdDescNullsLast = 'asset0_subId_DESC_NULLS_LAST',
  Asset0SupplyAsc = 'asset0_supply_ASC',
  Asset0SupplyAscNullsFirst = 'asset0_supply_ASC_NULLS_FIRST',
  Asset0SupplyAscNullsLast = 'asset0_supply_ASC_NULLS_LAST',
  Asset0SupplyDesc = 'asset0_supply_DESC',
  Asset0SupplyDescNullsFirst = 'asset0_supply_DESC_NULLS_FIRST',
  Asset0SupplyDescNullsLast = 'asset0_supply_DESC_NULLS_LAST',
  Asset0SymbolAsc = 'asset0_symbol_ASC',
  Asset0SymbolAscNullsFirst = 'asset0_symbol_ASC_NULLS_FIRST',
  Asset0SymbolAscNullsLast = 'asset0_symbol_ASC_NULLS_LAST',
  Asset0SymbolDesc = 'asset0_symbol_DESC',
  Asset0SymbolDescNullsFirst = 'asset0_symbol_DESC_NULLS_FIRST',
  Asset0SymbolDescNullsLast = 'asset0_symbol_DESC_NULLS_LAST',
  Asset0TradeVolumeDecimalAsc = 'asset0_tradeVolumeDecimal_ASC',
  Asset0TradeVolumeDecimalAscNullsFirst = 'asset0_tradeVolumeDecimal_ASC_NULLS_FIRST',
  Asset0TradeVolumeDecimalAscNullsLast = 'asset0_tradeVolumeDecimal_ASC_NULLS_LAST',
  Asset0TradeVolumeDecimalDesc = 'asset0_tradeVolumeDecimal_DESC',
  Asset0TradeVolumeDecimalDescNullsFirst = 'asset0_tradeVolumeDecimal_DESC_NULLS_FIRST',
  Asset0TradeVolumeDecimalDescNullsLast = 'asset0_tradeVolumeDecimal_DESC_NULLS_LAST',
  Asset0TradeVolumeAsc = 'asset0_tradeVolume_ASC',
  Asset0TradeVolumeAscNullsFirst = 'asset0_tradeVolume_ASC_NULLS_FIRST',
  Asset0TradeVolumeAscNullsLast = 'asset0_tradeVolume_ASC_NULLS_LAST',
  Asset0TradeVolumeDesc = 'asset0_tradeVolume_DESC',
  Asset0TradeVolumeDescNullsFirst = 'asset0_tradeVolume_DESC_NULLS_FIRST',
  Asset0TradeVolumeDescNullsLast = 'asset0_tradeVolume_DESC_NULLS_LAST',
  Asset1ContractIdAsc = 'asset1_contractId_ASC',
  Asset1ContractIdAscNullsFirst = 'asset1_contractId_ASC_NULLS_FIRST',
  Asset1ContractIdAscNullsLast = 'asset1_contractId_ASC_NULLS_LAST',
  Asset1ContractIdDesc = 'asset1_contractId_DESC',
  Asset1ContractIdDescNullsFirst = 'asset1_contractId_DESC_NULLS_FIRST',
  Asset1ContractIdDescNullsLast = 'asset1_contractId_DESC_NULLS_LAST',
  Asset1DecimalsAsc = 'asset1_decimals_ASC',
  Asset1DecimalsAscNullsFirst = 'asset1_decimals_ASC_NULLS_FIRST',
  Asset1DecimalsAscNullsLast = 'asset1_decimals_ASC_NULLS_LAST',
  Asset1DecimalsDesc = 'asset1_decimals_DESC',
  Asset1DecimalsDescNullsFirst = 'asset1_decimals_DESC_NULLS_FIRST',
  Asset1DecimalsDescNullsLast = 'asset1_decimals_DESC_NULLS_LAST',
  Asset1IdAsc = 'asset1_id_ASC',
  Asset1IdAscNullsFirst = 'asset1_id_ASC_NULLS_FIRST',
  Asset1IdAscNullsLast = 'asset1_id_ASC_NULLS_LAST',
  Asset1IdDesc = 'asset1_id_DESC',
  Asset1IdDescNullsFirst = 'asset1_id_DESC_NULLS_FIRST',
  Asset1IdDescNullsLast = 'asset1_id_DESC_NULLS_LAST',
  Asset1ImageAsc = 'asset1_image_ASC',
  Asset1ImageAscNullsFirst = 'asset1_image_ASC_NULLS_FIRST',
  Asset1ImageAscNullsLast = 'asset1_image_ASC_NULLS_LAST',
  Asset1ImageDesc = 'asset1_image_DESC',
  Asset1ImageDescNullsFirst = 'asset1_image_DESC_NULLS_FIRST',
  Asset1ImageDescNullsLast = 'asset1_image_DESC_NULLS_LAST',
  Asset1L1AddressAsc = 'asset1_l1Address_ASC',
  Asset1L1AddressAscNullsFirst = 'asset1_l1Address_ASC_NULLS_FIRST',
  Asset1L1AddressAscNullsLast = 'asset1_l1Address_ASC_NULLS_LAST',
  Asset1L1AddressDesc = 'asset1_l1Address_DESC',
  Asset1L1AddressDescNullsFirst = 'asset1_l1Address_DESC_NULLS_FIRST',
  Asset1L1AddressDescNullsLast = 'asset1_l1Address_DESC_NULLS_LAST',
  Asset1NameAsc = 'asset1_name_ASC',
  Asset1NameAscNullsFirst = 'asset1_name_ASC_NULLS_FIRST',
  Asset1NameAscNullsLast = 'asset1_name_ASC_NULLS_LAST',
  Asset1NameDesc = 'asset1_name_DESC',
  Asset1NameDescNullsFirst = 'asset1_name_DESC_NULLS_FIRST',
  Asset1NameDescNullsLast = 'asset1_name_DESC_NULLS_LAST',
  Asset1NumPoolsAsc = 'asset1_numPools_ASC',
  Asset1NumPoolsAscNullsFirst = 'asset1_numPools_ASC_NULLS_FIRST',
  Asset1NumPoolsAscNullsLast = 'asset1_numPools_ASC_NULLS_LAST',
  Asset1NumPoolsDesc = 'asset1_numPools_DESC',
  Asset1NumPoolsDescNullsFirst = 'asset1_numPools_DESC_NULLS_FIRST',
  Asset1NumPoolsDescNullsLast = 'asset1_numPools_DESC_NULLS_LAST',
  Asset1PriceAsc = 'asset1_price_ASC',
  Asset1PriceAscNullsFirst = 'asset1_price_ASC_NULLS_FIRST',
  Asset1PriceAscNullsLast = 'asset1_price_ASC_NULLS_LAST',
  Asset1PriceDesc = 'asset1_price_DESC',
  Asset1PriceDescNullsFirst = 'asset1_price_DESC_NULLS_FIRST',
  Asset1PriceDescNullsLast = 'asset1_price_DESC_NULLS_LAST',
  Asset1SubIdAsc = 'asset1_subId_ASC',
  Asset1SubIdAscNullsFirst = 'asset1_subId_ASC_NULLS_FIRST',
  Asset1SubIdAscNullsLast = 'asset1_subId_ASC_NULLS_LAST',
  Asset1SubIdDesc = 'asset1_subId_DESC',
  Asset1SubIdDescNullsFirst = 'asset1_subId_DESC_NULLS_FIRST',
  Asset1SubIdDescNullsLast = 'asset1_subId_DESC_NULLS_LAST',
  Asset1SupplyAsc = 'asset1_supply_ASC',
  Asset1SupplyAscNullsFirst = 'asset1_supply_ASC_NULLS_FIRST',
  Asset1SupplyAscNullsLast = 'asset1_supply_ASC_NULLS_LAST',
  Asset1SupplyDesc = 'asset1_supply_DESC',
  Asset1SupplyDescNullsFirst = 'asset1_supply_DESC_NULLS_FIRST',
  Asset1SupplyDescNullsLast = 'asset1_supply_DESC_NULLS_LAST',
  Asset1SymbolAsc = 'asset1_symbol_ASC',
  Asset1SymbolAscNullsFirst = 'asset1_symbol_ASC_NULLS_FIRST',
  Asset1SymbolAscNullsLast = 'asset1_symbol_ASC_NULLS_LAST',
  Asset1SymbolDesc = 'asset1_symbol_DESC',
  Asset1SymbolDescNullsFirst = 'asset1_symbol_DESC_NULLS_FIRST',
  Asset1SymbolDescNullsLast = 'asset1_symbol_DESC_NULLS_LAST',
  Asset1TradeVolumeDecimalAsc = 'asset1_tradeVolumeDecimal_ASC',
  Asset1TradeVolumeDecimalAscNullsFirst = 'asset1_tradeVolumeDecimal_ASC_NULLS_FIRST',
  Asset1TradeVolumeDecimalAscNullsLast = 'asset1_tradeVolumeDecimal_ASC_NULLS_LAST',
  Asset1TradeVolumeDecimalDesc = 'asset1_tradeVolumeDecimal_DESC',
  Asset1TradeVolumeDecimalDescNullsFirst = 'asset1_tradeVolumeDecimal_DESC_NULLS_FIRST',
  Asset1TradeVolumeDecimalDescNullsLast = 'asset1_tradeVolumeDecimal_DESC_NULLS_LAST',
  Asset1TradeVolumeAsc = 'asset1_tradeVolume_ASC',
  Asset1TradeVolumeAscNullsFirst = 'asset1_tradeVolume_ASC_NULLS_FIRST',
  Asset1TradeVolumeAscNullsLast = 'asset1_tradeVolume_ASC_NULLS_LAST',
  Asset1TradeVolumeDesc = 'asset1_tradeVolume_DESC',
  Asset1TradeVolumeDescNullsFirst = 'asset1_tradeVolume_DESC_NULLS_FIRST',
  Asset1TradeVolumeDescNullsLast = 'asset1_tradeVolume_DESC_NULLS_LAST',
  FeesUsdAsc = 'feesUSD_ASC',
  FeesUsdAscNullsFirst = 'feesUSD_ASC_NULLS_FIRST',
  FeesUsdAscNullsLast = 'feesUSD_ASC_NULLS_LAST',
  FeesUsdDesc = 'feesUSD_DESC',
  FeesUsdDescNullsFirst = 'feesUSD_DESC_NULLS_FIRST',
  FeesUsdDescNullsLast = 'feesUSD_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  IsStableAsc = 'isStable_ASC',
  IsStableAscNullsFirst = 'isStable_ASC_NULLS_FIRST',
  IsStableAscNullsLast = 'isStable_ASC_NULLS_LAST',
  IsStableDesc = 'isStable_DESC',
  IsStableDescNullsFirst = 'isStable_DESC_NULLS_FIRST',
  IsStableDescNullsLast = 'isStable_DESC_NULLS_LAST',
  LpTokenContractIdAsc = 'lpToken_contractId_ASC',
  LpTokenContractIdAscNullsFirst = 'lpToken_contractId_ASC_NULLS_FIRST',
  LpTokenContractIdAscNullsLast = 'lpToken_contractId_ASC_NULLS_LAST',
  LpTokenContractIdDesc = 'lpToken_contractId_DESC',
  LpTokenContractIdDescNullsFirst = 'lpToken_contractId_DESC_NULLS_FIRST',
  LpTokenContractIdDescNullsLast = 'lpToken_contractId_DESC_NULLS_LAST',
  LpTokenDecimalsAsc = 'lpToken_decimals_ASC',
  LpTokenDecimalsAscNullsFirst = 'lpToken_decimals_ASC_NULLS_FIRST',
  LpTokenDecimalsAscNullsLast = 'lpToken_decimals_ASC_NULLS_LAST',
  LpTokenDecimalsDesc = 'lpToken_decimals_DESC',
  LpTokenDecimalsDescNullsFirst = 'lpToken_decimals_DESC_NULLS_FIRST',
  LpTokenDecimalsDescNullsLast = 'lpToken_decimals_DESC_NULLS_LAST',
  LpTokenIdAsc = 'lpToken_id_ASC',
  LpTokenIdAscNullsFirst = 'lpToken_id_ASC_NULLS_FIRST',
  LpTokenIdAscNullsLast = 'lpToken_id_ASC_NULLS_LAST',
  LpTokenIdDesc = 'lpToken_id_DESC',
  LpTokenIdDescNullsFirst = 'lpToken_id_DESC_NULLS_FIRST',
  LpTokenIdDescNullsLast = 'lpToken_id_DESC_NULLS_LAST',
  LpTokenImageAsc = 'lpToken_image_ASC',
  LpTokenImageAscNullsFirst = 'lpToken_image_ASC_NULLS_FIRST',
  LpTokenImageAscNullsLast = 'lpToken_image_ASC_NULLS_LAST',
  LpTokenImageDesc = 'lpToken_image_DESC',
  LpTokenImageDescNullsFirst = 'lpToken_image_DESC_NULLS_FIRST',
  LpTokenImageDescNullsLast = 'lpToken_image_DESC_NULLS_LAST',
  LpTokenL1AddressAsc = 'lpToken_l1Address_ASC',
  LpTokenL1AddressAscNullsFirst = 'lpToken_l1Address_ASC_NULLS_FIRST',
  LpTokenL1AddressAscNullsLast = 'lpToken_l1Address_ASC_NULLS_LAST',
  LpTokenL1AddressDesc = 'lpToken_l1Address_DESC',
  LpTokenL1AddressDescNullsFirst = 'lpToken_l1Address_DESC_NULLS_FIRST',
  LpTokenL1AddressDescNullsLast = 'lpToken_l1Address_DESC_NULLS_LAST',
  LpTokenNameAsc = 'lpToken_name_ASC',
  LpTokenNameAscNullsFirst = 'lpToken_name_ASC_NULLS_FIRST',
  LpTokenNameAscNullsLast = 'lpToken_name_ASC_NULLS_LAST',
  LpTokenNameDesc = 'lpToken_name_DESC',
  LpTokenNameDescNullsFirst = 'lpToken_name_DESC_NULLS_FIRST',
  LpTokenNameDescNullsLast = 'lpToken_name_DESC_NULLS_LAST',
  LpTokenNumPoolsAsc = 'lpToken_numPools_ASC',
  LpTokenNumPoolsAscNullsFirst = 'lpToken_numPools_ASC_NULLS_FIRST',
  LpTokenNumPoolsAscNullsLast = 'lpToken_numPools_ASC_NULLS_LAST',
  LpTokenNumPoolsDesc = 'lpToken_numPools_DESC',
  LpTokenNumPoolsDescNullsFirst = 'lpToken_numPools_DESC_NULLS_FIRST',
  LpTokenNumPoolsDescNullsLast = 'lpToken_numPools_DESC_NULLS_LAST',
  LpTokenPriceAsc = 'lpToken_price_ASC',
  LpTokenPriceAscNullsFirst = 'lpToken_price_ASC_NULLS_FIRST',
  LpTokenPriceAscNullsLast = 'lpToken_price_ASC_NULLS_LAST',
  LpTokenPriceDesc = 'lpToken_price_DESC',
  LpTokenPriceDescNullsFirst = 'lpToken_price_DESC_NULLS_FIRST',
  LpTokenPriceDescNullsLast = 'lpToken_price_DESC_NULLS_LAST',
  LpTokenSubIdAsc = 'lpToken_subId_ASC',
  LpTokenSubIdAscNullsFirst = 'lpToken_subId_ASC_NULLS_FIRST',
  LpTokenSubIdAscNullsLast = 'lpToken_subId_ASC_NULLS_LAST',
  LpTokenSubIdDesc = 'lpToken_subId_DESC',
  LpTokenSubIdDescNullsFirst = 'lpToken_subId_DESC_NULLS_FIRST',
  LpTokenSubIdDescNullsLast = 'lpToken_subId_DESC_NULLS_LAST',
  LpTokenSupplyAsc = 'lpToken_supply_ASC',
  LpTokenSupplyAscNullsFirst = 'lpToken_supply_ASC_NULLS_FIRST',
  LpTokenSupplyAscNullsLast = 'lpToken_supply_ASC_NULLS_LAST',
  LpTokenSupplyDesc = 'lpToken_supply_DESC',
  LpTokenSupplyDescNullsFirst = 'lpToken_supply_DESC_NULLS_FIRST',
  LpTokenSupplyDescNullsLast = 'lpToken_supply_DESC_NULLS_LAST',
  LpTokenSymbolAsc = 'lpToken_symbol_ASC',
  LpTokenSymbolAscNullsFirst = 'lpToken_symbol_ASC_NULLS_FIRST',
  LpTokenSymbolAscNullsLast = 'lpToken_symbol_ASC_NULLS_LAST',
  LpTokenSymbolDesc = 'lpToken_symbol_DESC',
  LpTokenSymbolDescNullsFirst = 'lpToken_symbol_DESC_NULLS_FIRST',
  LpTokenSymbolDescNullsLast = 'lpToken_symbol_DESC_NULLS_LAST',
  LpTokenTradeVolumeDecimalAsc = 'lpToken_tradeVolumeDecimal_ASC',
  LpTokenTradeVolumeDecimalAscNullsFirst = 'lpToken_tradeVolumeDecimal_ASC_NULLS_FIRST',
  LpTokenTradeVolumeDecimalAscNullsLast = 'lpToken_tradeVolumeDecimal_ASC_NULLS_LAST',
  LpTokenTradeVolumeDecimalDesc = 'lpToken_tradeVolumeDecimal_DESC',
  LpTokenTradeVolumeDecimalDescNullsFirst = 'lpToken_tradeVolumeDecimal_DESC_NULLS_FIRST',
  LpTokenTradeVolumeDecimalDescNullsLast = 'lpToken_tradeVolumeDecimal_DESC_NULLS_LAST',
  LpTokenTradeVolumeAsc = 'lpToken_tradeVolume_ASC',
  LpTokenTradeVolumeAscNullsFirst = 'lpToken_tradeVolume_ASC_NULLS_FIRST',
  LpTokenTradeVolumeAscNullsLast = 'lpToken_tradeVolume_ASC_NULLS_LAST',
  LpTokenTradeVolumeDesc = 'lpToken_tradeVolume_DESC',
  LpTokenTradeVolumeDescNullsFirst = 'lpToken_tradeVolume_DESC_NULLS_FIRST',
  LpTokenTradeVolumeDescNullsLast = 'lpToken_tradeVolume_DESC_NULLS_LAST',
  Price0Asc = 'price0_ASC',
  Price0AscNullsFirst = 'price0_ASC_NULLS_FIRST',
  Price0AscNullsLast = 'price0_ASC_NULLS_LAST',
  Price0Desc = 'price0_DESC',
  Price0DescNullsFirst = 'price0_DESC_NULLS_FIRST',
  Price0DescNullsLast = 'price0_DESC_NULLS_LAST',
  Price1Asc = 'price1_ASC',
  Price1AscNullsFirst = 'price1_ASC_NULLS_FIRST',
  Price1AscNullsLast = 'price1_ASC_NULLS_LAST',
  Price1Desc = 'price1_DESC',
  Price1DescNullsFirst = 'price1_DESC_NULLS_FIRST',
  Price1DescNullsLast = 'price1_DESC_NULLS_LAST',
  Reserve0DecimalAsc = 'reserve0Decimal_ASC',
  Reserve0DecimalAscNullsFirst = 'reserve0Decimal_ASC_NULLS_FIRST',
  Reserve0DecimalAscNullsLast = 'reserve0Decimal_ASC_NULLS_LAST',
  Reserve0DecimalDesc = 'reserve0Decimal_DESC',
  Reserve0DecimalDescNullsFirst = 'reserve0Decimal_DESC_NULLS_FIRST',
  Reserve0DecimalDescNullsLast = 'reserve0Decimal_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1DecimalAsc = 'reserve1Decimal_ASC',
  Reserve1DecimalAscNullsFirst = 'reserve1Decimal_ASC_NULLS_FIRST',
  Reserve1DecimalAscNullsLast = 'reserve1Decimal_ASC_NULLS_LAST',
  Reserve1DecimalDesc = 'reserve1Decimal_DESC',
  Reserve1DecimalDescNullsFirst = 'reserve1Decimal_DESC_NULLS_FIRST',
  Reserve1DecimalDescNullsLast = 'reserve1Decimal_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  TvlUsdAsc = 'tvlUSD_ASC',
  TvlUsdAscNullsFirst = 'tvlUSD_ASC_NULLS_FIRST',
  TvlUsdAscNullsLast = 'tvlUSD_ASC_NULLS_LAST',
  TvlUsdDesc = 'tvlUSD_DESC',
  TvlUsdDescNullsFirst = 'tvlUSD_DESC_NULLS_FIRST',
  TvlUsdDescNullsLast = 'tvlUSD_DESC_NULLS_LAST',
  VolumeAsset0DecimalAsc = 'volumeAsset0Decimal_ASC',
  VolumeAsset0DecimalAscNullsFirst = 'volumeAsset0Decimal_ASC_NULLS_FIRST',
  VolumeAsset0DecimalAscNullsLast = 'volumeAsset0Decimal_ASC_NULLS_LAST',
  VolumeAsset0DecimalDesc = 'volumeAsset0Decimal_DESC',
  VolumeAsset0DecimalDescNullsFirst = 'volumeAsset0Decimal_DESC_NULLS_FIRST',
  VolumeAsset0DecimalDescNullsLast = 'volumeAsset0Decimal_DESC_NULLS_LAST',
  VolumeAsset0Asc = 'volumeAsset0_ASC',
  VolumeAsset0AscNullsFirst = 'volumeAsset0_ASC_NULLS_FIRST',
  VolumeAsset0AscNullsLast = 'volumeAsset0_ASC_NULLS_LAST',
  VolumeAsset0Desc = 'volumeAsset0_DESC',
  VolumeAsset0DescNullsFirst = 'volumeAsset0_DESC_NULLS_FIRST',
  VolumeAsset0DescNullsLast = 'volumeAsset0_DESC_NULLS_LAST',
  VolumeAsset1DecimalAsc = 'volumeAsset1Decimal_ASC',
  VolumeAsset1DecimalAscNullsFirst = 'volumeAsset1Decimal_ASC_NULLS_FIRST',
  VolumeAsset1DecimalAscNullsLast = 'volumeAsset1Decimal_ASC_NULLS_LAST',
  VolumeAsset1DecimalDesc = 'volumeAsset1Decimal_DESC',
  VolumeAsset1DecimalDescNullsFirst = 'volumeAsset1Decimal_DESC_NULLS_FIRST',
  VolumeAsset1DecimalDescNullsLast = 'volumeAsset1Decimal_DESC_NULLS_LAST',
  VolumeAsset1Asc = 'volumeAsset1_ASC',
  VolumeAsset1AscNullsFirst = 'volumeAsset1_ASC_NULLS_FIRST',
  VolumeAsset1AscNullsLast = 'volumeAsset1_ASC_NULLS_LAST',
  VolumeAsset1Desc = 'volumeAsset1_DESC',
  VolumeAsset1DescNullsFirst = 'volumeAsset1_DESC_NULLS_FIRST',
  VolumeAsset1DescNullsLast = 'volumeAsset1_DESC_NULLS_LAST',
  VolumeUsdAsc = 'volumeUSD_ASC',
  VolumeUsdAscNullsFirst = 'volumeUSD_ASC_NULLS_FIRST',
  VolumeUsdAscNullsLast = 'volumeUSD_ASC_NULLS_LAST',
  VolumeUsdDesc = 'volumeUSD_DESC',
  VolumeUsdDescNullsFirst = 'volumeUSD_DESC_NULLS_FIRST',
  VolumeUsdDescNullsLast = 'volumeUSD_DESC_NULLS_LAST'
}

export type PoolWhereInput = {
  AND?: InputMaybe<Array<PoolWhereInput>>;
  OR?: InputMaybe<Array<PoolWhereInput>>;
  asset0?: InputMaybe<AssetWhereInput>;
  asset0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  asset1?: InputMaybe<AssetWhereInput>;
  asset1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesUSD_contains?: InputMaybe<Scalars['String']['input']>;
  feesUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  feesUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_eq?: InputMaybe<Scalars['String']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['String']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['String']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feesUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesUSD_lt?: InputMaybe<Scalars['String']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feesUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  feesUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isStable_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isStable_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isStable_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  lpToken?: InputMaybe<AssetWhereInput>;
  lpToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price0_contains?: InputMaybe<Scalars['String']['input']>;
  price0_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price0_endsWith?: InputMaybe<Scalars['String']['input']>;
  price0_eq?: InputMaybe<Scalars['String']['input']>;
  price0_gt?: InputMaybe<Scalars['String']['input']>;
  price0_gte?: InputMaybe<Scalars['String']['input']>;
  price0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price0_lt?: InputMaybe<Scalars['String']['input']>;
  price0_lte?: InputMaybe<Scalars['String']['input']>;
  price0_not_contains?: InputMaybe<Scalars['String']['input']>;
  price0_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price0_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  price0_not_eq?: InputMaybe<Scalars['String']['input']>;
  price0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price0_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  price0_startsWith?: InputMaybe<Scalars['String']['input']>;
  price1_contains?: InputMaybe<Scalars['String']['input']>;
  price1_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price1_endsWith?: InputMaybe<Scalars['String']['input']>;
  price1_eq?: InputMaybe<Scalars['String']['input']>;
  price1_gt?: InputMaybe<Scalars['String']['input']>;
  price1_gte?: InputMaybe<Scalars['String']['input']>;
  price1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price1_lt?: InputMaybe<Scalars['String']['input']>;
  price1_lte?: InputMaybe<Scalars['String']['input']>;
  price1_not_contains?: InputMaybe<Scalars['String']['input']>;
  price1_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  price1_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  price1_not_eq?: InputMaybe<Scalars['String']['input']>;
  price1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  price1_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  price1_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve0Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve0Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve1Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserve1Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve1_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_every?: InputMaybe<PoolHourlySnapshotWhereInput>;
  snapshots_none?: InputMaybe<PoolHourlySnapshotWhereInput>;
  snapshots_some?: InputMaybe<PoolHourlySnapshotWhereInput>;
  tvlUSD_contains?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_eq?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tvlUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tvlUSD_lt?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tvlUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tvlUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset0Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset0Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset0Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset0_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset1Decimal_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_gt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_gte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset1Decimal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset1Decimal_lt?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_lte?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeAsset1Decimal_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1Decimal_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeAsset1_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsset1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeAsset1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsset1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_contains?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_eq?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_contains?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_eq?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeUSD_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  volumeUSD_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PoolsConnection = {
  __typename?: 'PoolsConnection';
  edges: Array<PoolEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  actionById?: Maybe<Action>;
  actions: Array<Action>;
  actionsConnection: ActionsConnection;
  assetById?: Maybe<Asset>;
  assets: Array<Asset>;
  assetsConnection: AssetsConnection;
  poolById?: Maybe<Pool>;
  poolHourlySnapshotById?: Maybe<PoolHourlySnapshot>;
  poolHourlySnapshots: Array<PoolHourlySnapshot>;
  poolHourlySnapshotsConnection: PoolHourlySnapshotsConnection;
  pools: Array<Pool>;
  poolsConnection: PoolsConnection;
  squidStatus?: Maybe<SquidStatus>;
};


export type QueryActionByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryActionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ActionOrderByInput>>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryActionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ActionOrderByInput>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryAssetByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetOrderByInput>>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AssetOrderByInput>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryPoolByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPoolHourlySnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPoolHourlySnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PoolHourlySnapshotOrderByInput>>;
  where?: InputMaybe<PoolHourlySnapshotWhereInput>;
};


export type QueryPoolHourlySnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PoolHourlySnapshotOrderByInput>;
  where?: InputMaybe<PoolHourlySnapshotWhereInput>;
};


export type QueryPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PoolOrderByInput>>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryPoolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PoolOrderByInput>;
  where?: InputMaybe<PoolWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The hash of the last processed finalized block */
  finalizedHash?: Maybe<Scalars['String']['output']>;
  /** The height of the last processed finalized block */
  finalizedHeight?: Maybe<Scalars['Int']['output']>;
  /** The hash of the last processed block */
  hash?: Maybe<Scalars['String']['output']>;
  /** The height of the last processed block */
  height?: Maybe<Scalars['Int']['output']>;
};

export enum Type {
  AddLiquidity = 'ADD_LIQUIDITY',
  RemoveLiquidity = 'REMOVE_LIQUIDITY',
  Swap = 'SWAP'
}

export type GetPoolAprQueryVariables = Exact<{
  poolId: Scalars['String']['input'];
  time24HoursAgo: Scalars['Int']['input'];
}>;


export type GetPoolAprQuery = { __typename?: 'Query', poolById?: { __typename?: 'Pool', tvlUSD: string, snapshots: Array<{ __typename?: 'PoolHourlySnapshot', feesUSD: string }> } | null };

export type GetPoolPositionsQueryVariables = Exact<{
  assetIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetPoolPositionsQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', id: string, isStable: boolean, lpToken: { __typename?: 'Asset', id: string }, asset0: { __typename?: 'Asset', id: string }, asset1: { __typename?: 'Asset', id: string } }> };
