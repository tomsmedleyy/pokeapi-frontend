import React from "react";

import { PokemonType } from "types/pokemon";

interface PokemonProps {
  pokemon: PokemonType;
}

export const MovesTab: React.FC<PokemonProps> = ({ pokemon }) => {
  const moves = pokemon.moves.map((move) => move.move.name.replace(/-/g, " "));

  return (
    <div className="flex flex-wrap gap-4">
      {moves.map((move, key) => (
        <div
          key={key}
          className="inline px-4 pt-2 pb-1 rounded-full text-blue-500 bg-blue-500/10 capitalize"
        >
          {move}
        </div>
      ))}
    </div>
  );
};
