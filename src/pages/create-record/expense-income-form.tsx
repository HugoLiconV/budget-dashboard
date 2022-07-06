import Select from "atomic/select";
import { accounts, categories } from "./constants";
import { useRecordFormContext } from "./context/recod-form-context";

function ExpenseIncomeForm() {
  const {
    setCategory,
    setSubcategory,
    category,
    subcategory,
    account,
    setAccount,
  } = useRecordFormContext();

  const onResetCategory = () => {
    setCategory(undefined);
    setSubcategory(undefined);
  };

  return (
    <>
      <Select
        options={categories}
        placeholder="Food"
        label="Category"
        name="category"
        selectedItem={category}
        onClearSelectedItem={onResetCategory}
        handleSelectedItemChange={({ selectedItem, ...rest }) => {
          setCategory(selectedItem);
          setSubcategory(undefined);
        }}
      />
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
