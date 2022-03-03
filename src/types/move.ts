import { URLReference } from "types/common";

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: URLReference;
  version_group: URLReference;
}

export interface Move {
  move: URLReference;
  version_group_details: VersionGroupDetails[];
}
