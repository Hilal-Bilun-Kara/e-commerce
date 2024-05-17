import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCardReducer";
import clientReducer from "./reducers/clientReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
});
export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
// İhtiyaç halinde rolleri alma işlemini başlatmak için örnek bir örnek
