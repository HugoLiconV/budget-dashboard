import React from "react";
import styled from "styled-components";
import random from "../../utils/random";
import MastercardIcon from "../icons/mastercard-icon";

const Card = styled.div`
  --card-width: calc(100vw - 32px);
  --aspect-ratio: calc(16 / 9);

  color: white;
  box-sizing: border-box;
  height: calc(var(--card-width) / var(--aspect-ratio));

  font-family: "Space Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 24px;
  background: linear-gradient(
    to right bottom,
    #585858,
    #424242,
    #2f2f2f,
    #101010,
    #000000
  );

  /* linear-gradient(
    to right bottom,
    #fd696b,
    #fa616e,
    #f65871,
    #f15075,
    #ec4879
  ); */

  padding: 16px;

  &.active {
    border: 4px solid #f186cb;
  }

  .card-name {
    margin-top: 0px;
  }

  .card-number {
    display: block;
    width: 100%;
    word-spacing: 2px;
    letter-spacing: 2px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px;
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

  return (
    <Card className={`${className} ${isActive ? "active" : ""}`}>
      <div className="d-flex space-between">
        <MastercardIcon />
        <p className="card-text text-right card-name">{name}</p>
      </div>
      <p className="card-number">**** **** **** {cardNumber}</p>
      <div className="d-flex space-between">
        <p className="details justify-center">
          <span className="subtitle">Hugo Licon</span>
        </p>
        <p className="details">
          <span className="subtitle">expires</span>
          <span className="subtitle">{expireDate}</span>
        </p>
      </div>
    </Card>
  );
}

export default CreditCard;
