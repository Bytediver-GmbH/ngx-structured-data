import {PostalAddress} from "./contact-point/postal-address";
import {Country} from "../../place/administrative-area/country";

export interface GeoShape {
  address?: string | PostalAddress;
  addressCountry?: string | Country;
  box?: string;
  circle?: string;
  elevation?: string | number;
  line?: string;
  polygon?: string;
  postalCode?: string;
}
