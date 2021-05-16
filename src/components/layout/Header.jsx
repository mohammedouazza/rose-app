import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="app-header" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container text-center">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#produits">Produits</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
