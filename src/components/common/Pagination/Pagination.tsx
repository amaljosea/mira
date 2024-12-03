import styles from "./Pagination.module.css";

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination = ({
  hasNextPage,
  hasPreviousPage,
  onNext,
  onPrevious,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={onPrevious}
        disabled={!hasPreviousPage}
        className={`${styles.paginationButton} ${styles.previousButton}`}>
        Previous
      </button>
      <div className={styles.divider}></div>
      <button
        onClick={onNext}
        disabled={!hasNextPage}
        className={`${styles.paginationButton} ${styles.nextButton}`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
