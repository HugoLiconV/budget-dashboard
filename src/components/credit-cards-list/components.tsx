import styled from "styled-components";
import { Direction } from "./reducer";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

type CarouselContainerProps = {
  sliding: boolean;
  dir: Direction;
};

export const CarouselContainer = styled.div<CarouselContainerProps>`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === Direction.PREV)
      return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  }};
`;

type CarouselSlotProps = {
  order: number;
};

export const CarouselSlot = styled.div<CarouselSlotProps>`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;

export const CardDetails = styled.div`
  .dolar-sign {
    color: var(--subtitle-color);
    font-size: 2.25rem;
    font-weight: 100;
  }
  .amount {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
    color: var(--font-color);
    &:first-letter {
      color: var(--subtitle-color);
      font-size: 2.25rem;
      font-weight: 100;
    }
  }
  .balance-label {
    color: var(--subtitle-color);
  }
  text-align: center;
  margin-top: 24px;
`;
