import Card from "atomic/card";
import ProgressBar from "atomic/progress-bar";
import React from "react";
import { DailyExpense } from "services/daily-expenses";
import styled from "styled-components";
import { formatCurrency } from "utils/currency";

type DailyExpensesCardProps = {
  dailyExpenses?: DailyExpense;
};

const StyledSmallCard = styled(Card)`
  padding: 20px 16px;
  .title {
    font-size: 24px;
    color: #1b2559;
    font-weight: bold;
  }
`;

const StyledProgressBar = styled(ProgressBar)`
  .min,
  .max {
    color: rgba(163, 174, 208, 1);
    font-size: 14px;
    margin-top: 4px;
  }
  .value {
    color: #1b2559;
    font-weight: bold;
    font-size: 32px;
  }
`;

const DailyExpensesCard: React.FC<DailyExpensesCardProps> = ({
  dailyExpenses,
}: DailyExpensesCardProps) => {
  return (
    <StyledSmallCard className="mb-4">
      <p className="title mb-3">Daily Expenses</p>
      <StyledProgressBar
        max={dailyExpenses?.dailyBudget ?? 0}
        min={0}
        value={dailyExpenses?.dailyExpenses ?? 0}
        formater={(value) => formatCurrency(value)}
      />
    </StyledSmallCard>
  );
};

export default DailyExpensesCard;
