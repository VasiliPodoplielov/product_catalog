import {REGISTRATION_SUCCESSFUL, RESET_REGISTRATION_RESULT, SET_CURRENT_USER, SET_ERROR_TEXT} from "./authConstants";

const initialState = {
  registrationSuccessful: false,
  errorMessage: '',
  userEmail: ''
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESSFUL:
      return {...state, registrationSuccessful: true};
    case RESET_REGISTRATION_RESULT:
      return {...state, registrationSuccessful: false, errorMessage: ''};
    case SET_ERROR_TEXT:
      return {...state, errorMessage: action.errorMessage};
    case SET_CURRENT_USER:
      return {...state, userEmail: action.userEmail};
    default:
      return state;
  }
}