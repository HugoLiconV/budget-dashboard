import styled from "styled-components";
import CreditCardsList from "./credit-cards-list";
import { getDashboard, DashboardResponse } from "../services/dashboard";
import { formatCurrency } from "../utils/currency";
// import { CardsResponse, getCards } from "../services/accounts";
import BlurredText from "./blurred-text";
import Button from "atomic/button";
import { BiHome, BiBarChartSquare, BiPlus } from "react-icons/bi";

const Card = styled.div``;
const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 32px;
  height: fit-content;
  color: white;
`;
export default function Account() {
  return <h2>test</h2>;
}
