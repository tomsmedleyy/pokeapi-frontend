import React from "react";
import { Route, Routes } from "react-router-dom";

import { PokemonList } from "features/PokemonList";
import { PokemonDetails } from "features/PokemonDetails";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/:pokemonName" element={<PokemonDetails />} />
    </Routes>
  );
};
