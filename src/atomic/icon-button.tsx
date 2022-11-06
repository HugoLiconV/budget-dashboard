import React from "react";
import styled from "styled-components";

type Icon = "autorenew";

type IconButtonProps = {
  icon: Icon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledIconButton = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 9px;
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  /* &:hover {
    background: rgba(255, 255, 255, 0.2);
  } */
`;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIconButton {...props}>
      <span className="material-icons-outlined">{icon}</span>
    </StyledIconButton>
  );
};

export default IconButton;
