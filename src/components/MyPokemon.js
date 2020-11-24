import React, { Fragment } from 'react';
import { Context } from './store/Store';
import { extractPokemonNumber } from './resources/helperFunctions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PokemonInfo from './PokemonInfo';

const MyPokemon = () => {

  // Use global state
  const [myPokemonList, setMyPokemonList] = React.useContext(Context);
  
  // Initialise local state
  const [pokemonInfo, setPokemonInfo] = React.useState(undefined);
  const [showingPokemonInfo, setShowingPokemonInfo] = React.useState(false);
  
  let myPokemon = [];
  const myList = myPokemonList.myPokemonList;
  for(let key in myList) {
    myPokemon.push({ ...myList[key], number: extractPokemonNumber(myList[key].url) })
  }  
  
  const showPokemonInfo = (pokemon) => {
    setShowingPokemonInfo(true);
    setPokemonInfo(pokemon);
  }
  
  // Dispatch an action of type 'REMOVE' to update global state
  const removeFromPokemonList = (name) => {
    setMyPokemonList({ type: 'REMOVE', payload: name });
  }

  return (
    <Fragment>
      <h2>My Pokemon</h2>
      { myPokemon.length === 0 &&
        <Jumbotron>
          <h5>It seems like your pokemon list is empty...</h5>
          <h5>Go to the <a href='/pokedex'>Pokedex</a> tab to start adding pokemon to your list!</h5>
        </Jumbotron>
      }
      { myPokemon.length > 0 &&
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={8}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Remove from my list</th>
                  </tr>
                </thead>
                <tbody>
                  {myPokemon.map((pokemon, index) =>
                    <tr key={index.toString()}>
                      <td>{pokemon.number}</td>
                      <td>
                        <Button variant='outline-dark' onClick={() => showPokemonInfo(pokemon)}>
                          {pokemon.name}
                        </Button>
                      </td>
                      <td>
                        <Button variant='dark' onClick={() => removeFromPokemonList(pokemon.name)}>-</Button>{' '}
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
            <Col xs={12} md={4} lg={4}>
              {!!showingPokemonInfo && <PokemonInfo name={pokemonInfo.name} url={pokemonInfo.url} />}
            </Col>
          </Row>
        </Container>
      }
    </Fragment>
  )
}

export default MyPokemon;