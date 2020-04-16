import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
