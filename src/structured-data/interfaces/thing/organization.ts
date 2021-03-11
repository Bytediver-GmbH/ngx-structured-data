import {Thing} from "../thing";
import {PostalAddress} from "./intangible/structured-value/contact-point/postal-address";
import {Review} from "./creative-work/review";

export interface Organization extends Thing {
  address?: PostalAddress;
  department?: Organization;
  review?: Review;
  telephone?: string;
}
