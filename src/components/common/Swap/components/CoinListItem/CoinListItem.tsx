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
import Image from "next/image";
import useAssetMetadata from "@/src/hooks/useAssetMetadata";
import Skeleton from "./Skeleton/Skeleton";

type Props = {
  assetId: string;
  balance?: CoinQuantity | undefined;
  icon: string | undefined;
};

const CoinListItem = ({assetId, balance, icon}: Props) => {
  const verifiedAssetData = useVerifiedAssets();
  const metadata = useAssetMetadata(assetId);
  const balanceValue = balance?.amount ?? new BN(0);
  const {name, symbol, decimals, isLoading} = metadata;
  const assetIcon = icon || defaultImage.src;

  const isVerified = verifiedAssetData
    ? checkIfCoinVerified({
        symbol,
        assetId,
        verifiedAssetData,
      })
    : false;

  return (
    <div
      className={clsx(styles.tokenListItem, {
        [styles.disableHover]: isLoading,
        [styles.zeroPadding]: isLoading,
      })}
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <span className={clsx(styles.coin, !name && styles.centered)}>
          <Tooltip id="verified-tooltip" />

          <Image
            src={assetIcon}
            alt={`${name} icon`}
            width={32}
            height={32}
            quality={80}
          />

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
      )}
    </div>
  );
};

export default memo(CoinListItem);
