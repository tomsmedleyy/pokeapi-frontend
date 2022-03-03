import React from "react";
import { Link } from "react-router-dom";

import { Types } from "components/Types";

import { PokemonType } from "types/pokemon";

interface PokemonProps {
  pokemon: PokemonType;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  const pokemonColour = `p-bg-${pokemon.color}`;
  return (
    <Link to={`/${pokemon.name}`}>
      <div
        className={`p-transition w-full drop-shadow-lg rounded-xl p-4 ${pokemonColour} hover:shadow-xl hover:-translate-y-1`}
      >
        <div className="absolute -top-[20px] right-4 bg-white rounded-full px-3 pt-2 pb-1 text-sm drop-shadow-md font-bold">
          #{String(pokemon.id).padStart(3, "0")}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="p-2">
            <p
              className={`capitalize text-xl font-bold ${
                pokemon.color === "white" ? "" : "text-white"
              }`}
            >
              {pokemon.name}
            </p>
            <Types pokemon={pokemon} />
          </div>
          <img
            className="w-[80px] h-[80px]"
            src={pokemon.sprites.other.dream_world.front_default || ""}
          />
        </div>
      </div>
    </Link>
  );
};
