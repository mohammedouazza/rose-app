import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";
import AddProduct from "./AddProduct";

function Products({ products }) {
  return (
    <Container>
      <Row>
        <Col>
          <AddProduct />
        </Col>
        {products.map((product, index) => (
          <Col key={index}>
            <SingleProduct product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps, null)(Products);
