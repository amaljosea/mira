import MobilePoolItem
  from "@/src/components/pages/liquidity-page/components/Pools/MobilePools/MobilePoolItem/MobilePoolItem";

import styles from './MobilePools.module.css';
import {Fragment} from "react";
import {clsx} from "clsx";
import {PoolData} from "@/src/hooks/usePoolsData";
import SortableColumn from "@/src/components/common/SortableColumn/SortableColumn";

type Props = {
  poolsData: PoolData[] | undefined;
  orderBy: string;
  handleSort: (key: string) => void;
};

const MobilePools = ({ poolsData, orderBy, handleSort }: Props) => {
  if (!poolsData) {
    return null;
  }

  return (
    <div>
      <div className={clsx(styles.mobilePoolsSort, "mobileOnly")}>
        <p>SORT BY:</p>
        <SortableColumn
          title="APR"
          columnKey="apr"
          orderBy={orderBy}
          onSort={handleSort}
        />
        <SortableColumn
          title="24H Volume"
          columnKey="volumeUSD"
          orderBy={orderBy}
          onSort={handleSort}
        />
        <SortableColumn
          title="TVL"
          columnKey="tvlUSD"
          orderBy={orderBy}
          onSort={handleSort}
        />
      </div>
      <div className={clsx(styles.mobilePools, "mobileOnly")}>
        {poolsData.map((poolData) => {
          if (!poolData) {
            return null;
          }

          return (
            <Fragment key={poolData.id}>
              <MobilePoolItem poolData={poolData} />
              {poolsData.indexOf(poolData) !== poolsData.length - 1 && (
                <div className={styles.separator} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MobilePools;
