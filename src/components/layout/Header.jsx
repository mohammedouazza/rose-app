import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  console.log(location);
  return (
    <Navbar className="app-header" fixed="top" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Rose
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container text-center">
            <Link
              to="/"
              className={
                "nav-link " + (location.pathname === "/" ? "active" : "")
              }
            >
              Acceuil
            </Link>
            <Link
              to="/products"
              className={
                "nav-link " +
                (location.pathname === "/products" ? "active" : "")
              }
            >
              Produits
            </Link>
            <Link
              to="/contact"
              className={
                "nav-link " + (location.pathname === "/contact" ? "active" : "")
              }
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
