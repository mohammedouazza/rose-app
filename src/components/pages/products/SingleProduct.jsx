import React from "react";
import { Button, Card } from "react-bootstrap";

function SingleProduct({ product }) {
  return (
    <Card style={{ width: "18rem" }} className="mt-2 mb-2">
      <Card.Img
        variant="top"
        src={product.img}
        title={`Prix : ${product.price}, type : ${product.type}`}
        style={{ cursor: "pointer" }}
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
        <Button variant="primary">
          {product.price ? "Commender" : "Ajouter"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;
