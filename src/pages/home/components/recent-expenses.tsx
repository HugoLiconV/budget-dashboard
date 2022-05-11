import React from "react";
import ExpenseItem from "./expense-item";
import CardWithHeader from "components/card-with-header";
import { formatCurrency } from "utils/currency";
import { Record as RecordType } from "services/records";
import { categoryIcon } from "pages/create-record/constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

type RecentExpensesProps = {
  balance?: number;
  loading?: boolean;
  onRefresh?: () => void;
  records?: RecordType[];
};

const SkeletonContainer = styled.div``;

const SkeletonItem = () => {
  return (
    <SkeletonContainer className="flex">
      <Skeleton width={42} height={42} circle />
      <div className="flex-1 ml-3">
        <Skeleton height={42} />
      </div>
    </SkeletonContainer>
  );
};

const SkeletonList = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from(Array(count).keys()).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </>
  );
};

const RecordList = ({ records }: { records: RecordType[] | undefined }) => {
  return (
    <>
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
    </>
  );
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
      {loading ? <SkeletonList count={3} /> : <RecordList records={records} />}
    </CardWithHeader>
  );
};

export default RecentExpenses;
