import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const MyPokemon = (props) => {
  // const { data } = { ...props };

  const data = [{ name: "foo" }, { name: "bar" }]
  const [listItems, setListItems] = React.useState(data);

  const removeFromPokemonList = (name) => {
    const updatedListItems = listItems.filter(pokemon => pokemon.name !== name);
    setListItems(updatedListItems);
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