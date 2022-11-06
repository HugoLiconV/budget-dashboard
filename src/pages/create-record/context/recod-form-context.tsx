import React from "react";
import { Category, Option } from "../constants";

export type RecordFormContextParams = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  category: Category | null | undefined;
  setCategory: React.Dispatch<
    React.SetStateAction<Category | null | undefined>
  >;
  subcategory: Category | null | undefined;
  setSubcategory: React.Dispatch<
    React.SetStateAction<Category | null | undefined>
  >;
  account: Option | null | undefined;
  setAccount: React.Dispatch<React.SetStateAction<Option | null | undefined>>;
  label: Option | null | undefined;
  setLabel: React.Dispatch<React.SetStateAction<Option | null | undefined>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  fromAccount: Option | null | undefined;
  setFromAccount: React.Dispatch<
    React.SetStateAction<Option | null | undefined>
  >;
  toAccount: Option | null | undefined;
  setToAccount: React.Dispatch<React.SetStateAction<Option | null | undefined>>;
  clearForm: () => void;
};

export const RecordFormContext =
  React.createContext<RecordFormContextParams | undefined>(undefined);

export function useRecordFormContext(): RecordFormContextParams {
  const context = React.useContext(RecordFormContext);
  if (!context) {
    throw new Error(
      `Record Form Context cannot be rendered outside the Record Form Context Provider`
    );
  }
  return context;
}
