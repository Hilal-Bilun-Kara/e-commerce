import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
} from "../actions/roleAction.js";

const initialState = {
  roles: [], // Rol bilgilerini tutacak olan state
  isLoading: false, // İstek yüklenirken true, tamamlandığında false olacak
  error: null, // İstek sırasında oluşabilecek hataları tutacak olan state
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null, // Yeni bir istek başlatıldığında önceki hataları temizle
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        roles: action.roles, // Başarılı olduğunda rolleri güncelle
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error, // Hata durumunda hatayı güncelle
      };
    default:
      return state;
  }
};

export default roleReducer;
