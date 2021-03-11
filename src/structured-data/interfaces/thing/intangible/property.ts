import {Intangible} from "../intangible";
import {Enumeration} from "./enumeration";
import {Class} from "./class";

export interface Property extends Intangible {
  domainIncludes?: Class;
  inverseOf?: Property;
  rangeIncludes?: Class;
  supersededBy?: Class | Enumeration | Property;
}
