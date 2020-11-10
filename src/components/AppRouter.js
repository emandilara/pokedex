import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Pokedex from './Pokedex';
import MyPokemon from './MyPokemon';

export default function AppRouter() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/my-pokemon">
          <MyPokemon />
        </Route>
      </Switch>
    </Router>
  );
}