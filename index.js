import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import { Admin, Resource, ListGuesser } from "react-admin";
import { createBrowserHistory as createHistory } from "history";
import drfProvider from "./dataProvider";
import { fetchUtils } from "ra-core";

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
    <Admin dataProvider={dataProvider} history={history}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

render(<App />, document.getElementById("root"));
