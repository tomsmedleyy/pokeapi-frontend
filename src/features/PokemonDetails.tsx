import React from "react";
import { Link, useParams } from "react-router-dom";

import { useFetchSinglePokemon } from "hooks/useFetchSinglePokemon";
import { useFetchPokemonExtra } from "hooks/useFetchPokemonExtra";

import { Loader } from "components/Loader";
import { Tabs } from "components/Tabs";
import { Types } from "components/Types";

import { AboutTab } from "features/tabs/AboutTab";
import { MovesTab } from "features/tabs/MovesTab";
import { StatsTab } from "features/tabs/StatsTab";

export const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams();

  const { data: pokemon, isLoading: isLoadingPokemon } = useFetchSinglePokemon(
    pokemonName || ""
  );
  const { data: species, isLoading: isLoadingColor } = useFetchPokemonExtra(
    pokemon?.species?.url || ""
  );

  if (isLoadingPokemon || isLoadingColor || !pokemon) return <Loader />;

  const pokemonColour = `p-bg-${species.color.name}`;
  return (
    <React.Fragment>
      <div className={`w-screen ${pokemonColour} h-3/5 md:h-96`}>
        <div className="container p-6 pt-14 flex justify-between items-center flex-col md:flex-row md:items-start">
          <div className="w-full">
            <Link to="/">
              <div className="flex gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Pokedex
              </div>
            </Link>
            <h1
              className={`my-4 font-bold capitalize ${
                species.color.name === "white" ? "text-gray-700" : "text-white"
              } text-5xl md:text-7xl`}
            >
              {pokemon.name}
            </h1>
            <Types pokemon={pokemon} />
          </div>
          <img
            className="w-[220px] h-[220px] z-50"
            src={pokemon.sprites.other.dream_world.front_default || ""}
          />
        </div>
      </div>
      <div className="container -mt-14 bg-white rounded-xl drop-shadow-xl px-6 py-6 pt-10 md:-mt-36 mb-20">
        <Tabs
          tabs={[
            {
              title: "About",
              index: "about",
              component: <AboutTab pokemon={pokemon} species={species} />,
            },
            {
              title: "Stats",
              index: "stats",
              component: <StatsTab pokemon={pokemon} />,
            },
            {
              title: "Moves",
              index: "moves",
              component: <MovesTab pokemon={pokemon} />,
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};
