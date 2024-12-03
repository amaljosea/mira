import MobilePools from "@/src/components/pages/liquidity-page/components/Pools/MobilePools/MobilePools";
import DesktopPools from "@/src/components/pages/liquidity-page/components/Pools/DesktopPools/DesktopPools";

import styles from "./Pools.module.css";
import usePoolsData from "@/src/hooks/usePoolsData";
import LoaderV2 from "@/src/components/common/LoaderV2/LoaderV2";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SearchBar } from "@/src/components/common/SearchBar/SearchBar";
import Pagination from "@/src/components/common/Pagination/Pagination";

const poolsPerPage = 10;

const Pools = () => {
  const router = useRouter();
  const DEFAULT_PAGINATION_VARIABLES = {
    after: undefined,
    before: undefined,
    first: poolsPerPage,
  };

  const [paginationVariables, setPaginationVariables] = useState(
    DEFAULT_PAGINATION_VARIABLES
  );
  const handleCreatePoolClick = useCallback(() => {
    router.push('/liquidity/create-pool')
  }, [router]);

  const { data, pageInfo, totalCount, isLoading } =
    usePoolsData(paginationVariables);

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && pageInfo?.hasNextPage) {
      setPaginationVariables({
        after: pageInfo.endCursor,
        before: undefined,
        first: poolsPerPage,
      });
    } else if (direction === "prev" && pageInfo?.hasPreviousPage) {
      setPaginationVariables({
        after: undefined,
        before: pageInfo.startCursor,
        first: poolsPerPage,
      });
    }
  };

  return (
    <section className={styles.pools}>
      <div className={styles.poolsHeader}>
        <p className={styles.poolsTitle}>All Pools</p>
        {/*<ActionButton className={clsx("mobileOnly", styles.createButton)} onClick={handleCreatePoolClick}>*/}
        {/* Create Pool*/}
        {/*</ActionButton>*/}
        <SearchBar
          placeholder="Symbol or address..."
          className={styles.poolsSearchBar}
        />
      </div>
      <MobilePools poolsData={data} />
      <DesktopPools poolsData={data} />
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
            hasNextPage={pageInfo?.hasNextPage}
            hasPreviousPage={pageInfo?.hasPreviousPage}
            onNext={() => handlePageChange("next")}
            onPrevious={() => handlePageChange("prev")}
          />
        </div>
      )}
    </section>
  );
};

export default Pools;
