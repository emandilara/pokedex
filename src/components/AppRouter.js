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

  const [pokemonObjectList, setPokemonObjectList] = React.useState({});
  const [pokemonList, setPokemonList] = React.useState([]);

  // Add a pokemon to the list, if it did not already exist
  const addToPokemonList = (addedPokemon) => {
    const name = addedPokemon.name;
    !pokemonObjectList[name] && setPokemonObjectList({ ...pokemonObjectList, [name]: true });
    !pokemonObjectList[name] && setPokemonList([...pokemonList, name]);
  }

  let data;
  React.useEffect(() => {
    data = pokemonList;
  }, [pokemonList]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex addToPokemonList={addToPokemonList} />
        </Route>
        <Route path="/my-pokemon">
          <MyPokemon data={data} />
        </Route>
      </Switch>
    </Router>
  );
}