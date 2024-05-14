import axios from "axios";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

export const fetchRolesIfNeeded = (id) => (dispatch, getState) => {
  const { client } = getState();

  // Eğer roller zaten mevcutsa, isteği yapmamıza gerek yok
  if (client.roles.length > 0) {
    return;
  }

  dispatch({ type: FETCH_ROLES_REQUEST });
  axios
    .get("https://workintech-fe-ecommerce.onrender.com/" + id)
    .then((response) =>
      dispatch({ type: FETCH_ROLES_SUCCESS, roles: response.data })
    )
    .catch((error) => dispatch({ type: FETCH_ROLES_FAILURE, error }));
};
