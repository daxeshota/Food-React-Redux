import { combineReducers } from "redux";
import { cartReducer } from "./Cart/CartReducer";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
