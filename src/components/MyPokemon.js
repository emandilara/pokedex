import React, { Fragment } from 'react';
import { Context } from './store/Store';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const MyPokemon = () => {

  // Use global state
  const [myPokemonList, setMyPokemonList] = React.useContext(Context);
  const myPokemon = Object.keys(myPokemonList.myPokemonList);

  const removeFromPokemonList = (name) => {
    // Updating global state
    setMyPokemonList({ type: 'REMOVE', payload: name });
  }

  return (
    <Fragment>
      <h2>My Pokemon</h2>
      { myPokemon.length===0 &&
        <Jumbotron>
          <h4>It seems like your pokemon list is empty...</h4>
          <h4>Go to the "Pokedex" tab to start adding pokemon to your list!</h4>
        </Jumbotron>
      }
      { myPokemon.length>0 &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Remove from my list</th>
            </tr>
          </thead>
          <tbody>
              { myPokemon.map((pokemon, index) =>
                <tr key={index.toString()}>
                  <td>
                    <Button variant="outline-dark">
                      {pokemon}
                    </Button>
                  </td>
                  <td>
                    <Button variant="dark" onClick={() => removeFromPokemonList(pokemon)}>-</Button>{' '}
                  </td>
                </tr>
              )}
          </tbody>
        </Table>
      }
    </Fragment>
  )
}

export default MyPokemon;