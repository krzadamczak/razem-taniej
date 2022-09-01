import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const history = useNavigate();

    const onRedirectCallback = (appState) => {
        console.log({ appState });
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            cacheLocation='localstorage'>
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
