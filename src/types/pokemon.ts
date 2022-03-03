import { Ability } from "types/ability";
import { URLReference } from "types/common";
import { GameIndices } from "types/gameIndices";
import { Move } from "types/move";
import { Sprites } from "types/sprites";
import { Stat } from "types/stat";
import { Type } from "types/type";

export interface PokemonType {
  abilities: Ability[];
  base_experience: number;
  color: string;
  forms: URLReference[];
  game_indices: GameIndices[];
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any;
  species: URLReference;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: URLReference[];
}
