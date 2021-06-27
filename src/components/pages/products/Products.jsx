import React from "react";
import { Col, Row, Alert, Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  return (
    <Container>
      {status === "loading" && (
        <Spinner animation="border" role="status" className="rose-spinner" />
      )}
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
          <Col key={index} md={6} sm={12} lg={4} xs={12}>
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
