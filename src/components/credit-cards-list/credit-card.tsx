import React from "react";
import styled from "styled-components";
import random from "../../utils/random";
import MastercardIcon from "../icons/mastercard-icon";

const Card = styled.div`
  --card-width: calc(100vw - 32px);
  --aspect-ratio: calc(16 / 9);
  height: calc(var(--card-width) / var(--aspect-ratio));

  font-family: "Space Mono", monospace;
  transition: all 1s;
  &.active {
    border: 4px solid white;
    height: calc((var(--card-width) / var(--aspect-ratio)) + 10px);
  }

  .card-number {
    word-spacing: 2px;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
  }

  .card-text {
    margin-bottom: 0;
    margin-top: 2px;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

type CreditCardProps = {
  name: string;
  className?: string;
  isActive: boolean;
};

function CreditCard({ name, className, isActive }: CreditCardProps) {
  function generateRandomExpireDate() {
    const randomMonth = random(1, 12);
    const randomYear = random(21, 28);
    const formattedMonth =
      randomMonth >= 10 ? `${randomMonth}` : `0${randomMonth}`;
    return `${formattedMonth}/${randomYear}`;
  }

  function generateRandomCardNumber() {
    return `${random(1, 10)}${random(1, 10)}${random(1, 10)}${random(1, 10)}`;
  }
  const cardNumber = React.useMemo(generateRandomCardNumber, []);
  const expireDate = React.useMemo(generateRandomExpireDate, []);

  const background = "bg-gradient-to-br from-pink-400 to-pink-600";

  return (
    <Card
      className={`${background} text-white box-border flex flex-col justify-between rounded-3xl p-4 ${className} ${
        isActive ? "active" : ""
      }`}
    >
      <div className="d-flex space-between">
        <MastercardIcon />
        <p className="card-text text-right card-name">{name}</p>
      </div>
      <p className="card-number block w-full text-white text-center text-base my-3.5">
        **** **** **** {cardNumber}
      </p>
      <div className="d-flex space-between">
        <p className="details flex flex-col mt-3 justify-center">
          <span className="subtitle">Hugo Licon</span>
        </p>
        <p className="details flex flex-col mt-3 ">
          <span className="subtitle">expires</span>
          <span className="subtitle">{expireDate}</span>
        </p>
      </div>
    </Card>
  );
}

export default CreditCard;
