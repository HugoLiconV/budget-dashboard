import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styled from "styled-components";
import Button from "atomic/button";
import { CardsResponse } from "./services/cards";
import BlurredText from "./blurred-text";
import { formatCurrency } from "utils/currency";
import "react-spring-bottom-sheet/dist/style.css";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 1);
`;

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
  creditCards: CardsResponse[];
};

const CardsBottomSheet: React.FC<Props> = ({
  isOpen,
  onDismiss,
  creditCards,
}: Props) => {
  const className =
    "rounded-lg bg-gray-500 text-white text-lg p-2 py-3 flex justify-between items-center mb-2";

  return (
    <Container>
      {/* <button onClick={() => setOpen(true)}>Open</button> */}
      <BottomSheet
        open={isOpen}
        onDismiss={onDismiss}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 5, maxHeight]}
        header={<h1 className="text-3xl text-white py-1">Cuentas</h1>}
        footer={<Button onClick={onDismiss}>Done</Button>}
      >
        <div className="p-2 pt-4">
          {creditCards.map((card) => (
            <p key={card.account} className={className}>
              <span>{card.account}</span>{" "}
              <span>
                <BlurredText text={formatCurrency(card?.balance)} />
              </span>
            </p>
          ))}
        </div>
      </BottomSheet>
    </Container>
  );
};

export default CardsBottomSheet;
