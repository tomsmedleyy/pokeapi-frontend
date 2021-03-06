import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { PokemonListProvider } from "context/pokemonListContext";
import { ApplicationRoutes } from "features/App";
import reportWebVitals from "./reportWebVitals";

import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonListProvider>
        <ApplicationRoutes />
      </PokemonListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
