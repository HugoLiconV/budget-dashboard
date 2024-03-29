import React from "react";
import { useQuery } from "react-query";
import { fetchDailyExpenses } from "services/daily-expenses";
import { getDashboard } from "services/dashboard";
import { fetchRecords } from "services/records";
import styled from "styled-components";
import { formatCurrency } from "utils/currency";
import { DailyExpensesCard, RecentExpenses, SmallCard } from "./components";

type HomeProps = {
  className?: string;
};

const StyledHome = styled.div`
  padding: 24px;
  margin-bottom: 60px;
`;

const Home: React.FC<HomeProps> = () => {
  const {
    data: dashboard,
    isLoading: isDashboardLoading,
    refetch: refetchDashboard,
  } = useQuery("home.dashboard", getDashboard);
  const {
    isLoading: areRecordsLoading,
    data: records,
    refetch: refetchRecords,
  } = useQuery("home.records", () => fetchRecords({ limit: 3 }));
  const {
    isLoading: isDailyExpensesLoading,
    data: dailyExpenses,
    refetch: refetchDailyExpenses,
  } = useQuery("home.daily-expenses", () => fetchDailyExpenses());

  function refetch() {
    refetchRecords();
    refetchDailyExpenses();
    refetchDashboard();
  }

  return (
    <StyledHome>
      <RecentExpenses
        balance={dashboard?.totalBalance}
        loading={
          isDashboardLoading || areRecordsLoading || isDailyExpensesLoading
        }
        onRefresh={refetch}
        records={records?.data}
      />
      <DailyExpensesCard dailyExpenses={dailyExpenses} />
      <SmallCard
        title="Spent this month"
        subtitle={formatCurrency(dashboard?.currentExpenses)}
      />
      <SmallCard
        title="Pending to pay"
        subtitle={formatCurrency(dashboard?.remainingExpenses)}
      />
    </StyledHome>
  );
};

export default Home;
