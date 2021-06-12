import { combineReducers } from "redux";
import inputReducer from "./autocompleteInput/inputReducer";
import aUsersReducer from "./autocompleteUsers/aUsersReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  autocompleteInput: inputReducer,
  userReducer,
  aUsersReducer,
});
