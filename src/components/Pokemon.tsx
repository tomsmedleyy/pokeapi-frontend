import React from "react";

import { PokemonType } from "types/pokemon";

interface PokemonProps {
  pokemon: PokemonType;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return <div className={`bg-${pokemon.color}-500`}>{pokemon.name}</div>;
};
