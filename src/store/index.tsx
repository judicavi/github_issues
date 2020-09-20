import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import issuesReducer from "./reducers/issues.reducer";
import { IIssuesState } from "./actions/types";
import { ObservableInput } from "rxjs";

export function NewStore(
  reducer
): Store<IIssuesState> & ObservableInput<IIssuesState> {
  return createStore(reducer, composeWithDevTools());
}

export type StoreType = ReturnType<typeof NewStore>;

/*const store:Store<IIssuesState> = createStore(issuesReducer, composeWithDevTools());

export default store;*/
