import { combineReducers } from "redux";
import clientReducer from "./clientReducers.js";

const reducers = combineReducers({
  client: clientReducer,
});

export default reducers;
