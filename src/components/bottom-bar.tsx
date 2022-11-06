import React from "react";
import styled from "styled-components";
import Icon from "atomic/icon";
import { NavLink } from "react-router-dom";
type BottomBarProps = {
  className?: string;
};

const StyledBottomBar = styled.div`
  bottom: 0;
  width: 100%;
  left: 0;
  padding-bottom: 24px;
  background-color: var(--background-color);
`;

const Container = styled.div`
  margin-left: 24px;
  width: calc(100% - 48px);
  background: #fff;
  border-radius: 20px;
  &.bottom {
    box-shadow: none;
  }
`;

const StyledLink = styled(NavLink)`
  line-height: 0;
  color: rgba(112, 144, 176, 0.72);
  &:hover {
    color: #4318ff;
  }
  &.active {
    color: #4318ff;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 28px;
`;

const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <StyledBottomBar className="fixed">
      <Container className="py-4 flex items-center justify-evenly ">
        <StyledLink to="/" exact>
          <StyledIcon name="home" />
        </StyledLink>
        <StyledLink to="monthly-expenses">
          <StyledIcon name="show_chart" />
        </StyledLink>
        <StyledLink to="/create-record">
          <StyledIcon name="add_box" />
        </StyledLink>
        <StyledLink to="/accounts">
          <StyledIcon name="credit_card" />
        </StyledLink>
      </Container>
    </StyledBottomBar>
  );
};

export default BottomBar;
