import React, { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductFromCollection } from "../../../back-end/poducts";
import { DELETE_PRODUCT } from "../../../constants/products";
import { Pencil, Trash } from 'react-bootstrap-icons';

function SingleProduct({ product, deletePrductStore }) {
  //const location = useLocation();
  const [loading, setLoading] = useState(false);
  /*const goToProduct = () => {
    if (product.id === "add") {
      location.pathname = "/products/create";
    }
  };*/
  const isLoggedIn = useSelector(state => state.admin.loggedIn);
  const deleteProduct = async () => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer ce produit ?")) {
      setLoading(true);
      await deleteProductFromCollection(product);
      deletePrductStore(product);
      setLoading(false);
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
            {loading && (
              <>
                <Spinner
                  animation="border"
                  role="status"
                  className="rose-spinner"
                />
                <br />
              </>
            )}

            <span>
              Prix : <strong>{product.price}</strong>
            </span>
            <br />
            <span>
              Type : <strong>{product.type}</strong>
            </span>
          </Card.Text>
        )}
        {isLoggedIn && <><Link to={"/products/edit/" + product.id}>
          <Button variant="warning" style={{ marginLeft: 10 }}>
            <Pencil />
          </Button>
        </Link>
        <Button
          variant="danger"
          onClick={deleteProduct}
          style={{ marginLeft: 10 }}
        >
          <Trash />
        </Button></> }
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePrductStore: (product) => {
      return dispatch({ type: DELETE_PRODUCT, payload: product });
    },
  };
};
export default connect(null, mapDispatchToProps)(SingleProduct);
