import React from "react";

import { useFetchPokemon } from "hooks/useFetchPokemon";

import { Pokemon } from "components/Pokemon";

export const App: React.FC = () => {
  const { data, isLoading } = useFetchPokemon();

  if (isLoading || !data) return <div className="container">Loading...</div>;
  return (
    <div className="container">
      <div className="grid gap-4 grid-cols-4">
        {data.map((pokemon) => (
          <Pokemon pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
