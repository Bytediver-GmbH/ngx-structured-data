import {URL} from "../../data-types/text/url";
import {Distance} from "../intangible/quantity/distance";
import {QuantitativeValue} from "../intangible/structured-value/quantitative-value";
import {CreativeWork} from "../creative-work";

export interface MediaObject extends CreativeWork {
  contentUrl?: URL;
  height: Distance | QuantitativeValue;
  width: Distance | QuantitativeValue;
}
