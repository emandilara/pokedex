import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavigation() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/pokedex">Pokedex</Nav.Link>
        <Nav.Link href="/my-pokemon">My Pokemon</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavigation;