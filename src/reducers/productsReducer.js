import RoseImg from "../images/rose.jpg";
const initialState = {
  products: [
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
    { name: "Rose originale", price: 20, type: "Eau", img: RoseImg },
  ],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state.products;
    default:
      return state;
  }
};
export default productsReducer;
