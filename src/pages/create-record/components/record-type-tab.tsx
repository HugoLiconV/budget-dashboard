import classNames from "classnames";
import React from "react";
import styled from "styled-components";

export enum RecordType {
  Expense = "Expense",
  Income = "Income",
  Transfer = "Transfer",
}

type RecordTypeTabProps = {
  className?: string;
  selectedTab: RecordType;
  onTabClick: (tab: RecordType) => void;
};

const StyledRecordTypeTab = styled.div`
  border: 1px solid #4318ff;
  width: fit-content;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  display: flex;

  button.selected {
    background-color: #4318ff;
    color: #fff;
  }
  & :not(:last-child, :first-child) {
    border-left: 1px solid #4318ff;
    border-right: 1px solid #4318ff;
  }
`;

const RecordTypeTab: React.FC<RecordTypeTabProps> = ({
  onTabClick,
  selectedTab,
}: RecordTypeTabProps) => {
  return (
    <StyledRecordTypeTab>
      <button
        className={classNames("w-full py-1", {
          selected: selectedTab === RecordType.Expense,
        })}
        onClick={(e) => {
          onTabClick(RecordType.Expense);
        }}
        type="button"
      >
        Expense
      </button>
      <button
        className={classNames("w-full py-1", {
          selected: selectedTab === RecordType.Income,
        })}
        type="button"
        onClick={(e) => {
          onTabClick(RecordType.Income);
        }}
      >
        Income
      </button>
      <button
        className={classNames("w-full py-1", {
          selected: selectedTab === RecordType.Transfer,
        })}
        type="button"
        onClick={(e) => {
          onTabClick(RecordType.Transfer);
        }}
      >
        Transfer
      </button>
    </StyledRecordTypeTab>
  );
};

export default RecordTypeTab;
