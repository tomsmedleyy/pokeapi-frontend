import useSWR, { SWRConfiguration } from "swr";
import axios from "axios";

const config = {
  baseURL: "https://pokeapi.co/api/v2",
};

export const api = axios.create({ ...config });

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const useAPI = <DataType = any, ErrorType = any>(
  url: string,
  options?: SWRConfiguration<DataType, ErrorType>
) => {
  const { data, error, mutate } = useSWR(url, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    ...options,
  });
  return { data, error, isLoading: !error && !data, mutate };
};
