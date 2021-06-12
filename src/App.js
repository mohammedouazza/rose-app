import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsCollection } from "./back-end/poducts";
import { useEffect } from "react";
import {
  INIT_STATUS,
  SET_PRODUCTS,
  SET_STATUS_LOADING,
} from "./constants/products";
function App({ getProducts, setLoading }) {
  const fetchProducts = async () => {
    setLoading();
    const products = await getProductsCollection();
    console.log("products", products);
    getProducts(products);
  };
  useEffect(() => {
    fetchProducts();
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
  };
};

export default connect(null, mapDispatchToProps)(App);
