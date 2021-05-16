import React from "react";
import { Button, Card } from "react-bootstrap";
import PlusIcon from "../../../images/plus-icon.svg.png";

function AddProduct() {
  return (
    <Card style={{ width: "18rem" }} className="mt-2 mb-2">
      <Card.Img
        variant="top"
        src={PlusIcon}
        title="Ajouter un produit"
        style={{ cursor: "pointer" }}
      />
      <Card.Body>
        <Card.Title>Ajouter un produit</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Ajouter</Button>
      </Card.Body>
    </Card>
  );
}

export default AddProduct;
