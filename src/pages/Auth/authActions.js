import firebase from "./../../firebase";
import {REGISTRATION_SUCCESSFUL, RESET_REGISTRATION_RESULT, SET_CURRENT_USER, SET_ERROR_TEXT} from "./authConstants";

export function userAuth(email, password) {
  return dispatch => {
    dispatch(resetRegistrationResult);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        dispatch(registrationSuccessful());
      }).catch(function (error) {
        dispatch(setTextError(error.message));
        setTimeout(() => dispatch(resetRegistrationResult()), 4000);
      });
    });
  };
}

export function userRegistry(email, password) {
  return dispatch => {
    dispatch(resetRegistrationResult);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
          dispatch(registrationSuccessful());
          setTimeout(() => dispatch(resetRegistrationResult()), 4000);
        }
    ).catch(function (error) {
      dispatch(setTextError(error.message));
      setTimeout(() => dispatch(resetRegistrationResult()), 4000);
    });

  };
}

export function registrationSuccessful() {
  return {
    type: REGISTRATION_SUCCESSFUL
  }
}

export function resetRegistrationResult() {
  return {
    type: RESET_REGISTRATION_RESULT
  }
}

export function setTextError(errorMessage) {
  return {
    type: SET_ERROR_TEXT,
    errorMessage

  }
}

export function signOut() {
  return dispatch => {
    dispatch(resetRegistrationResult);
    firebase.auth().signOut();
    dispatch(setCurrentUser(''));
  }
}

export function setCurrentUser(userEmail) {
  return {
    type: SET_CURRENT_USER,
    userEmail
  }
}