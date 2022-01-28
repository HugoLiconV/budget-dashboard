import React from "react";
import styled from "styled-components";
import CardWithHeader from "components/card-with-header";
import { fetchMonthlyExpenses } from "services/monthly-expenses";
import { useQuery } from "react-query";
import ExpenseItem from "pages/home/components/expense-item";
import { formatCurrency } from "utils/currency";
import { categoryIcon } from "pages/create-record/constants";

type MonthlyExpensesProps = {
  className?: string;
};

const StyledMonthlyExpenses = styled.div`
  padding: 24px;
  margin-bottom: 76px;
  h3 {
    color: #a3aed0;
    font-size: 12px;
  }
`;

const useQueryMonthlyExpenses = () => {
  const { data, ...response } = useQuery(
    "monthlyExpenses",
    fetchMonthlyExpenses
  );

  const formatedData = data?.map((item) => ({
    ...item,
    amount: formatCurrency(item.amount),
  }));

  return {
    ...response,
    data: formatedData,
  };
};

const UpdaidMonthlyExpenseItem = styled(ExpenseItem)`
  .amount {
    color: #a3aed0;
    text-decoration: line-through;
  }
`;

const MonthlyExpenses: React.FC<MonthlyExpensesProps> = () => {
  const { data, isFetching, refetch } = useQueryMonthlyExpenses();

  const paidExpenses = data?.filter((expense) => expense.paid);
  const unpaidExpenses = data?.filter((expense) => !expense.paid);

  return (
    <StyledMonthlyExpenses>
      <h1>Monthly Expenses</h1>
      <CardWithHeader
        title="Monthly Expenses"
        subtitle="$25,215"
        loading={isFetching}
        onRefresh={refetch}
      >
        <h3 className="mb-2">Pending</h3>
        {unpaidExpenses?.map((e) => (
          <ExpenseItem
            key={e.name}
            amount={e.amount}
            date={e.date}
            name={e.name}
            iconName={categoryIcon[e.category]}
          />
        ))}
        <h3 className="mb-2">Paid</h3>
        {paidExpenses?.map((e) => (
          <UpdaidMonthlyExpenseItem
            key={e.name}
            amount={e.amount}
            date={e.date}
            name={e.name}
            iconName={categoryIcon[e.category]}
          />
        ))}
      </CardWithHeader>
    </StyledMonthlyExpenses>
  );
};

export default MonthlyExpenses;
