import { URLReference } from "types/common";

export interface Ability {
  ability: URLReference;
  is_hidden: boolean;
  slot: number;
}
