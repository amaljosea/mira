import { ArrowDownSmallIcon } from "../../icons/ArrowDown/ArrowDownSmallIcon";
import { ArrowUpSmallIcon } from "../../icons/ArrowUp/ArrowUpSmallIcon";
import styles from "./SortableColumn.module.css";

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
export default SortableColumn;
