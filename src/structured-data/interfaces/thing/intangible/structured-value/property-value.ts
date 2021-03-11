import {StructuredValue} from "../structured-value";
import {URL} from "../../../data-types/text/url";
import {DefinedTerm} from "../defined-term";
import {Enumeration} from "../enumeration";
import {MeasurementTypeEnumeration} from "../enumeration/measurement-type-enumeration";
import {QualitativeValue} from "../enumeration/qualitative-value";
import {QuantitativeValue} from "./quantitative-value";

export interface PropertyValue extends StructuredValue {
  maxValue?: number;
  measurementTechnique?: string | URL;
  minValue?: number;
  propertyID?: string | URL;
  unitCode?: string | URL;
  unitText?: string;
  value?: boolean | number | StructuredValue | string;
  valueReference?: DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | string;
}
