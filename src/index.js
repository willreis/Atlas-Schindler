import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Routes,Switch } from "react-router-dom";
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";
import './index.css';
import App from './App';
import Login from "../src/pages/Login/Login"
const hist = createBrowserHistory();


ReactDOM.render(
  <Router location={hist.location} history={hist}>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);