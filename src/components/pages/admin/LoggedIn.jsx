import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoggedIn() {
  return (
    <Container className="p-2">
      <Alert variant="success">
        Vous êtes connecté avec succès!{" "}
        <Link to="/products">Commencer à administrer</Link>
      </Alert>
    </Container>
  );
}

export default LoggedIn;
