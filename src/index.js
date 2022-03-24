import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Auth0ProviderWithHistory from "./components/auth0/Auth0ProviderWithHistory";

import App from "./App";

const domain = process.env.REACT_APP_PHONEBOOK_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_PHONEBOOK_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
