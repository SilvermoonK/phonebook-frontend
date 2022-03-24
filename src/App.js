import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // Needed for the correct rendering of the styles
import { Container, Row } from "react-bootstrap"; // Components to handle the style
import { useAuth0 } from "@auth0/auth0-react"; // Auth0 custom hook

import LoadingSpinner from "./components/commons/LoadingSpinner"; //Loading Component
import { AuthNav, ProtectedRoute } from "./components/auth0"; //Components with Authentication
import { Home, ContactList } from "./views"; //All views needed for the app

function App() {
  const { isLoading } = useAuth0(); // Loading status from Auth0 hook.

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <Row>
        <AuthNav />
      </Row>
      <Row>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="contactList" component={ContactList} />
        </Switch>
      </Row>
    </Container>
  );
}

export default App;
