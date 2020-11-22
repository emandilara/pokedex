const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const pokemonName = action.payload && action.payload.name;
      let pokemonToBeAdded = {};
      pokemonToBeAdded[pokemonName]  = action.payload

      return {
        ...state,
        myPokemonList: {...state.myPokemonList, ...pokemonToBeAdded}
      };
    case 'REMOVE':
      const pokemonToBeRemoved = action.payload;
      delete state.myPokemonList[pokemonToBeRemoved];
      return {
        ...state
      };
    default:
      return state;
  }
};

export default Reducer;