import MobilePools from "@/src/components/pages/liquidity-page/components/Pools/MobilePools/MobilePools";
import DesktopPools from "@/src/components/pages/liquidity-page/components/Pools/DesktopPools/DesktopPools";

import styles from "./Pools.module.css";
import usePoolsData from "@/src/hooks/usePoolsData";
import LoaderV2 from "@/src/components/common/LoaderV2/LoaderV2";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import clsx from "clsx";
import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {SearchBar} from "@/src/components/common/SearchBar/SearchBar";
import Pagination from "@/src/components/common/Pagination/Pagination";
import {useDebounce} from "@/src/hooks/useDebounce";

const Pools = () => {
  const router = useRouter();

  const handleCreatePoolClick = useCallback(() => {
    router.push("/liquidity/create-pool");
  }, [router]);

  const {data, isLoading, moreInfo} = usePoolsData();

  const {
    data: pageInfoData,
    totalPages,
    setPage,
    setOrderBy,
    page,
    orderBy,
    search,
    setSearch,
  } = moreInfo;
  const pageInfo = pageInfoData?.poolsConnection?.pageInfo;
  const totalCount = pageInfoData?.poolsConnection?.totalCount;

  console.log(moreInfo);
  const [searchInput, setSearchInput] = useState(search || "");
  const debouncedSearchTerm = useDebounce(searchInput, 300);

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSort = (key: string) => {
    setOrderBy((prev: string) => {
      const [prevKey, prevDirection] = prev.split("_");
      const newDirection =
        prevKey === key && prevDirection === "ASC" ? "DESC" : "ASC";
      return `${key}_${newDirection}`;
    });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <section className={styles.pools}>
      <div className={styles.actionButtonDiv}>
        <ActionButton
          className={clsx("mobileOnly", styles.createButton)}
          onClick={handleCreatePoolClick}
        >
          Create Pool
        </ActionButton>
      </div>
      <div className={styles.poolsHeader}>
        <p className={styles.poolsTitle}>All Pools</p>
        <SearchBar
          placeholder="Symbol or address..."
          className={styles.poolsSearchBar}
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      <MobilePools poolsData={data} orderBy={orderBy} handleSort={handleSort} />
      <DesktopPools
        poolsData={data}
        orderBy={orderBy}
        handleSort={handleSort}
      />
      {isLoading && (
        <div className={styles.loadingFallback}>
          <LoaderV2 />
          <p>Loading pools...</p>
        </div>
      )}
      {data && (
        <div className={styles.pagination}>
          <p>
            Showing {data?.length} out of {totalCount} pools...
          </p>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
};

export default Pools;
