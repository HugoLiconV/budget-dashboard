import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider, AppState } from "@auth0/auth0-react";
import config from "config";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithHistory: React.FC<Props> = ({ children }: Props) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={config.authDomain}
      clientId={config.authClientId}
      redirectUri={window.location.origin}
      audience={config.authAudience}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
