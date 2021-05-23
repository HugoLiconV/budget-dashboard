import React from "react";
import styled from "styled-components";
import HideAmountsToggle from "./hide-amounts-toggle";

const Header = styled.h1`
  padding: 32px 0 24px;
  text-align: center;
  color: var(--font-color);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 16px;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <div />
      <Header>Dashboard</Header>
      <HideAmountsToggle />
    </Container>
  );
};

export default Navbar;
