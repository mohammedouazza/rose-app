import React, { useEffect } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { getProductsCollection } from "../../../back-end/poducts";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

function Products({ status, products, getProducts }) {
  console.log(products);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Container>
      {status === "loading" && <p>Loading...</p>}
      <Row>
        {!products.length && (
          <Col className="mt-2">
            <Alert variant="info">
              Aucun produit à afficher, veuillez en ajouter{" "}
              <Link to="/products/create">Ici</Link>
            </Alert>
          </Col>
        )}
        {products.map((product, index) => (
          <Col key={index} xs={3}>
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.products.status,
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: async () => await getProductsCollection(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
