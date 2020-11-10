import React, { createContext, useReducer } from "react";
import Reducer from './Reducer'
import { mockMyPokemonData } from '../resources/mockData';
 
const initialState = {
  myPokemonList: mockMyPokemonData
};

const Store = ({ children }) => {
  const [myPokemonList, setMyPokemonList] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[myPokemonList, setMyPokemonList]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;