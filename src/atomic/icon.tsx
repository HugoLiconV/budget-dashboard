import React from "react";
import styled from "styled-components";

export type Icons =
  | "home"
  | "show_chart"
  | "add_box"
  | "credit_card"
  | "restaurant_menu"
  | "shopping_bag"
  | "house"
  | "directions_bus"
  | "directions_car"
  | "computer"
  | "monetization_on"
  | "show_chart"
  | "payments"
  | "face"
  | "savings"
  | "swap_horiz"
  | "shopping_basket";

type IconProps = {
  name: Icons;
  className?: string;
};

const StyledIcon = styled.span``;

const Icon: React.FC<IconProps> = ({ name, className = "" }: IconProps) => {
  return (
    <StyledIcon className={"material-icons-outlined " + className}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
