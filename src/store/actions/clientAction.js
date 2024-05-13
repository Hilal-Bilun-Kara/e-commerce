const SET_USER = "SET_USER";
const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
const SET_ROLES = "SET_ROLES";
const SET_THEME = "SET_THEME";
const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setCreditCards = (creditCards) => ({
  type: SET_CREDIT_CARDS,
  payload: creditCards,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
