import BlurredText from "components/blurred-text";
import CardsBottomSheet from "components/cards-bottom-sheet";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { formatCurrency } from "../../utils/currency";
import { CardsResponse } from "../../services/accounts";
import {
  CardDetails,
  CarouselContainer,
  CarouselSlot,
  Wrapper,
} from "./components";
import CreditCard from "./credit-card";
import { Direction, initialState, reducer } from "./reducer";

const getOrder = ({
  index,
  pos,
  numItems,
}: {
  index: number;
  pos: number;
  numItems: number;
}) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

type CreditCardsListProps = {
  creditCards: CardsResponse[];
};

const CreditCardsList = ({ creditCards }: CreditCardsListProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = creditCards.length;
  const selectedCard = getActiveCard();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetails = () => setIsDetailsOpen(true);
  const closeDetails = () => setIsDetailsOpen(false);

  const slide = (dir: Direction) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(Direction.NEXT),
    onSwipedRight: () => slide(Direction.PREV),
    onTap: openDetails,

    preventDefaultTouchmoveEvent: true,
  });

  function getActiveCard() {
    const index = (1 + state.pos) % creditCards.length;
    return creditCards[index];
  }

  return (
    <>
      <Wrapper {...handlers}>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {creditCards.map((creditCard, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({
                index: index,
                pos: state.pos,
                numItems,
              })}
            >
              <CreditCard
                isActive={(1 + state.pos) % creditCards.length === index}
                name={creditCard.account}
                className="child"
              />
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <CardDetails>
        <p className="balance-label">{selectedCard?.account} balance:</p>
        <p>
          <span className="amount">
            <BlurredText text={formatCurrency(selectedCard?.balance)} />
          </span>
        </p>
      </CardDetails>
      <CardsBottomSheet
        creditCards={creditCards}
        isOpen={isDetailsOpen}
        onDismiss={closeDetails}
      />
    </>
  );
};

export default CreditCardsList;
