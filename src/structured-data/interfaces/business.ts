import {Address} from "./address";
import {GeoCoordinates} from "./geo-coordinates";
import {OpeningHoursSpecification} from "./opening-hours-specification";

export interface Business {
  name: string;
  address: Address
  geo: GeoCoordinates,
  logo: string,
  url: string,
  telephone: string,
  openingHoursSpecification?: OpeningHoursSpecification[]
}
