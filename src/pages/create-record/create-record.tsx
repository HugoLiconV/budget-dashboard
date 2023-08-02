import React from "react";
import styled from "styled-components";
import Card from "atomic/card";
import { labels } from "./constants";
import {
  CategoryOption,
  createRecord,
  createTransfer,
  Record,
  Transfer,
} from "services/records";
import { useMutation } from "react-query";
import Button from "atomic/button";
import { RecordType } from "./components/record-type-tab";
import { ExpenseIncomeForm, RecordTypeTab, TransferForm } from "./components";
import useRecordForm from "./hooks/useRecordForm";
import { RecordFormContext } from "./context/recod-form-context";
import toast, { Toaster } from "react-hot-toast";
import Select from "atomic/select";

const StyledCreateRecord = styled.form`
  padding: 24px;
  margin-bottom: 76px;
  label {
    color: #1b2559;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  background: #f4f7fe;
  border-radius: 10px;
  padding: 12px 16px;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  -webkit-appearance: none;

  ::placeholder {
    color: #8f9bba;
  }
`;

const CurrencyInput = styled(Input)`
  background: white;
  font-size: 34px;
  font-weight: bold;
  text-align: right;
  padding: 0;
  margin: 8px 0 0 0;

  &.${RecordType.Expense} {
    color: #e31a1b;
  }

  &.${RecordType.Income} {
    color: #01b574;
  }
`;

export const OutlineButton = styled(Button)`
  background: transparent;
  border: 1px solid #4318ff;
  color: #4318ff;
  font-size: 14px;
`;

const CreateRecord = () => {
  const recordValues = useRecordForm();
  const formRef = React.useRef<HTMLFormElement>(null);
  const {
    date,
    amount,
    label,
    name,
    setDate,
    category,
    subcategory,
    setAmount,
    setLabel,
    setName,
    toAccount,
    fromAccount,
    account,
    clearForm,
  } = recordValues;

  const { isLoading: isCreateRecordLoading, mutateAsync: postRecord } =
    useMutation(createRecord, {
      onSuccess: () => {
        clearForm();
        if (formRef.current) {
          formRef.current.reset();
        }
      },
    });
  const { isLoading: isCreateTransferLoading, mutateAsync: postTransfer } =
    useMutation(createTransfer, {
      onSuccess: () => {
        clearForm();
        if (formRef.current) {
          formRef.current.reset();
        }
      },
    });

  const isLoading = isCreateRecordLoading || isCreateTransferLoading;

  const [recordType, setRecordType] = React.useState<RecordType>(
    RecordType.Expense
  );
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const prefix = recordType === RecordType.Expense ? "-" : "";
    const hasPrefix = value.includes(prefix);
    setAmount(hasPrefix ? value : prefix + value);
  };

  React.useEffect(() => {
    setAmount((amount) => {
      if (!amount) {
        return "";
      }
      if (recordType === RecordType.Expense) {
        return "-" + amount;
      }
      const hasPrefix = amount.includes("-");
      if (hasPrefix) {
        return amount.replace("-", "");
      }
      return amount;
    });
  }, [recordType, setAmount]);

  React.useEffect(() => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, [recordType]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recordType === RecordType.Transfer) {
      const transfer: Transfer = {
        name,
        amount: parseFloat(amount) || 0,
        fromAccount: fromAccount?.value as string,
        toAccount: toAccount?.value as string,
        date,
        label: label?.value,
      };
      toast.promise(
        postTransfer({ transfer }),
        {
          loading: "Creating transfer...",
          success: "Transfer created",
          error: (err) => `Error: ${err.message}`,
        },
        {
          position: "bottom-center",
        }
      );
    } else {
      const record: Record = {
        name: name,
        amount: parseFloat(amount) || 0,
        category: category?.value as CategoryOption,
        subcategory: subcategory?.value as string,
        label: label?.value,
        account: account?.value as string,
        date,
      };
      toast.promise(
        postRecord({ record }),
        {
          loading: "Creating record...",
          success: "Record created",
          error: (err) => `Error: ${err.message}`,
        },
        {
          position: "bottom-center",
        }
      );
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <StyledCreateRecord onSubmit={onSubmit} ref={formRef}>
      <RecordFormContext.Provider value={recordValues}>
        <Card className="mb-4">
          <RecordTypeTab selectedTab={recordType} onTabClick={setRecordType} />
          <label className="sr-only" htmlFor="amount">
            Amount
          </label>
          <CurrencyInput
            id="amount"
            name="amount"
            placeholder="$0.00"
            ref={amountInputRef}
            step="any"
            inputMode="decimal"
            className={recordType}
            value={amount}
            onChange={onChangeAmount}
            required
          />
        </Card>
        <Card>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            placeholder="tacos"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
          {recordType === RecordType.Expense ||
          recordType === RecordType.Income ? (
            <ExpenseIncomeForm type={recordType} />
          ) : (
            <TransferForm />
          )}
          <label htmlFor="date">Date</label>
          <Input
            id="date"
            type="date"
            name="date"
            placeholder="2021/10/21"
            value={date}
            onChange={(v) => setDate(v.target.value)}
          />
          <Select
            options={labels}
            placeholder="Monthly expense"
            label="Label"
            name="label"
            selectedItem={label}
            onClearSelectedItem={() => setLabel(null)}
            handleSelectedItemChange={({ selectedItem }) =>
              setLabel(selectedItem)
            }
          />
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create"}
          </Button>
        </Card>
      </RecordFormContext.Provider>
      <Toaster />
    </StyledCreateRecord>
  );
};

export default CreateRecord;
