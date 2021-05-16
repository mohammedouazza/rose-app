import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";
import PlusIcon from "../../../images/plus-icon.svg.png";

function Products({ products }) {
  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index}>
            <SingleProduct product={product} />
          </Col>
        ))}
        <Col>
          <SingleProduct
            product={{
              name: "Ajouter un produit",
              img: PlusIcon,
              prix: 0,
              type: "",
            }}
          />
        </Col>
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
