import {StructuredValue} from "../structured-value";
import {Product} from "../../product";
import {OpeningHoursSpecification} from "./opening-hours-specification";
import {Place} from "../../place";
import {GeoShape} from "./geo-shape";
import {AdministrativeArea} from "../../place/administrative-area";
import {Language} from "../language";
import {ContactPointOption} from "../enumeration/contact-point-option";

export interface ContactPoint extends StructuredValue {
  areaServed?: AdministrativeArea | GeoShape | Place | string;
  availableLanguage?: Language | string;
  contactOption?: ContactPointOption;
  contactType?: string;
  email?: string;
  faxNumber?: string;
  hoursAvailable?: OpeningHoursSpecification;
  productSupported?: Product | string;
  telephone?: string;
}
