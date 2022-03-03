import useSWR from "swr";

import { api, useAPI } from "services/api";

import { URLReference } from "types/common";
import { PokemonType, PokemonList } from "types/pokemon";

const pokemonFetcher = async (items: URLReference[]) => {
  const requests = items.map(
    async (item) =>
      await api.get<PokemonType>(item.url).then(async ({ data }) => {
        const pokemon = data;
        await api.get(pokemon.species.url).then(({ data }) => {
          pokemon.color = data.color.name;
        });
        return pokemon;
      })
  );
  return Promise.all([...requests]).then((response) => response);
};

export const useFetchPokemon = () => {
  const { data, error, isLoading, mutate } = useAPI<PokemonList>(
    `/pokemon?limit=151`
  );

  const { data: pokemonList, error: pokemonError } = useSWR(
    data ? [data.results] : null,
    pokemonFetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  const pokemonLoading = !pokemonList && !pokemonError;

  return {
    data: pokemonList,
    error: error ?? pokemonError ?? null,
    isLoading: pokemonLoading || isLoading,
    mutate,
  };
};
