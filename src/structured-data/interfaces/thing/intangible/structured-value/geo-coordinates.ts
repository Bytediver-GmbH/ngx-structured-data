import {PostalAddress} from "./contact-point/postal-address";
import {Country} from "../../place/administrative-area/country";

export interface GeoCoordinates {
  address?: string | PostalAddress;
  addressCountry?: string | Country;
  elevation?: string | number;
  latitude: string | number;
  longitude: string | number;
  postalCode?: string;
}
