import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import { Admin, Resource, ListGuesser, Login } from "react-admin";
import { createBrowserHistory as createHistory } from "history";

import CustomRoutes from "./CustomRoutes";

import drfProvider from "./dataProvider";
import { fetchUtils } from "ra-core";

import AuthProvider from "./ra-cognito";
import { UserPoolId, ClientId } from "./config.js";

import CustomLogin from "./CustomLogin";

const history = createHistory(); /* disable hashbang */

const fetchJson = (url, options = {}) => {
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = drfProvider(
  "https://jsonplaceholder.typicode.com",
  fetchJson
);
const App = () => {
  return (
    <Admin dataProvider={dataProvider} history={history} authProvider={AuthProvider({ UserPoolId, ClientId })} loginPage={CustomLogin}
      customRoutes={CustomRoutes}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

render(<App />, document.getElementById("root"));
