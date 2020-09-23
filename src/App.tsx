import React from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
}

export default App;
