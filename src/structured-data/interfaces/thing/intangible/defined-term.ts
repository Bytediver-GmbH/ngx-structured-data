import {URL} from "../../data-types/text/url";
import {DefinedTermSet} from "../creative-work/defined-term-set";
import {Intangible} from "../intangible";

export interface DefinedTerm extends Intangible {
  inDefinedTermSet: DefinedTermSet | URL;
  termCode: string;
}
