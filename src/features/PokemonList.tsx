import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { usePokemonList } from "hooks/usePokemonList";
import { useFetchPokemon } from "hooks/useFetchPokemon";

import { Pokemon } from "components/Pokemon";
import { Loader } from "components/Loader";

export const PokemonList: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [nextResult, setNextResults] = React.useState<undefined | string>(
    undefined
  );

  const { data, next, isLoading } = useFetchPokemon(nextResult);
  const { list, updateList } = usePokemonList();

  React.useEffect(() => {
    updateList(data || []);
  }, [data, updateList]);

  const items = React.useMemo(() => {
    if (list) {
      if (searchTerm) {
        return list.filter((item) => item.name.includes(searchTerm));
      }
      return list;
    }
  }, [list, searchTerm]);

  const handleFetchMore = () => {
    setNextResults(next || "");
    console.log(next);
  };

  if ((isLoading || !data) && list.length === 0) return <Loader />;
  return (
    <div className="container pb-20">
      <div className="p-6 pt-14 pb-10 flex flex-col justify-between items-center md:flex-row">
        <h1 className="text-7xl font-bold tracking-tighter text-gray-700">
          Pokedex
        </h1>
        <div>
          <input
            autoFocus
            placeholder="Search..."
            className="w-[300px] px-4 pt-2 pb-1 rounded-xl border-2 focus:border-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {searchTerm ? (
        <p className="p-6">
          Found {items?.length || "0"} items for "{searchTerm}"
        </p>
      ) : null}
      <InfiniteScroll
        dataLength={items?.length || 0}
        next={handleFetchMore}
        hasMore={true}
        loader={<Loader inline />}
      >
        <div className="grid gap-8 grid-cols-1 mx-6 pt-8 md:mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items
            ? items.map((pokemon, key) => (
                <Pokemon key={key} pokemon={pokemon} />
              ))
            : null}
        </div>
      </InfiniteScroll>
    </div>
  );
};
