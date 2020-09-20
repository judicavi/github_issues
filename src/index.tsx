import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addSideEffectsToStore } from "./services";
import { NewStore, StoreType } from "./store";
import issuesReducer from "./store/reducers/issues.reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
