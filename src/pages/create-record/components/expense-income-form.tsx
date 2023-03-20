import Select from "atomic/select";
import { useAccountsQuery } from "hooks";
import React, { useCallback } from "react";
import { categories } from "../constants";
import { useRecordFormContext } from "../context/recod-form-context";
import { accountToOption } from "../utils/accounts";
import { RecordType } from "./record-type-tab";

type Props = {
  type: RecordType;
};

const incomeCategory = categories.find(
  (category) => category.value === "Ingresos"
);

function ExpenseIncomeForm({ type }: Props) {
  const {
    setCategory,
    setSubcategory,
    category,
    subcategory,
    account,
    setAccount,
  } = useRecordFormContext();
  const { data } = useAccountsQuery();
  const accounts = data
    ? data.filter((account) => account.name !== "Total").map(accountToOption)
    : [];

  const resetCategory = useCallback(() => {
    setCategory(undefined);
    setSubcategory(undefined);
  }, [setCategory, setSubcategory]);

  React.useEffect(() => {
    if (type === RecordType.Income) {
      setCategory(incomeCategory);
    } else {
      resetCategory();
    }
  }, [resetCategory, setCategory, type]);

  return (
    <>
      {type === RecordType.Expense && (
        <Select
          options={categories}
          placeholder="Food"
          label="Category"
          name="category"
          selectedItem={category}
          onClearSelectedItem={resetCategory}
          handleSelectedItemChange={({ selectedItem, ...rest }) => {
            setCategory(selectedItem);
            setSubcategory(undefined);
          }}
        />
      )}
      <Select
        options={category?.subcategories || []}
        placeholder="Restaurant"
        label="Subcategory"
        disabled={!category}
        name="subcategory"
        selectedItem={subcategory}
        onClearSelectedItem={() => setSubcategory(null)}
        handleSelectedItemChange={({ selectedItem }) =>
          setSubcategory(selectedItem)
        }
      />
      <Select
        options={accounts}
        placeholder="Banamex Oro"
        label="Account"
        name="account"
        selectedItem={account}
        onClearSelectedItem={() => setAccount(null)}
        handleSelectedItemChange={({ selectedItem }) =>
          setAccount(selectedItem)
        }
      />
    </>
  );
}

export default ExpenseIncomeForm;
