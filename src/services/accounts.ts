import { Account, AccountEnum } from "types/account";
import { formatCurrency } from "utils/currency";
import { get } from "./api";

type AccountResponse = {
  name: AccountEnum;
  balance: number;
};

export async function getAccounts(): Promise<Account[]> {
  const response = await get<AccountResponse[]>("/accounts");
  const data = response?.data;
  if (!data) {
    return Promise.reject(new Error("No data"));
  }
  const formatedData: Account[] | undefined = data?.map((item) => ({
    ...item,
    balance: formatCurrency(item.balance),
  }));
  return formatedData;
}
