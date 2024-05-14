const { queryClient } = require("./queryCLient");

export const TanstackPrefetchQuery = async ({ queryKey, queryFn }) => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });
};
