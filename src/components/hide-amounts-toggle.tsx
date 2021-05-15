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
  color: #8f2df0;
`;

const HideAmountsToggle: React.FC = () => {
  const { hideAmounts, toggleHideAmounts } = useSettingsContext();

  return (
    <Button onClick={toggleHideAmounts}>
      {hideAmounts ? <AiFillEye /> : <AiFillEyeInvisible />}
    </Button>
  );
};

export default HideAmountsToggle;
