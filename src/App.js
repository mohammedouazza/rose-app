import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import firebase from "firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsCollection } from "./back-end/poducts";
import { useEffect } from "react";

import {
  INIT_STATUS,
  SET_PRODUCTS,
  SET_STATUS_LOADING,
} from "./constants/products";
import { SET_LOGIN } from "./constants/admin";

const auth = firebase.auth();

function App({ getProducts, setLoading, setLogin }) {
  const fetchProducts = async () => {
    setLoading();
    const products = await getProductsCollection();
    console.log("products", products);
    getProducts(products);
  };
  useEffect(() => {
    fetchProducts();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin();
      }
    });
  });
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: () => dispatch({ type: SET_STATUS_LOADING }),
    getProducts: (products) => {
      dispatch({ type: SET_PRODUCTS, payload: products });
      dispatch({ type: INIT_STATUS });
    },
    setLogin: () => dispatch({ type: SET_LOGIN }),
  };
};

export default connect(null, mapDispatchToProps)(App);
