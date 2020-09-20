import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import issuesReducer from "./reducers/issues.reducer";

const store = createStore(issuesReducer, composeWithDevTools());

export default store;
