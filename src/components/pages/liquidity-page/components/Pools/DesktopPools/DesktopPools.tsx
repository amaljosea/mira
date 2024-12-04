import styles from "./DesktopPools.module.css";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { PoolData } from "@/src/hooks/usePoolsData";
import { useCallback, useState } from "react";
import DesktopPoolRow from "./DesktopPoolRow";
import SortableColumn from "@/src/components/common/SortableColumn/SortableColumn";

type Props = {
  poolsData: PoolData[] | undefined;
  sortConfig: {
    key: string;
    direction: string;
  };
  handleSort: (key: string) => void;
};

const DesktopPools = ({ poolsData, sortConfig, handleSort }: Props) => {
  const router = useRouter();

  if (!poolsData) {
    return null;
  }

  return (
    <table className={clsx(styles.desktopPools, "desktopOnly")}>
      <thead>
        <tr>
          <th>Pools</th>
          <SortableColumn
            title="APR"
            columnKey="APR"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <SortableColumn
            title="24H Volume"
            columnKey="Volume"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <SortableColumn
            title="TVL"
            columnKey="TVL"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <th>
            {/*<ActionButton*/}
            {/*className={styles.createButton}*/}
            {/*onClick={handleCreateClick}*/}
            {/*>*/}
            {/*Create Pool*/}
            {/*</ActionButton>*/}
          </th>
        </tr>
      </thead>
      <tbody>
        {poolsData.map((poolData) => (
          <DesktopPoolRow key={poolData.id} poolData={poolData} />
        ))}
      </tbody>
    </table>
  );
};

export default DesktopPools;
