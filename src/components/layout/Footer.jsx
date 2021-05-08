import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const date = new Date();
  return (
    <div className="app-footer">
      <Container className="text-center fs-5">
        Association rose, tous droits réservés @{date.getFullYear()}
      </Container>
    </div>
  );
}

export default Footer;
