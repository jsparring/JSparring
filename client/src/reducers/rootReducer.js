import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import battleReducer from "./battleReducer";

export const rootReducer = combineReducers({
  battleReducer,
  inputReducer
});
