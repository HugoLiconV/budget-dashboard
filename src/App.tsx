import React from "react";
import { Switch } from "react-router-dom";
import Home from "pages/home";
import Accounts from "pages/accounts";
import CreateRecord from "pages/create-record";
import BottomBar from "components/bottom-bar";
import { Route } from "react-router-dom";
import { useAccountsQuery } from "hooks";
import "./App.css";

const AuthenticatedApp = () => {
  useAccountsQuery();
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accounts" exact component={Accounts} />
        <Route path="/create-record" exact component={CreateRecord} />
      </Switch>
      <BottomBar />
    </>
  );
};

export default AuthenticatedApp;
