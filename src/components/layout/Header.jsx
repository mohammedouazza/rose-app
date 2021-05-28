import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.jpg";

function Header() {
  let location = useLocation();
  const isProductsPage = location.pathname === "/products";
  return (
    <Navbar className="app-header" fixed="top" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Rose"
            width={70}
            height={50}
            style={{ borderRadius: 25 }}
          />
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
              className={"nav-link " + (isProductsPage ? "active" : "")}
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
            {isProductsPage && (
              <Link
                to="/products/create"
                className="nav-link add-product btn btn-outline-light"
              >
                Ajouter un produit
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
