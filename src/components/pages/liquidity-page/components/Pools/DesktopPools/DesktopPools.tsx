import styles from "./DesktopPools.module.css";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import {PoolData} from "@/src/hooks/usePoolsData";
import DesktopPoolRow from "./DesktopPoolRow";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import Link from "next/link";
import SortableColumn from "@/src/components/common/SortableColumn/SortableColumn";

type Props = {
  poolsData: PoolData[] | undefined;
  orderBy: string;
  handleSort: (key: string) => void;
};

const DesktopPools = ({ poolsData, orderBy, handleSort }: Props) => {
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
          <th>
            <Link href="/liquidity/create-pool">
              <ActionButton className={styles.createButton}>
                Create Pool
              </ActionButton>
            </Link>
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
