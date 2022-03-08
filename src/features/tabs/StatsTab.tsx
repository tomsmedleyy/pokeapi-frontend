import React from "react";

import { PokemonType } from "types/pokemon";

interface PokemonProps {
  pokemon: PokemonType;
}

export const StatsTab: React.FC<PokemonProps> = ({ pokemon }) => {
  const stats = pokemon.stats.map((stat) => {
    return { name: stat.stat.name.replace(/-/g, " "), value: stat.base_stat };
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, key) => (
          <div key={key} className="flex gap-4">
            <div className="w-1/3 text-gray-400 text-right capitalize">
              {stat.name}
            </div>
            <div className="flex items-center gap-4 w-1/2">
              <p>{stat.value}</p>
              <div className="w-full bg-gray-100 rounded-full overflow-hidden h-2">
                <div
                  className={`h-full rounded-full ${
                    stat.value < 50 ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${stat.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
