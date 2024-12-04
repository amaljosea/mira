import MobilePools from "@/src/components/pages/liquidity-page/components/Pools/MobilePools/MobilePools";
import DesktopPools from "@/src/components/pages/liquidity-page/components/Pools/DesktopPools/DesktopPools";

import styles from "./Pools.module.css";
import usePoolsData from "@/src/hooks/usePoolsData";
import LoaderV2 from "@/src/components/common/LoaderV2/LoaderV2";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {useCallback} from "react";
import { SearchBar } from "@/src/components/common/SearchBar/SearchBar";

const Pools = () => {
  const router = useRouter();

  const handleCreatePoolClick = useCallback(() => {
    router.push('/liquidity/create-pool')
  }, [router]);

  const { data, isLoading, moreInfo } = usePoolsData();

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

  console.log(moreInfo);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className={styles.pools}>
      <div className={styles.poolsHeader}>
        <p className={styles.poolsTitle}>All Pools</p>
        <ActionButton className={clsx("mobileOnly", styles.createButton)} onClick={handleCreatePoolClick}>
          Create Pool
        </ActionButton>
        <SearchBar
          placeholder="Symbol or address..."
          className={styles.poolsSearchBar}
          onChange={handleSearchChange}
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
    </section>
  );
};

export default Pools;
