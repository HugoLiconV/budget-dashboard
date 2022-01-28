import React from "react";
import ExpenseItem from "./expense-item";
import CardWithHeader from "components/card-with-header";
import { formatCurrency } from "utils/currency";
import { Record as RecordType } from "services/records";
import { categoryIcon } from "pages/create-record/constants";

type RecentExpensesProps = {
  balance?: number;
  loading?: boolean;
  onRefresh?: () => void;
  records?: RecordType[];
};

const RecentExpenses: React.FC<RecentExpensesProps> = ({
  balance,
  loading,
  onRefresh,
  records,
}: RecentExpensesProps) => {
  const parsedBalance = formatCurrency(balance);
  return (
    <CardWithHeader
      className="mb-4"
      title="Balance"
      subtitle={parsedBalance}
      loading={loading}
      onRefresh={onRefresh}
    >
      <h3 className="mb-2">Recent</h3>
      {records
        ?.map((record) => ({ ...record, date: new Date(record.date) }))
        .map(({ name, date, amount, category }, i) => {
          const iconName = categoryIcon[category];
          return (
            <ExpenseItem
              key={i}
              name={name}
              date={date}
              amount={amount}
              iconName={iconName}
            />
          );
        })}
    </CardWithHeader>
  );
};

export default RecentExpenses;
