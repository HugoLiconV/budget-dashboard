import { Icons } from "atomic/icon";
import ExpenseItem from "pages/home/components/expense-item";
import React from "react";
import styled from "styled-components";
import { Account, AccountEnum } from "types/account";

type AccountListProps = {
  accounts: Account[] | undefined;
};

const StyledAccountItem = styled(ExpenseItem)<{ color: string }>`
  .material-icons-outlined {
    color: ${(props) => props.color};
  }
`;

const AccountIconMap: Record<AccountEnum, { icon: Icons; color: string }> = {
  [AccountEnum.banamex_costco]: {
    icon: "credit_card",
    color: "#60A5FA",
  },
  [AccountEnum.banamex_oro]: {
    icon: "credit_card",
    color: "#FCD34D",
  },
  [AccountEnum.banorte_oro]: {
    icon: "credit_card",
    color: "#FCD34D",
  },
  [AccountEnum.cetes]: {
    icon: "savings",
    color: "#60A5FA",
  },
  [AccountEnum.efectivo]: {
    icon: "payments",
    color: "#34D399",
  },
  [AccountEnum.hsbc_2Now]: {
    icon: "credit_card",
    color: "#6B7280",
  },
  [AccountEnum.mis_metas]: {
    icon: "savings",
    color: "#F87171",
  },
  [AccountEnum.nomina]: {
    icon: "credit_card",
    color: "#F87171",
  },
  [AccountEnum.nu_bank]: {
    icon: "credit_card",
    color: "#8B5CF6",
  },
  [AccountEnum.banamex_priority]: {
    icon: "credit_card",
    color: "#6B7280",
  },
  [AccountEnum.hey_banco_credito]: {
    icon: "credit_card",
    color: "#6B7280",
  },
  [AccountEnum.total]: {
    icon: "monetization_on",
    color: "",
  },
};

const AccountList: React.FC<AccountListProps> = ({
  accounts,
}: AccountListProps) => {
  if (!accounts) {
    return null;
  }
  return (
    <>
      {accounts?.map((account) => (
        <StyledAccountItem
          color={AccountIconMap[account.name]?.color ?? ""}
          name={account.name}
          amount={account.balance}
          iconName={AccountIconMap[account.name]?.icon ?? "credit_card"}
          key={account.name}
        />
      ))}
    </>
  );
};

export default AccountList;
