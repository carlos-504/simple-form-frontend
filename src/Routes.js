import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Listar from "./pages/Listar";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listar" exact component={Listar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
