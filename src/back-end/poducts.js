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
export const getProductsCollection = async () => {
  const products = await productsRef.get();
  let newProducts = await mapProducts(products);
  return newProducts;
};
export const addProductToCollection = async (newProduct) => {
  const newProductCollection = {
    name: newProduct.name,
    price: newProduct.price,
    type: newProduct.type,
  };
  let product = await productsRef.add(newProductCollection);
  uploadImage(product.id, newProduct.img);
  return product;
};

export const deleteProductFromCollection = (product) => {
  return productsRef
    .doc(product.id)
    .delete()
    .then(() => {
      const storage = firebase.storage().ref();
      return storage.child("products/" + product.id + ".jpg").delete();
    });
};
