import React from "react";
import Card from "atomic/card";
import styled from "styled-components";
import Icon from "atomic/icon";

type SmallCardProps = {
  title?: string;
  subtitle?: string;
};

const StyledSmallCard = styled(Card)`
  padding: 20px 16px;
  .title {
    font-size: 14px;
    color: #a3aed0;
  }
  .amount {
    color: #1b2559;
    font-weight: bold;
    font-size: 24px;
  }
`;

const StyledIcon = styled(Icon)`
  color: #1c6cb7;
  font-size: 32px;
  padding: 12px;
  background: #f4f7fe;
  border-radius: 50%;
  color: #4318ff;
`;

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  subtitle,
}: SmallCardProps) => {
  return (
    <StyledSmallCard className="flex items-center mb-4">
      <StyledIcon name="shopping_basket" />
      <div className="flex flex-col ml-3">
        <p className="title">{title}</p>
        <p className="amount">{subtitle}</p>
      </div>
    </StyledSmallCard>
  );
};

export default SmallCard;
