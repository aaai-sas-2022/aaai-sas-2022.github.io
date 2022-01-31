import "assets/scss/material-kit-react.scss?v=1.9.0";
import { createBrowserHistory } from "history";
import "override.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
