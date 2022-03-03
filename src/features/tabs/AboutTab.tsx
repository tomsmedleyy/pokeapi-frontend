import React from "react";

import { PokemonType } from "types/pokemon";
import { Species } from "types/species";

interface PokemonProps {
  pokemon: PokemonType;
  species: Species;
}

export const AboutTab: React.FC<PokemonProps> = ({ pokemon, species }) => {
  const information = [
    {
      text: "Order",
      data: <span>#{String(pokemon.id).padStart(3, "0")}</span>,
    },
    { text: "Height", data: `${(pokemon.height / 10).toFixed(2)}cm` },
    { text: "Weight", data: `${pokemon.weight / 10}kg` },
    {
      text: "Abilities",
      data: (
        <span className="capitalize">
          {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </span>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4">
        {information.map((item, key) => (
          <div key={key} className="flex gap-4">
            <div className="w-1/3 text-gray-400 text-right">{item.text}</div>
            <div>{item.data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
