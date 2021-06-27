import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productsReducer from "./productsReducer";
export default combineReducers({
  admin: loginReducer,
  products: productsReducer,
});
