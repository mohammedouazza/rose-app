import React, { useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { getProductsCollection } from "../../../back-end/poducts";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import {
  INIT_STATUS,
  SET_PRODUCTS,
  SET_STATUS_LOADING,
} from "../../../constants/products";

const Products = ({ status, products, getProducts }) => {
  useEffect(() => {
    getProducts();
  });
  return (
    <>
      {status === "loading" && <Alert>Loading...</Alert>}
      <Row>
        {!products.length && (
          <Col className="mt-2">
            <Alert variant="info">
              Aucun produit à afficher, veuillez en ajouter
              <Link to="/products/create">Ici</Link>
            </Alert>
          </Col>
        )}
        {products.map((product, index) => (
          <Col key={index} md={4} lg={3} xs={12}>
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.products.status,
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: SET_STATUS_LOADING });
      getProductsCollection().then((products) => {
        dispatch({ type: SET_PRODUCTS, payload: products });
        dispatch({ type: INIT_STATUS });
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
