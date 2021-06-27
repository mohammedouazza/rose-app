import firebase from "firebase";
// Required for side-effects
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const loginToFirebase = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logoutFromFirebase = async () => {
  const result = await auth.signOut();
  console.log(result);
  return result
};
