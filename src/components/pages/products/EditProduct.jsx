import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  Image,
  Spinner,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editProductToCollection } from "../../../back-end/poducts";
import { EDIT_PRODUCT } from "../../../constants/products";
import Img from "../../../images/rose.jpg";

function EditProduct({ products, updateProduct }) {
  const history = useHistory();
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!product) {
      return history.push("/products");
    }
  });

  const [showMessage, setShowMessage] = useState(false);
  const [productFileImg, setProductFileImg] = useState(null);
  const [productName, setProductName] = useState(
    (product && product.name) || ""
  );
  const [productType, setProductType] = useState(
    (product && product.type) || ""
  );
  const [productImg, setProductImg] = useState((product && product.img) || "");
  const [productPrice, setProductPrice] = useState(
    (product && product.price) || 0
  );
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
  const editProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      id: product.id,
      name: productName,
      type: productType,
      price: productPrice,
      img: productFileImg || product.img,
    };
    setLoading(true);
    await editProductToCollection(newProduct);
    updateProduct({
      ...newProduct,
      img:
        (productFileImg && URL.createObjectURL(productFileImg)) || product.img,
    });
    setShowMessage(true);
    setLoading(false);
  };

  const hideMessage = () => {
    setShowMessage(false);
  };

  const initialiseProduct = () => {
    setProductName(product.name);
    setProductType(product.type);
    setProductPrice(product.price);
    setProductImg(product.img);
  };
  return (
    <Container>
      <h1 className="mt-2 mb-4">Modifier un produit</h1>
      {loading && (
        <Spinner animation="border" role="status" className="rose-spinner" />
      )}
      {showMessage && (
        <Alert variant="success">
          <Alert.Heading>
            Produit modifié avec succès !{" "}
            <Link to="/products">Voir la liste ici</Link>
          </Alert.Heading>
        </Alert>
      )}
      <Form onSubmit={editProduct}>
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
            required
            type="text"
            onChange={(e) => handleProductType(e)}
            value={productType}
          />
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
          Modifier
        </Button>
      </Form>
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
    updateProduct: (newProduct) =>
      dispatch({
        type: EDIT_PRODUCT,
        payload: newProduct,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
