import React from "react";
import Navbar from "components/navbar";
import { SettingsContext } from "context/settings-context";
import { Switch } from "react-router-dom";
import ProtectedRoute from "auth/protected-route";
import Account from "components/account";

const AuthenticatedApp: React.FC = () => {
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
      <Switch>
        <ProtectedRoute path="/" exact component={Account} />
      </Switch>
    </SettingsContext.Provider>
  );
};

export default AuthenticatedApp;
