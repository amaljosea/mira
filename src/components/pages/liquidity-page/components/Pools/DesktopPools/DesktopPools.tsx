import styles from "./DesktopPools.module.css";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { PoolData } from "@/src/hooks/usePoolsData";
import { useCallback, useState } from "react";
import DesktopPoolRow from "./DesktopPoolRow";
import { ArrowDownSmallIcon } from "@/src/components/icons/ArrowDown/ArrowDownSmallIcon";
import { ArrowUpSmallIcon } from "@/src/components/icons/ArrowUp/ArrowUpSmallIcon";

type Props = {
  poolsData: PoolData[] | undefined;
};

const DesktopPools = ({ poolsData }: Props) => {
  const router = useRouter();

  const [sortConfig, setSortConfig] = useState({
    key: "TVL",
    direction: "DESC",
  });

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "DESC" ? "ASC" : "DESC",
    }));
  };

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

type SortableColumnProps = {
  title: string;
  columnKey: string;
  sortConfig: { key: string; direction: string };
  onSort: (key: string) => void;
};

const SortableColumn = ({
  title,
  columnKey,
  sortConfig,
  onSort,
}: SortableColumnProps) => {
  const isActive = sortConfig.key === columnKey;

  return (
    <th onClick={() => onSort(columnKey)} className={styles.sortable}>
      <div className={styles.sortArea}>
        {title}
        <span className={styles.sortIcon}>
          {isActive &&
            (sortConfig.direction === "DESC" ? (
              <ArrowDownSmallIcon />
            ) : (
              <ArrowUpSmallIcon />
            ))}
        </span>
      </div>
    </th>
  );
};

export default DesktopPools;
