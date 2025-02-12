import {memo} from "react";
import {clsx} from "clsx";
import {BN, CoinQuantity} from "fuels";

import styles from "./CoinListItem.module.css";
import {useVerifiedAssets} from "@/src/hooks/useVerifiedAssets";
import SuccessIcon from "@/src/components/icons/Success/SuccessIcon";
import {checkIfCoinVerified} from "./checkIfCoinVerified";
import "react-tooltip/dist/react-tooltip.css";
import {Tooltip} from "react-tooltip";
import defaultImage from "@/assets/unknown-asset.svg";

type Metadata = {
  name: string;
  symbol: string;
  decimals: number;
  icon: string | null;
};

type Props = {
  assetId: string;
  balance?: CoinQuantity | undefined;
  metadata: Metadata;
};

const CoinListItem = ({assetId, balance, metadata}: Props) => {
  const verifiedAssetData = useVerifiedAssets();
  const balanceValue = balance?.amount ?? new BN(0);
  const {name, symbol, decimals, icon} = metadata;
  const assetIcon = icon || defaultImage.src;

  const isVerified = verifiedAssetData
    ? checkIfCoinVerified({
        symbol: symbol,
        assetId: assetId,
        verifiedAssetData,
      })
    : false;

  return (
    <span className={clsx(styles.coin, !name && styles.centered)}>
      <Tooltip id="verified-tooltip" />
      <img src={assetIcon} alt={`${name} icon`} />

      <div className={styles.names}>
        <div className={styles.name_container}>
          <p className={styles.name}>{symbol}</p>
          {isVerified && (
            <span
              data-tooltip-id="verified-tooltip"
              data-tooltip-content="Verified asset from Fuel's official asset list."
            >
              <SuccessIcon />
            </span>
          )}
        </div>
        <p className={styles.fullName}>{name}</p>
      </div>
      {balanceValue.gt(0) && (
        <p className={styles.balance}>
          {balanceValue.formatUnits(decimals || 0)}
        </p>
      )}
    </span>
  );
};

export default memo(CoinListItem);
