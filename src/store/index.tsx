import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IIssuesState } from "./actions/types";
import { ObservableInput } from "rxjs";

export function NewStore(
  reducer
): Store<IIssuesState> & ObservableInput<IIssuesState> {
  return createStore(reducer, composeWithDevTools());
}

export type StoreType = ReturnType<typeof NewStore>;
