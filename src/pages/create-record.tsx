import { useAuth0 } from "@auth0/auth0-react";
import Button from "atomic/button";
import dayjs from "dayjs";
// import { useMutation } from "hooks/useQuery";
import React from "react";
import { createRecord, Record } from "services/records";
import styled from "styled-components";
import {
  accounts,
  categories,
  Category,
  labels,
  Option,
} from "./create-record/constants";
import Select from "./create-record/select";

const Input = styled.input`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

const CreateRecord: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>();
  const [category, setCategory] = React.useState<Category>();
  const [subcategory, setSubcategory] = React.useState<Category>();
  const [label, setLabel] = React.useState<Option>();
  const [account, setAccount] = React.useState<Option>();
  const [date, setDate] = React.useState<string>(dayjs().format("YYYY-MM-DD"));

  const inputClassName = "p-4 bg-gray-800 text-white text-xl mb-3 rounded-md";
  const labelClassName = "text-lg mb-1";
  const { getAccessTokenSilently } = useAuth0();

  return (
    <div className=" p-4">
      <h1 className="text-4xl text-center mb-4">Create Record</h1>
      <form
        className="flex flex-col text-white"
        onSubmit={async (e) => {
          e.preventDefault();
          // const token = await getAccessTokenSilently();
          // const record: Record = {
          //   name,
          //   amount: amount || 0,
          //   category: category?.value as Category ?? "Alimento y bebidas",
          //   subcategory: subcategory?.value ?? "",
          //   label: label?.value,
          //   account: account?.value ?? "",
          //   date,
          // };
          // createRecord({ record, token });
        }}
      >
        <label className={labelClassName} htmlFor="record">
          Nombre:
        </label>
        <input
          className={inputClassName}
          type="text"
          name="record"
          required
          value={name}
          placeholder="Shoes"
          onChange={(e) => setName(e.target.value)}
          id="record"
        />

        <label className={labelClassName} htmlFor="amount">
          Cantidad:
        </label>
        <input
          className={inputClassName + "w-full"}
          type="number"
          inputMode="decimal"
          name="amount"
          placeholder="$0.00"
          required
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          id="amount"
        />

        <label className={labelClassName} htmlFor="category">
          Categoria:
        </label>
        <Select
          onChange={(category) => setCategory(category)}
          options={categories}
          className={inputClassName}
          required
          placeholder="Select a category"
          name="category"
          id="category"
        />

        <label className={labelClassName} htmlFor="subcategory">
          Subcategoria:
        </label>
        <Select
          className={inputClassName}
          name="subcategory"
          id="subcategory"
          required
          placeholder="Select a subcategory"
          options={category?.subcategories || []}
          onChange={(category) => setSubcategory(category)}
          disabled={!category}
        />

        <label className={labelClassName} htmlFor="label">
          Etiqueta:
        </label>
        <Select
          className={inputClassName}
          name="label"
          placeholder="Select a label"
          id="label"
          options={labels}
          onChange={(label) => setLabel(label)}
        />
        <label className={labelClassName} htmlFor="account">
          Cuenta:
        </label>
        <Select
          className={inputClassName}
          name="account"
          placeholder="Select an account"
          id="account"
          required
          options={accounts}
          onChange={(account) => setAccount(account)}
        />
        <label className={labelClassName} htmlFor="date">
          Fecha:
        </label>
        <Input
          className={inputClassName}
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(e) => {
            const value = e.target.value;
            setDate(dayjs(value, "YYYY-MM-DD").format("YYYY-MM-DD"));
          }}
          placeholder="YYYY-MM-DD"
        ></Input>
        <Button type="submit" className="mt-4">
          Agregar
        </Button>
      </form>
    </div>
  );
};

export default CreateRecord;
