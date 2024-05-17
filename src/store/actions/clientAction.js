import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";

export const SET_USER = "SET_USER";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

const api = axiosInstance();

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

export const actionRoles = () => (dispatch) => {
  api
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => console.log(err));
};

//Fonksiyon, kullanıcı bilgilerini ve bir yönlendirme işlevini alır ve bu bilgileri kullanarak bir POST isteği gönderir.

export const userLogin = (formData, navigate) => (dispatch) => {
  api
    .post("/login", formData)
    .then((res) => {
      toast.success("Login Success!", { position: "top-right" });
      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
      }
      dispatch(setUser(res.data));
      setTimeout(() => navigate(-1), 2000); // Eğer önceki bir sayfa varsa, kullanıcıyı oraya yönlendirir
    })
    .catch((err) => {
      console.log(err);
      toast.error("Geçersiz e-posta veya !", {
        position: "top-right",
      });
    });
};
