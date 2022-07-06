import React from "react";
import Card from "atomic/card";
import styled from "styled-components";
import CardHeader from "atomic/card-header";

type CardWithHeaderProps = {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

const StyledCardWithHeader = styled(Card)`
  margin-top: 112px;
  padding: 40px 16px 16px;
  h3 {
    color: #a3aed0;
    font-size: 12px;
  }
`;

const CardWithHeader: React.FC<CardWithHeaderProps> = ({
  title,
  subtitle,
  onRefresh,
  children,
  loading,
  ...props
}: CardWithHeaderProps) => {
  return (
    <>
      <StyledCardWithHeader {...props}>
        <CardHeader
          title={title}
          subtitle={subtitle}
          onRefresh={onRefresh}
          loading={loading}
        />
        {children}
      </StyledCardWithHeader>
    </>
  );
};

export default CardWithHeader;
