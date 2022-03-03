import { useAPI } from "services/api";

export const useFetchPokemonExtra = (url: string) => {
  const { data, error, isLoading, mutate } = useAPI(url);
  return { data, error, isLoading, mutate };
};
