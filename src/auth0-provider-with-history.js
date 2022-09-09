import React from "react";
import { useHistory } from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";

// Taken from https://www.youtube.com/watch?v=1rgeO_EbSGg, note that this is where we take in our
// information from the .env file

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}`}
      onRedirectCallback={onRedirectCallback}
      audience={`https://${domain}/api/v2/`}
      scope={"read:current_user"}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
