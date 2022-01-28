import React from "react";
import styled from "styled-components";
import Card from "atomic/card";
import Select from "atomic/select";
import { categories, Option, Category, accounts, labels } from "./constants";
import dayjs from "dayjs";
import { CategoryOption, createRecord, Record } from "services/records";
import { useMutation } from "react-query";
import Button from "atomic/button";
import RecordTypeTab, { RecordType } from "./record-type-tab";

type CreateRecordProps = {
  className?: string;
};

const StyledCreateRecord = styled.form`
  padding: 24px;
  margin-bottom: 76px;
  label {
    color: #1b2559;
    font-weight: bold;
    font-size: 14px;
  }
`;

const Input = styled.input`
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

const OutlineButton = styled(Button)`
  background: transparent;
  border: 1px solid #4318ff;
  color: #4318ff;
  font-size: 14px;
`;

const CreateRecord: React.FC<CreateRecordProps> = () => {
  const { mutate, isLoading } = useMutation(createRecord, {
    onSuccess: () => {
      clearForm();
    },
    onError: (error) => {
      alert(error);
    },
  });

  const [recordType, setRecordType] = React.useState<RecordType>(
    RecordType.Expense
  );
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  // :: Form State
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [account, setAccount] = React.useState<Option | null | undefined>();
  const [label, setLabel] = React.useState<Option | null | undefined>();
  const [category, setCategory] = React.useState<Category | null | undefined>();
  const [subcategory, setSubcategory] =
    React.useState<Category | null | undefined>();
  const [date, setDate] = React.useState<string>(dayjs().format("YYYY-MM-DD"));

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

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
  }, [recordType]);

  React.useEffect(() => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, [recordType]);

  const onResetCategory = () => {
    setCategory(undefined);
    setSubcategory(undefined);
  };

  const clearForm = () => {
    setName("");
    setAmount("");
    setAccount(undefined);
    setLabel(undefined);
    setCategory(undefined);
    setSubcategory(undefined);
    setDate(dayjs().format("YYYY-MM-DD"));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const record: Record = {
      name,
      amount: parseFloat(amount) || 0,
      category: (category?.value as CategoryOption) ?? "Alimento y bebidas",
      subcategory: subcategory?.value ?? "",
      label: label?.value,
      account: account?.value ?? "",
      date,
    };
    mutate({ record });
  };

  return (
    <StyledCreateRecord onSubmit={onSubmit}>
      <Card className="mb-4">
        <RecordTypeTab selectedTab={recordType} onTabClick={setRecordType} />
        <label className="sr-only" htmlFor="amount">
          Amount
        </label>
        <CurrencyInput
          id="amount"
          placeholder="$0.00"
          type="number"
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
          onChange={onChangeName}
          required
        />
        <Select
          options={categories}
          placeholder="Food"
          label="Category"
          selectedItem={category}
          onClearSelectedItem={onResetCategory}
          handleSelectedItemChange={({ selectedItem, ...rest }) =>
            setCategory(selectedItem)
          }
        />
        <Select
          options={category?.subcategories || []}
          placeholder="Restaurant"
          label="Subcategory"
          disabled={!category}
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
          selectedItem={account}
          onClearSelectedItem={() => setAccount(null)}
          handleSelectedItemChange={({ selectedItem }) =>
            setAccount(selectedItem)
          }
        />
        <label htmlFor="date">Date</label>
        <Input
          id="date"
          type="date"
          placeholder="2021/10/21"
          value={date}
          onChange={(v) => setDate(v.target.value)}
        />
        <Select
          options={labels}
          placeholder="Monthly expense"
          label="Label"
          selectedItem={label}
          onClearSelectedItem={() => setLabel(null)}
          handleSelectedItemChange={({ selectedItem }) =>
            setLabel(selectedItem)
          }
        />
        <div className="w-full flex justify-between">
          <OutlineButton className="w-screen" onClick={clearForm} type="button">
            Clear
          </OutlineButton>
          <div className="mx-2" />
          <Button className="w-screen" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create"}
          </Button>
        </div>
      </Card>
    </StyledCreateRecord>
  );
};

export default CreateRecord;
