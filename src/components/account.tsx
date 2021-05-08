import styled from "styled-components";
import CreditCardsList from "./credit-cards-list";
import { getDashboard, DashboardResponse } from "./services/dashboard";
import Loader from "./icons/loader";
import { formatCurrency } from "../utils/currency";
import { useQuery } from "../hooks/useQuery";
import { CardsResponse, getCards } from "./services/cards";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 69px);
  .ml-8 {
    margin-left: 8px;
  }
`;

const GridContainer = styled.div`
  height: fit-content;
  color: white;
  padding: 32px 16px;
  border-top-left-radius: 32px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 8px;
  span {
    text-align: center;
  }
  .main-card {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 24px;

    .subtitle {
      font-size: 16px;
    }
  }
`;

const Card = styled.div`
  color: #38302e;
  background: linear-gradient(to right bottom, #ffffff, #fbfbfb);
  box-shadow: 0 16px 24px 0 rgb(118 143 255 / 10%);

  padding: 16px 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  .subtitle {
    color: var(--subtitle-color);
    font-size: 12px;
    margin-bottom: 8px;
  }
  .card-amount {
    color: var(--font-color);
    font-weight: bold;
  }
`;

export default function Account() {
  const {
    status: dashboardDataStatus,
    data: dashboardData
  } = useQuery<DashboardResponse>(getDashboard);

  const { status: cardsDataStatus, data: cards } = useQuery<CardsResponse[]>(
    getCards
  );

  if (dashboardDataStatus === "loading") {
    return (
      <Container className="align-center">
        <Loader color="#18191a" />
      </Container>
    );
  }

  return (
    <Container>
      {cardsDataStatus === "loading" ? (
        <Loader />
      ) : (
        <CreditCardsList creditCards={cards || []} />
      )}
      <GridContainer>
        <Card className="main-card">
          <span className="subtitle">Saldo general</span>
          <span className="card-amount">
            {formatCurrency(dashboardData?.totalBalance ?? 0)}
          </span>
        </Card>
        <Card>
          <span className="subtitle">Gastos esperados</span>
          <span className="card-amount">
            {formatCurrency(dashboardData?.expectedExpenses ?? 0)}
          </span>
        </Card>
        <Card>
          <span className="subtitle">Ingresos</span>
          <span className="card-amount">
            {formatCurrency(dashboardData?.income ?? 0)}
          </span>
        </Card>
        <Card>
          <span className="subtitle">Libre</span>
          <span className="card-amount">
            {formatCurrency(dashboardData?.totalBalance ?? 0)}
          </span>
        </Card>
        <Card>
          <span className="subtitle">Gastos</span>
          <span className="card-amount">
            {formatCurrency(dashboardData?.currentExpenses ?? 0)}
          </span>
        </Card>
      </GridContainer>
    </Container>
  );
}
