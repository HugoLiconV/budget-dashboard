import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { getAccounts } from "services/accounts";
import { Account } from "types/account";

type Options = UseQueryOptions<Account[]>;

const useAccountsQuery = (
  options: Options = {}
): UseQueryResult<Account[], unknown> => {
  const response = useQuery<Account[], unknown>(
    "accounts",
    () => getAccounts(),
    options
  );

  return response;
};

export default useAccountsQuery;
