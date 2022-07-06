import React from "react";
import styled from "styled-components";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Icon, { Icons } from "atomic/icon";
import classNames from "classnames";

dayjs.extend(relativeTime);

type ExpenseItemsProps = {
  name: string;
  date?: Date;
  amount: number | string;
  iconName: Icons;
  className?: string;
};

const StyledExpenseItem = styled.div`
  .title,
  .amount {
    color: #1b2559;
    font-weight: bold;
    font-size: 14px;
  }
  .date {
    color: #a3aed0;
    font-size: 12px;
  }
`;

const StyledIcon = styled(Icon)`
  color: #1c6cb7;
  font-size: 24px;
  padding: 9px;
  background: #f4f7fe;
  border-radius: 50%;
`;

const ExpenseItem: React.FC<ExpenseItemsProps> = ({
  amount,
  date,
  name,
  iconName,
  className,
}: ExpenseItemsProps) => {
  return (
    <StyledExpenseItem
      className={classNames("flex items-center mb-4", className)}
    >
      <StyledIcon name={iconName}>account_balance</StyledIcon>
      <div className="flex flex-col ml-3">
        <p className="title">{name}</p>
        <p className="date">{date ? dayjs(date).fromNow() : null}</p>
      </div>
      <div className="flex-1"></div>
      <p className="amount">{amount}</p>
    </StyledExpenseItem>
  );
};

export default ExpenseItem;
