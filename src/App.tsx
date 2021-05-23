import Navbar from "components/navbar";
import React from "react";
import "./App.css";
import Account from "./components/account";
import { SettingsContext } from "./context/settings-context";

function App() {
  const [hideAmounts, setHideAmounts] = React.useState(false);

  const toggleHideAmounts = React.useCallback(
    () => setHideAmounts((v) => !v),
    []
  );

  return (
    <SettingsContext.Provider
      value={{
        hideAmounts,
        toggleHideAmounts,
      }}
    >
      <Navbar />
      <Account />
    </SettingsContext.Provider>
  );
}

export default App;
