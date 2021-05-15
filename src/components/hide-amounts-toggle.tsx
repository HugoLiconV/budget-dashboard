import { useSettingsContext } from "context/settings-context";
import React from "react";
import styled from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 32px;
  height: fit-content;

  @keyframes active {
    0% {
      /* display: none;  */
      opacity: 0;
    }
    99% {
      opacity: 1;
    }
    100% {
      display: block;
    }
  }

  @keyframes inactive {
    0% {
      /* display: block; */
      opacity: 1;
    }
    99% {
      opacity: 0;
    }
    100% {
      /* display: none;  */
    }
  }

  .active {
    animation-name: active;
    animation-duration: 4s;
  }
  .inactive {
    animation-name: active;
    animation-duration: 4s;
  }
`;

const FillEye = styled(AiFillEye)`
  /* font-size: 20px; */
  /* color: #f186cb;
  transition: all 0.5s ease-out;
  &.active {
    visibility: visible;
  }
  &.inactive {
    visibility: hidden; */
  /* } */
`;
const FillEyeInvisible = styled(AiFillEyeInvisible)`
  /* font-size: 20px; */
  /* transition: all 0.5s ease-out; */
`;

const HideAmountsToggle: React.FC = () => {
  const { hideAmounts, toggleHideAmounts } = useSettingsContext();
  const className = hideAmounts ? "active" : "inactive";

  return (
    <Button onClick={toggleHideAmounts}>
      <FillEye className={`${hideAmounts ? "active" : "inactive"}`} />
      <FillEyeInvisible className={`${!hideAmounts ? "active" : "inactive"}`} />
    </Button>
  );
};

export default HideAmountsToggle;
