import React from "react";

import { PokemonType } from "types/pokemon";

export interface IPokemonListContext {
  list: PokemonType[];
  updateList(items: PokemonType[]): void;
}

export const PokemonListContext = React.createContext<IPokemonListContext>({
  list: [],
  updateList() {},
});

export const PokemonListProvider: React.FC = ({ children }) => {
  const [list, setList] = React.useState<PokemonType[]>([]);

  const updateList = React.useCallback(
    (items: PokemonType[]) => {
      setList((currentList) => [...currentList, ...items]);
    },
    [setList]
  );

  return (
    <PokemonListContext.Provider value={{ list, updateList }}>
      {children}
    </PokemonListContext.Provider>
  );
};
