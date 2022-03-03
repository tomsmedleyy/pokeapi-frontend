import { URLReference, URLString } from "types/common";

interface FlavorTextEntries {
  flavor_text: string;
  language: URLReference;
  version: URLReference;
}

interface Genera {
  genus: string;
  language: URLReference;
}

interface Names {
  language: URLReference;
}

interface PalParkEncounters {
  base_score: number;
  rate: number;
  area: URLReference;
}

interface PokedexNumbers {
  entry_number: number;
  pokedex: URLReference;
}

interface Varieties {
  is_default: boolean;
  pokemon: URLReference;
}

export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: URLReference;
  egg_groups: URLReference[];
  evolution_chain: URLString;
  flavor_text_entries: FlavorTextEntries[];
  form_descriptions: URLReference[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: URLReference;
  growth_rate: URLReference;
  habitat: URLReference;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Names[];
  order: number;
  pal_park_encounters: PalParkEncounters[];
  pokedex_numbers: PokedexNumbers[];
  shape: URLReference;
  varieties: Varieties[];
}
