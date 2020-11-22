import React, { Fragment } from 'react';
import { Context } from './store/Store';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loading from './Loading';
import PokemonInfo from './PokemonInfo';

const Pokedex = () => {

  // Initialise local state
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = React.useState([]);
  const [pokemonInfo, setPokemonInfo] = React.useState(undefined);
  const [pokemonsFetched, setPokemonsFetched] = React.useState(false);
  const [showingPokemonInfo, setShowingPokemonInfo] = React.useState(false);

  // Use global state
  const [myPokemonList, setMyPokemonList] = React.useContext(Context);

  // Filtering the pokemon list by name or number
  const filterPokemon = (event) => {
    const filterValue = event && event.target && event.target.value.toLowerCase();
    setPokemonsFiltered(
      pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filterValue) || pokemon.number === filterValue)
    );
  }

  const extractPokemonNumber = (url) => {
    // This Regexp is to match the pokemon number
    const numberPattern = /\/[0-9]+\//;
    const match = url.match(numberPattern);
    const number = match && match[0].replace(/\//g, '');
    return number;
  }

  const addToPokemonList = (pokemon) => {
    const myList = { ...myPokemonList.myPokemonList }
    if(!myList[pokemon.name]) {
      setMyPokemonList({type: 'ADD', payload: pokemon});
    }
  }

  const showPokemonInfo = (pokemon) => {
    setShowingPokemonInfo(true);
    setPokemonInfo(pokemon);
  }

  // Fetch data when component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => {
          const data = res && res.data.results;
          const pokemons = data.map(pokemon => { return { ...pokemon, number: extractPokemonNumber(pokemon.url) } });
          setPokemons(pokemons);
          setPokemonsFiltered(pokemons);
          setPokemonsFetched(true);
        })
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <h2>Pokedex - Gotta catch'em all!</h2>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} lg={8}>
            {!pokemonsFetched && <Loading />}
            {pokemonsFetched &&
              <Fragment>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='text'
                      placeholder='Search for a pokemon'
                      onChange={filterPokemon}
                    />
                  </Form.Group>
                </Form>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Add to my list</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemonsFiltered.map((pokemon, index) =>
                      <tr key={index.toString()}>
                        <td>{pokemon.number}</td>
                        <td>
                          <Button variant='outline-dark' onClick={() => showPokemonInfo(pokemon)}>
                            {pokemon.name}
                          </Button>
                        </td>
                        <td>
                          <Button variant='dark' onClick={() => addToPokemonList(pokemon)}>+</Button>{' '}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Fragment>}
          </Col>
          <Col xs={12} md={4} lg={4}>
            {!!showingPokemonInfo && <PokemonInfo name={pokemonInfo.name} url={pokemonInfo.url} />}
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Pokedex;