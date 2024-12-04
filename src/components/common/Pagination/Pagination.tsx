import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePages = () => {
    const pages = [];
    const maxVisiblePages = 5; // Max number of visible page buttons (including ellipsis)

    if (totalPages <= maxVisiblePages) {
      // If total pages fit within maxVisiblePages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first and last pages
      pages.push(1);

      const startPage = Math.max(2, currentPage - 1); // Start range
      const endPage = Math.min(totalPages - 1, currentPage + 1); // End range

      // Add left truncation
      if (startPage > 2) {
        pages.push("...");
      }

      // Add the middle range of pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add right truncation
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Add the last page
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.previousButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generatePages().map((page, index) => (
        <button
          key={index}
          className={`${styles.paginationButton} ${
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => handlePageClick(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        className={`${styles.paginationButton} ${styles.nextButton}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
