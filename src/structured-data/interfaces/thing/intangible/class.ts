import {Intangible} from "../intangible";
import {Enumeration} from "./enumeration";
import {Property} from "./property";

export interface Class extends Intangible {
  supersededBy?: Class | Enumeration | Property;
}
