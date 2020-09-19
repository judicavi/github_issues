import { combineReducers } from "redux";
import issuesReducer from "./issues.reducer";

const mainReducer = combineReducers({
  issuesReducer,
});

export default mainReducer;
