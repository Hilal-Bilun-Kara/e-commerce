import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/index";

export const myStore = createStore(reducer);
