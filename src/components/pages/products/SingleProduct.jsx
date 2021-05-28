import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteProductFromCollection } from "../../../back-end/poducts";
import {
  DELETE_PRODUCT,
  INIT_STATUS,
  SET_STATUS_LOADING,
} from "../../../constants/products";

function SingleProduct({ product, deletePrductStore }) {
  const location = useLocation();
  const goToProduct = () => {
    if (product.id === "add") {
      location.pathname = "/products/create";
    }
  };
  const deleteProduct = () => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer ce produit ?")) {
      deletePrductStore(product);
    }
  };
  return (
    <Card style={{ width: "18rem" }} className="mt-2 mb-2">
      <Card.Img
        variant="top"
        src={product.img}
        title={`Prix : ${product.price}, type : ${product.type}`}
        style={{ cursor: "pointer", width: 286, height: 286 }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        {product.price && (
          <Card.Text>
            <span>
              Prix : <strong>{product.price}</strong>
            </span>
            <br />
            <span>
              Type : <strong>{product.type}</strong>
            </span>
          </Card.Text>
        )}
        <Button variant="primary" onClick={goToProduct}>
          {product.price ? "Commender" : "Ajouter"}
        </Button>
        <Button
          variant="danger"
          onClick={deleteProduct}
          style={{ marginLeft: 10 }}
        >
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePrductStore: (product) => {
      dispatch({ type: SET_STATUS_LOADING });
      deleteProductFromCollection(product).then(() => {
        dispatch({ type: DELETE_PRODUCT, payload: product });
        dispatch({ type: INIT_STATUS });
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(SingleProduct);
