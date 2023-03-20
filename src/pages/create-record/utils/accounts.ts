import { Account } from "types/account";
import { Option } from "../constants";

export const accountToOption = (account: Account): Option => ({
  value: account.name,
  name: account.name,
});
