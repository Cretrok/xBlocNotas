import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact patch="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;