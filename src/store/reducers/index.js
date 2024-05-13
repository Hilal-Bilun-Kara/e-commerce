import { combineReducers } from "redux";
import { clientReducers } from "./clientReducers.js";
import { productReducers } from "./productReducers.js";

const reducer = combineReducers({
  client: clientReducers,
  product: productReducers,
});

export default reducer;
