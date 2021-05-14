import HideAmountsToggle from "components/hide-amounts-toggle";
import React from "react";
import styled from "styled-components";
import "./App.css";
import Account from "./components/account";
import { SettingsContext } from "./context/settings-context";

const Header = styled.h1`
  padding: 32px 0 8px;
  text-align: center;
  color: var(--font-color);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 16px;
`

function App() {
  const [hideAmounts, setHideAmounts] = React.useState(false)

  const toggleHideAmounts = React.useCallback(() => setHideAmounts(v => !v), [])

  return (
    <SettingsContext.Provider value={{
      hideAmounts, toggleHideAmounts
    }}>
      <div className="App">
        <Navbar>
          <div />
          <Header>Dashboard</Header>
          <HideAmountsToggle />
        </Navbar>
        <Account />
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
