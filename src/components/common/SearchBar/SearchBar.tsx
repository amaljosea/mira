import { clsx } from "clsx";
import styles from "./searchBar.module.css";
import SearchIcon from "../../icons/Search/SearchIcon";
import { SearchBarProps } from "./SearchBarProps";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  inputRef,
  className,
}) => {
  return (
    <div className={clsx(styles.searchBar, className)}>
      <SearchIcon />
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};
