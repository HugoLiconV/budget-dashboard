import dayjs from "dayjs";
import React from "react";
import { Category, Option } from "../constants";
import { RecordFormContextParams } from "../context/recod-form-context";

type ReturningType = RecordFormContextParams;

const useRecordForm = (): ReturningType => {
  // :: Form State
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [account, setAccount] = React.useState<Option | null | undefined>();
  const [label, setLabel] = React.useState<Option | null | undefined>();
  const [category, setCategory] = React.useState<Category | null | undefined>();
  const [subcategory, setSubcategory] =
    React.useState<Category | null | undefined>();
  const [date, setDate] = React.useState<string>(dayjs().format("YYYY-MM-DD"));
  const [fromAccount, setFromAccount] =
    React.useState<Option | null | undefined>();
  const [toAccount, setToAccount] = React.useState<Option | null | undefined>();

  const clearForm = () => {
    setName("");
    setAmount("");
    setAccount(undefined);
    setLabel(undefined);
    setCategory(undefined);
    setSubcategory(undefined);
    setDate(dayjs().format("YYYY-MM-DD"));
    setFromAccount(undefined);
    setToAccount(undefined);
  };

  return {
    name,
    setName,
    amount,
    setAmount,
    account,
    setAccount,
    label,
    setLabel,
    category,
    setCategory,
    subcategory,
    setSubcategory,
    date,
    setDate,
    clearForm,
    fromAccount,
    setFromAccount,
    toAccount,
    setToAccount,
  };
};

export default useRecordForm;
