import React from "react";

import { useFetchPokemon } from "hooks/useFetchPokemon";

import { Pokemon } from "components/Pokemon";
import { Loader } from "components/Loader";

export const PokemonList: React.FC = () => {
  const { data, isLoading } = useFetchPokemon();

  if (isLoading || !data) return <Loader />;
  return (
    <div className="container pb-20">
      <div className="p-6 pt-14 flex justify-between items-center">
        <h1 className="text-9xl font-bold tracking-tighter text-gray-700">
          Pokedex
        </h1>
        <div>
          <input
            placeholder="Search..."
            className="w-[300px] px-4 pt-2 pb-1 rounded-xl border-2"
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-4">
        {data.map((pokemon, key) => (
          <Pokemon key={key} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
