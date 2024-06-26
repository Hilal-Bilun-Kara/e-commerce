import {
  SET_USER,
  SET_ADDRESS_LIST,
  SET_CREDIT_CARDS,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/clientAction.js";

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ADDRESS_LIST:
      return { ...state, addressList: action.payload };
    case SET_CREDIT_CARDS:
      return { ...state, creditCards: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
