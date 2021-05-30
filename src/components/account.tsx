import styled from "styled-components";
import CreditCardsList from "./credit-cards-list";
import { getDashboard, DashboardResponse } from "./services/dashboard";
import Loader from "./icons/loader";
import { formatCurrency } from "../utils/currency";
import { useQuery } from "../hooks/useQuery";
import { CardsResponse, getCards } from "./services/cards";
import BlurredText from "./blurred-text";

const Card = styled.div``;

export default function Account() {
  const { status: dashboardDataStatus, data: dashboardData } =
    useQuery<DashboardResponse>(getDashboard);

  const { data: cards } = useQuery<CardsResponse[]>(getCards);
  const cardClassName =
    "bg-gray-800 flex flex-col py-4 px-2 rounded-2xl via-pink-500 to-red-500";
  const mainCardClassName =
    cardClassName + " col-start-1 col-end-3 row-start-1 row-end-2";

  return (
    <div className="flex flex-col">
      <CreditCardsList creditCards={cards || []} />
      <div className="text-white py-8 p-4 grid grid-cols-2 gap-y-6 gap-x-2">
        <Card className={mainCardClassName}>
          <span className=" text-gray-300 mb-2 text-center text-base">
            Saldo general
          </span>
          <span className="text-white font-bold text-center text-2xl">
            <BlurredText
              text={formatCurrency(dashboardData?.totalBalance ?? 0)}
            />
          </span>
        </Card>
        <Card className={cardClassName}>
          <span className=" text-gray-300 mb-2 text-xs text-center">
            Gastos planeados
          </span>
          <span className="text-white font-bold text-center">
            <BlurredText
              text={formatCurrency(dashboardData?.expectedExpenses ?? 0)}
            />
          </span>
        </Card>
        <Card className={cardClassName}>
          <span className=" text-gray-300 mb-2 text-xs text-center">
            Ingresos
          </span>
          <span className="text-white font-bold text-center">
            <BlurredText text={formatCurrency(dashboardData?.income ?? 0)} />
          </span>
        </Card>
        <Card className={cardClassName}>
          <span className=" text-gray-300 mb-2 text-xs text-center">
            Restante por pagar
          </span>
          <span className="text-white font-bold text-center">
            <BlurredText
              text={formatCurrency(dashboardData?.remainingExpenses ?? 0)}
            />
          </span>
        </Card>
        <Card className={cardClassName}>
          <span className=" text-gray-300 mb-2 text-xs text-center">
            Gastos
          </span>
          <span className="text-white font-bold text-center">
            <BlurredText
              text={formatCurrency(dashboardData?.currentExpenses ?? 0)}
            />
          </span>
        </Card>
      </div>
    </div>
  );
}
