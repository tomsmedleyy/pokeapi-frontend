import React from "react";

import { PokemonType } from "types/pokemon";

interface TypesProps {
  pokemon: PokemonType;
}

export const Types: React.FC<TypesProps> = ({ pokemon }) => {
  return (
    <div className="mt-2 flex gap-2 flex-no-wrap">
      {pokemon.types.map((item, key) => (
        <p
          key={key}
          className={`capitalize px-4 pt-2 pb-1 rounded-full ${
            pokemon.color === "white" ? "bg-black/10" : "text-white bg-white/10"
          }`}
        >
          {item.type.name}
        </p>
      ))}
    </div>
  );
};
