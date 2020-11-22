import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Pokedex from './Pokedex';
import MyPokemon from './MyPokemon';
import './styles/AppNavigation.css';

function AppNavigation() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Pokedex</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/" className="navLink">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/pokedex" className="navLink">Pokedex</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/my-pokemon" className="navLink">My Pokemon</Link>
        </Nav.Link>        
        </Nav>
      </Navbar>

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

export default AppNavigation;