import { SET_LOGIN, SET_LOGOUT } from "../constants/admin";
const initialState = {
  loggedIn: false,
};
const loginReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case SET_LOGIN:
      state.loggedIn = true;
      return state;
    case SET_LOGOUT:
      state.loggedIn = false;
      return state;
    default:
      return state;
  }
};
export default loginReducer;
