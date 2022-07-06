import Select from "atomic/select";
import React from "react";
import { Option, accounts } from "./constants";
import { useRecordFormContext } from "./context/recod-form-context";

export type TransferRecordFormValue = {
  name: string;
  fromAccount?: Option | null;
  toAccount?: Option | null;
  date: string;
  label?: Option | null;
};

const TransferForm: React.FC = () => {
  // :: Form State
  const { setFromAccount, fromAccount, setToAccount, toAccount } =
    useRecordFormContext();

  return (
    <>
      <Select
        options={accounts}
        placeholder="Banamex Oro"
        name="fromAccount"
        label="From"
        selectedItem={fromAccount}
        onClearSelectedItem={() => setFromAccount(null)}
        handleSelectedItemChange={({ selectedItem }) => {
          if (selectedItem?.value === toAccount?.value) {
            setToAccount(null);
          }
          setFromAccount(selectedItem);
        }}
      />
      <Select
        options={accounts}
        placeholder="Banamex Oro"
        label="To"
        name="toAccount"
        selectedItem={toAccount}
        onClearSelectedItem={() => setToAccount(null)}
        handleSelectedItemChange={({ selectedItem }) => {
          if (selectedItem?.value === fromAccount?.value) {
            setFromAccount(null);
          }
          setToAccount(selectedItem);
        }}
      />
    </>
  );
};

export default TransferForm;
