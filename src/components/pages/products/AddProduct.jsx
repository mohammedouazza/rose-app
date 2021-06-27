import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  Image,
  Spinner,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCollection } from "../../../back-end/poducts";
import { ADD_PRODUCT } from "../../../constants/products";
import Img from "../../../images/rose.jpg";

function AddProduct({ storeProduct }) {
  const [showMessage, setShowMessage] = useState(false);
  const [productFileImg, setProductFileImg] = useState(null);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productImg, setProductImg] = useState(Img);
  const [productPrice, setProductPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const typeProducts = [
    { id: 1, name: "Eau" },
    { id: 2, name: "Huile" },
  ];

  const handleProductName = (e) => {
    hideMessage();
    const name = e.target.value;
    setProductName(name);
  };
  const handleProductType = (e) => {
    hideMessage();
    const type = e.target.value;
    setProductType(type);
  };
  const handleProductImg = (e) => {
    hideMessage();
    const [file] = e.target.files;
    if (file) {
      setProductFileImg(file);
      setProductImg(URL.createObjectURL(file));
    }
  };

  const handleProductPrice = (e) => {
    hideMessage();
    const price = parseFloat(e.target.value);
    setProductPrice(price);
  };
  const addProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      type: productType,
      price: productPrice,
      img: productFileImg,
    };
    setLoading(true);
    const product = await addProductToCollection(newProduct);
    console.log(product);
    storeProduct({ ...newProduct, id: product.id });
    initialiseProduct();
    setShowMessage(true);
    setLoading(false);
  };

  const hideMessage = () => {
    setShowMessage(false);
  };

  const initialiseProduct = () => {
    setProductName("");
    setProductType("");
    setProductPrice(0);
    setProductImg(Img);
  };
  return (
    <Container>
      <h1 className="mt-2 mb-4">Ajouter un produit</h1>
      {loading && (
        <Spinner animation="border" role="status" className="rose-spinner" />
      )}
      {showMessage && (
        <Alert variant="success">
          <Alert.Heading>
            Produit ajouté avec succès !{" "}
            <Link to="/products">Voir la liste ici</Link>
          </Alert.Heading>
        </Alert>
      )}
      <Form onSubmit={addProduct}>
        <Form.Group className="mb-2">
          <Form.Label>Nom du produit</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e) => handleProductName(e)}
            value={productName}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Type du produit</Form.Label>
          <Form.Control
            as="select"
            required
            onChange={(e) => handleProductType(e)}
          >
            {typeProducts.map((type) => (
              <option>{type.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            required
            type="number"
            style={{ width: 100 }}
            onChange={(e) => handleProductPrice(e)}
            value={productPrice}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.File
            required
            onChange={(e) => handleProductImg(e)}
            custom
            defaultValue={Img.src}
          />
          <Image
            src={productImg}
            rounded
            width={500}
            height={400}
            style={{ margin: 10 }}
          />
        </Form.Group>

        <Button
          variant="warning"
          className="mb-2"
          style={{ marginRight: 10 }}
          onClick={initialiseProduct}
        >
          Re-initialiser
        </Button>
        <Button variant="primary" type="submit" className="mb-2 send-button">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.products.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeProduct: (newProduct) => {
      return dispatch({
        type: ADD_PRODUCT,
        payload: {
          id: newProduct.id,
          ...newProduct,
          img: URL.createObjectURL(newProduct.img),
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
