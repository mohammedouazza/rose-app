import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutFromFirebase } from "../../back-end/admin";
import logo from "./logo.jpg";
import { SET_LOGOUT } from "../../constants/admin";
import { Power } from 'react-bootstrap-icons';

function Header({ setLogout }) {
  let location = useLocation();
  const isLoggedIn = useSelector((state) => state.admin.loggedIn);
  const isProductsPage = location.pathname === "/products";
  const logoutFun = () => {
    if(window.confirm("Etes-vous sûr de vouloir vous déconnecter ?")){
      logoutFromFirebase().then(() => {
        setLogout();
      });
    }
  };
  return (
    <Navbar className="app-header" fixed="top" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Association Rose
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
            {isLoggedIn && (
              <Link
                to="/products/create"
                className={
                  "nav-link " + (location.pathname === "/products/create" ? "active" : "")
                }
              >
                Ajouter un produit
              </Link>
            )}
            {isLoggedIn &&
              <Link to="#" className="nav-link float-right" onClick={logoutFun} title="Se déconnecter">
                <Power size={20}/>
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogout: () => dispatch({ type: SET_LOGOUT }),
  };
};
export default connect(null, mapDispatchToProps)(Header);
