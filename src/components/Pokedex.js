import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loading from './Loading';
import PokemonInfo from './PokemonInfo';

class Pokedex extends Component {
  
  state = {
    pokemons: [],
    pokemonsFetched: false,
    showingPokemonInfo: false
  }

  // Filtering the pokemon list by name or number
  filterPokemon = (event) => {
    const filterValue = event && event.target && event.target.value.toLowerCase();
    this.setState({
      pokemons: this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filterValue) || pokemon.number === filterValue)
    });
  }

  extractPokemonNumber = (url) => {
    // This Regexp is to match the pokemon number
    // However it also matches the version of the API - it can be improved
    const numberPattern = /\d+/g;
    const matches = url.match(numberPattern);
    return matches[1];
  }

  addToPokemonList = (pokemon) => {
    this.props.addToPokemonList(pokemon);
  }

  showPokemonInfo = (pokemon) => {
    this.setState({ ...this.state, showingPokemonInfo: true, pokemonInfo: pokemon });
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        const data = res && res.data.results;
        const pokemons = data.map(pokemon => { return { ...pokemon, number: this.extractPokemonNumber(pokemon.url) } });
        this.setState({ pokemons, pokemonsFetched: true });
      })
  }

  render() {
    return (
      <Fragment>
        <h2>Pokedex - Gotta catch'em all!</h2>
        <Container fluid>
          <Row>
            <Col xs={6} md={6}>
              {!this.state.pokemonsFetched && <Loading />}
              {this.state.pokemonsFetched &&
                <Fragment>                  
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text"
                        placeholder="Search for a pokemon"
                        onChange={this.filterPokemon}
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
                      {this.state.pokemons.map((pokemon, index) =>
                        <tr key={index.toString()}>
                          <td>{pokemon.number}</td>
                          <td>
                            <Button variant="outline-dark" onClick={() => this.showPokemonInfo(pokemon)}>
                              {pokemon.name}
                            </Button>
                          </td>
                          <td>
                            <Button variant="dark" onClick={() => this.addToPokemonList(pokemon)}>+</Button>{' '}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Fragment>}
            </Col>
            <Col xs={6} md={6}>
              {!!this.state.showingPokemonInfo && <PokemonInfo about={this.state.pokemonInfo} />}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Pokedex;