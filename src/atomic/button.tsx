import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #4318ff;
  color: #fff;
  border-radius: 70px;
  padding: 12px;
  font-size: 14px;
  &:disabled {
    opacity: 0.5;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <StyledButton {...props} />;
};

export default Button;
