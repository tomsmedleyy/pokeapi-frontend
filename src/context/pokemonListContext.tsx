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

  const unique = (array: any) => {
    const arr = array.concat();
    for (let i = 0; i < arr.length; ++i) {
      for (let j = i + 1; j < arr.length; ++j) {
        if (arr[i] === arr[j]) arr.splice(j--, 1);
      }
    }
    return arr;
  };

  const updateList = React.useCallback(
    (items: PokemonType[]) => {
      setList((currentList) => unique([...currentList, ...items]));
    },
    [setList]
  );

  return (
    <PokemonListContext.Provider value={{ list, updateList }}>
      {children}
    </PokemonListContext.Provider>
  );
};
