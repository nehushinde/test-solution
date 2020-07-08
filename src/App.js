import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
