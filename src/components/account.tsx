import styled from "styled-components";
import CreditCardsList from "./credit-cards-list";
import { getDashboard, DashboardResponse } from "../services/dashboard";
import { formatCurrency } from "../utils/currency";
import { useQuery } from "../hooks/useQuery";
import { CardsResponse, getCards } from "../services/accounts";
import BlurredText from "./blurred-text";
import Button from "atomic/button";

const Card = styled.div``;

export default function Account() {
  const {
    status: dashboardDataStatus,
    data: dashboardData,
    refetch: refetchDashboard,
  } = useQuery<DashboardResponse>(getDashboard);

  const {
    data: cards,
    status: cardStatus,
    refetch: refetchAccounts,
  } = useQuery<CardsResponse[]>(getCards);

  const cardClassName =
    "bg-gray-800 flex flex-col py-4 px-2 rounded-2xl via-pink-500 to-red-500";
  const mainCardClassName =
    cardClassName + " col-start-1 col-end-3 row-start-1 row-end-2";

  if ([dashboardDataStatus, cardStatus].includes("error")) {
    return (
      <div className="p-4 bg-red-500 mx-4 rounded-2xl	text-center">
        <h2>Error obteniendo datos 😥</h2>
        <Button
          className="mt-2 py-2"
          onClick={() => {
            if (cardStatus === "error") {
              refetchAccounts();
            }
            if (dashboardDataStatus === "error") {
              refetchDashboard();
            }
          }}
        >
          Volver a intentar
        </Button>
      </div>
    );
  }
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
