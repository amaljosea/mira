import { useQueryParam, StringParam, withDefault, NumberParam } from "use-query-params";

interface PaginationState {
  page: number;
  search: string;
  orderBy: string;
}

const usePaginationState = ({
  page: defaultPage = 0,
  search: defaultSearch = "",
  orderBy: defaultOrderBy = "",
}: PaginationState) => {
  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, defaultPage));
  const [search, setSearch] = useQueryParam("search", withDefault(StringParam, defaultSearch));
  const [orderBy, setOrderBy] = useQueryParam("orderBy", withDefault(StringParam, defaultOrderBy));

  return {
    page,
    search,
    orderBy,
    // setters
    setPage,
    setSearch,
    setOrderBy,
  };
};

export default usePaginationState;
