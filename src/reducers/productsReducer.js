import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  INIT_STATUS,
  SET_STATUS_LOADING,
  DELETE_PRODUCT,
} from "../constants/products";
const initialState = {
  status: "",
  products: [],
};
const productsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
export default productsReducer;
