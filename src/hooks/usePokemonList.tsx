import React from "react";

import { PokemonListContext } from "context/pokemonListContext";

export const usePokemonListContext = () => {
  const context = React.useContext(PokemonListContext);
  if (!context) throw new Error("Context missing");
  return context;
};

export const usePokemonList = () => {
  const { list, updateList } = usePokemonListContext();
  return { list, updateList };
};
