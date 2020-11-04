import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Listar from "./pages/Listar";
import Editar from "./pages/Editar"
import Vizualizar from "./pages/Vizualizar"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listar" exact component={Listar} />
        <Route path="/editar/:id" exact component={Editar} />
        <Route path="/vizualizar/:id" exact component={Vizualizar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
