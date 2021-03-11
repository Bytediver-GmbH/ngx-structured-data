import {Intangible} from "../intangible";
import {Class} from "./class";
import {Property} from "./property";

export interface Enumeration extends Intangible {
  supersededBy?: Class | Enumeration | Property;
}
