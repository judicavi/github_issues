import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addSideEffectsToStore } from "./services";
import { NewStore, StoreType } from "./store";
import issuesReducer from "./store/reducers/issues.reducer";
import "./index.css";
import App from "./App";

// Create store
const store: StoreType = NewStore(issuesReducer);

// Add side effects listener to the store
addSideEffectsToStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
