import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();

export const productsRef = db.collection("products");
export const contactsRef = db.collection("contacts");
