import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SingleProduct({ product }) {
  const location = useLocation();
  const goToProduct = () => {
    if (product.id === "add") {
      location.pathname = "/products/create";
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
            <p>
              Prix : <strong>{product.price}</strong>
            </p>
            <p>
              Type : <strong>{product.type}</strong>
            </p>
          </Card.Text>
        )}
        <Button variant="primary" onClick={goToProduct}>
          {product.price ? "Commender" : "Ajouter"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;
