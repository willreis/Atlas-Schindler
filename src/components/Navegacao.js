import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Param from "../components/Param";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";

function Navigation() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/param/:id">
          <Param />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Navigation;
