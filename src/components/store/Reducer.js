const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            console.log('previous pokemon in my list:', state.myPokemonList);
            return {
                ...state,
                myPokemonList: [...state.myPokemonList, action.payload]
            };
        case 'REMOVE':
            console.log('removing from my pokemon:', action.payload);
            return {
                ...state,
                myPokemonList: state.myPokemonList.filter(pokemon => pokemon.name !== action.payload)
            };
        default:
            return state;
    }
};

export default Reducer;