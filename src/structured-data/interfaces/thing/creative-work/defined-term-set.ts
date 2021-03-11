import {CreativeWork} from "../creative-work";
import {DefinedTerm} from "../intangible/defined-term";

export interface DefinedTermSet extends CreativeWork {
  hasDefinedTerm?: DefinedTerm;
}
