import firebase from "firebase";
import { productsRef } from "./firebaseDeps";

const uploadImage = async (productId, img) => {
  const storage = firebase.storage().ref();
  const productImg = await storage
    .child("products/" + productId + ".jpg")
    .put(img);
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
  //console.log(products);
  let newProducts = await mapProducts(products);
  //console.log(newProducts);
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

export const editProductToCollection = async (newProduct) => {
  //console.log(newProduct);
  let product = await productsRef
    .doc(newProduct.id)
    .set({ ...newProduct, img: newProduct.id + ".jpg" });
  uploadImage(newProduct.id, newProduct.img);
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
