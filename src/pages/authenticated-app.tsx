import React from "react";
// import Navbar from "components/navbar";
import { SettingsContext } from "context/settings-context";
import { Switch } from "react-router-dom";
import ProtectedRoute from "auth/protected-route";
// import Account from "components/account";
import Home from "./home";
import Accounts from "./accounts";
import MonthlyExpenses from "./monthly-expenses";
import BottomBar from "components/bottom-bar";
import CreateRecord from "./create-record/index";

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
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/accounts" exact component={Accounts} />
        <ProtectedRoute
          path="/monthly-expenses"
          exact
          component={MonthlyExpenses}
        />
        <ProtectedRoute path="/create-record" exact component={CreateRecord} />
      </Switch>

      <BottomBar />
    </SettingsContext.Provider>
  );
};

export default AuthenticatedApp;
