import React from "react";
import { Link, useParams } from "react-router-dom";

import { useFetchSinglePokemon } from "hooks/useFetchSinglePokemon";
import { useFetchPokemonExtra } from "hooks/useFetchPokemonExtra";

import { Loader } from "components/Loader";
import { Types } from "components/Types";

export const PokemonDetails: React.FC = () => {
  const { pokemonName } = useParams();

  const { data: pokemon, isLoading: isLoadingPokemon } = useFetchSinglePokemon(
    pokemonName || ""
  );
  const { data, isLoading: isLoadingColor } = useFetchPokemonExtra(
    pokemon?.species?.url || ""
  );

  if (isLoadingPokemon || isLoadingColor || !pokemon) return <Loader />;

  const pokemonColour = `p-bg-${data.color.name}`;
  return (
    <React.Fragment>
      <div className={`w-screen h-96 ${pokemonColour}`}>
        <div className="container p-6 pt-14 flex justify-between">
          <div>
            <Link to="/">
              <div className="flex gap-2">
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
              className={`text-7xl my-4 font-bold capitalize ${
                data.color.name === "white" ? "text-gray-700" : "text-white"
              }`}
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
      <div className="container -mt-36 bg-white rounded-xl drop-shadow-xl p-6">
        About tab, Stats tab, Moves tab
      </div>
    </React.Fragment>
  );
};
