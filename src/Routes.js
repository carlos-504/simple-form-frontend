import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Listar from "./pages/Listar";
import Editar from "./pages/Editar";
import Vizualizar from "./pages/Vizualizar";
import Erro404 from './pages/Erro404'

const NoMatchPage = () => {
  return <Erro404 />;
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listar" exact component={Listar} />
        <Route path="/editar/:id" exact component={Editar} />
        <Route path="/vizualizar/:id" exact component={Vizualizar} />
        <Route component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
