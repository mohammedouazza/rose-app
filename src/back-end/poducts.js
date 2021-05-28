import {
  ADD_PRODUCT,
  INIT_STATUS,
  SET_PRODUCTS,
  SET_STATUS_LOADING,
} from "../constants/products";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const productsRef = db.collection("products");

const uploadImage = async (productId, img) => {
  const storage = firebase.storage().ref();
  const productImg = await storage
    .child("products/" + productId + ".jpg")
    .put(img);
  console.log("img uploaded", productImg);
  return productImg;
};

const mapProducts = async (products) => {
  const storage = firebase.storage().ref();
  let newProducts = [];
  products.forEach(async (doc) => {
    let productImg = await storage
      .child("products/" + doc.id + ".jpg")
      .getDownloadURL();
    newProducts.push({
      id: doc.id,
      ...doc.data(),
      img: productImg,
    });
  });
  return newProducts;
};
export const getProductsCollection = async (dispatch) => {
  dispatch({ type: SET_STATUS_LOADING });
  const products = await productsRef.get();
  let newProducts = await mapProducts(products);

  dispatch({ type: SET_PRODUCTS, payload: newProducts });
  dispatch({ type: INIT_STATUS });
};
export const addProductToCollection = async (dispatch, newProduct) => {
  const newProductCollection = {
    name: newProduct.name,
    price: newProduct.price,
    type: newProduct.type,
  };
  db.collection("products")
    .add(newProductCollection)
    .then((product) => {
      uploadImage(product.id, newProduct.img)
        .then((productImg) => {
          console.log("Document written with ID: ", product.id);
          dispatch({
            type: ADD_PRODUCT,
            payload: {
              id: product.id,
              ...newProductCollection,
              img: URL.createObjectURL(newProduct.img),
            },
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });
};
