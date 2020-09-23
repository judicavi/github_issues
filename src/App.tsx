import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import history from "./history";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
}

export default App;
