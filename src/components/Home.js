import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
  return (
    <Jumbotron>
      <h2>Welcome to Pokedex!</h2>
      <br />
      <h5>Browse your favourite pokemon and make your own list :)</h5>
      <br />
      <h5>Navigate to the <a href='/pokedex'>Pokedex</a> tab to start browsing.</h5>
      <h5>You can click on the name of a Pokemon to display its details.</h5>
      <h5>You can also add a Pokemon to your own list!</h5>
    </Jumbotron>
  );
}

export default Home;