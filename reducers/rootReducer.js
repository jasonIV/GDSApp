import { combineReducers } from "redux";
import auth from "./authReducer"
import dashboard from "./dashboardReducer";
import baydin from "./baydinReducer";

export default combineReducers({
  auth,
  dashboard,
  baydin,
})
