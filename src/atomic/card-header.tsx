import React from "react";
import styled from "styled-components";
import { ReactComponent as GraphIcon } from "assets/icons/graph.svg";
import IconButton from "atomic/icon-button";

type CardHeaderProps = {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  loading?: boolean;
} & Exclude<React.HTMLAttributes<HTMLDivElement>, "children">;

const StyledCardHeader = styled.div`
  position: absolute;
  top: -80px;
  width: calc(100% - 32px);
  border-radius: 17px;
  box-shadow: 0px 18px 40px 0px rgba(112, 144, 176, 0.12);
  background: linear-gradient(135deg, #868cff 0%, #4318ff 100%);
  padding: 14px 20px;
  color: #fff;
  h2 {
    font-size: 12px;
  }
  p {
    font-size: 34px;
    font-weight: bold;
  }
`;

const Icon = styled(IconButton)`
  font-size: 24px;
  color: #fff;
  padding: 0;
  &.loading {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: spin;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  onRefresh,
  loading,
  ...props
}: CardHeaderProps) => {
  return (
    <StyledCardHeader {...props}>
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        <Icon
          icon="autorenew"
          className={loading ? "loading" : ""}
          onClick={onRefresh}
        />
      </div>
      <div className="flex items-center justify-between">
        <p>{subtitle}</p>
        <GraphIcon />
      </div>
    </StyledCardHeader>
  );
};

export default CardHeader;
