import React, { Fragment } from 'react';
import { Context } from './store/Store';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { mockMyPokemonData } from './resources/mockData';

const MyPokemon = () => {

  // Use global state
  const [myPokemonList, setMyPokemonList] = React.useContext(Context);

  // The global state does not work properly - it is not persistent when we navigate in the page
  // I am using mock data just to visualize the list
  const [listItems, setListItems] = React.useState(mockMyPokemonData);
  const removeFromPokemonList = (name) => {
    const updatedListItems = listItems.filter(pokemon => pokemon.name !== name);
    setListItems(updatedListItems);

    // Updating global state
    setMyPokemonList({ type: 'REMOVE', payload: name });
  }

  return (
    <Fragment>
      <h2>My Pokemon</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Remove from my list</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((pokemon, index) =>
            <tr key={index.toString()}>
              <td>
                <Button variant="outline-dark">
                  {pokemon.name}
                </Button>
              </td>
              <td>
                <Button variant="dark" onClick={() => removeFromPokemonList(pokemon.name)}>-</Button>{' '}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default MyPokemon;