import {combineReducers} from "redux";
import {authReducer} from "./pages/Auth/authReducer";

export default combineReducers({
    authReducer: authReducer
})