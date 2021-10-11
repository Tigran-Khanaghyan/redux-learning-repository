import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import stepReducer from "./step";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  step: stepReducer
});

export default rootReducer