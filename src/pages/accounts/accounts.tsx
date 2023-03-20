import React from "react";
import styled from "styled-components";
import CardWithHeader from "components/card-with-header";
import { useAccountsQuery } from "hooks";
import { AccountEnum } from "types/account";
import { AccountList } from "./components";

type AccountsProps = {
  className?: string;
};

const StyledAccounts = styled.div`
  padding: 24px;
  margin-bottom: 60px;

  .account-list {
    > :last-child {
      margin-bottom: 0;
    }
  }
`;

const Accounts: React.FC<AccountsProps> = () => {
  const { data, isFetching, refetch } = useAccountsQuery();
  const accounts = data?.filter(
    (account) => account.name !== AccountEnum.total
  );
  const totalBalance = data?.find(
    (account) => account.name === AccountEnum.total
  );

  return (
    <StyledAccounts>
      <h1>Accounts</h1>
      <CardWithHeader
        title="Current Balance"
        subtitle={totalBalance?.balance || "$0.00"}
        onRefresh={refetch}
        loading={isFetching}
      >
        <div className="account-list">
          <AccountList accounts={accounts} />
        </div>
      </CardWithHeader>
    </StyledAccounts>
  );
};

export default Accounts;
