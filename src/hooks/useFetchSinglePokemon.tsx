import { useAPI } from "services/api";

import { PokemonType } from "types/pokemon";

export const useFetchSinglePokemon = (name: string) => {
  const url = name ? `/pokemon/${name}` : "";
  const { data, error, isLoading, mutate } = useAPI<PokemonType>(url);
  return { data, error, isLoading, mutate };
};
