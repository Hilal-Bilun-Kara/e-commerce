import { combineReducers, legacy_createStore as createStore } from "redux";

import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCardReducers";
import clientReducer from "./reducers/clientReducer";

import roleReducer from "./reducers/roleReducer";

export const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
  role: roleReducer,
});
export const myStore = createStore(reducers);
