import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCardReducers";
import clientReducer from "./reducers/clientReducer";

import roleReducer from "./reducers/roleReducer";
import { thunk } from "redux-thunk";
import { fetchRolesIfNeeded } from "./actions/roleAction";

export const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
  role: roleReducer,
});
export const myStore = createStore(reducers, applyMiddleware(thunk));
// İhtiyaç halinde rolleri alma işlemini başlatmak için örnek bir örnek
myStore.dispatch(fetchRolesIfNeeded());
