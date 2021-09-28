import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  INIT_STATUS,
  SET_STATUS_LOADING,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../constants/products";
const initialState = {
  status: "",
  products: [],
};
const productsReducer = (state = initialState, action) => {
  //console.log("action", action);
  switch (action.type) {
    case SET_PRODUCTS:
      state.products = action.payload;
      return state;
    case INIT_STATUS:
      state.status = "";
      return state;
    case SET_STATUS_LOADING:
      state.status = "loading";
      return state;
    case DELETE_PRODUCT:
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return state;
    case ADD_PRODUCT:
      state.status = "success";
      state.products.unshift(action.payload);
      return state;
    case EDIT_PRODUCT:
      //console.log("reducer", action.payload);
      state.status = "success";
      state.products = state.products.map((p) => {
        if (p.id === action.payload.id) {
          p.name = action.payload.name;
          p.type = action.payload.type;
          p.price = action.payload.price;
          p.img = action.payload.img;
        }
        return p;
      });
      return state;
    default:
      return state;
  }
};
export default productsReducer;
