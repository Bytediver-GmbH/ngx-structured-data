import {Organization} from "../organization";
import {Place} from "../place";
import {PostalAddress} from "../intangible/structured-value/contact-point/postal-address";
import {URL} from "../../data-types/text/url";

export interface LocalBusiness extends Organization, Place {
  '@id': URL; // Google requires this value for a local business
  name: string; // Google requires this value for a local business
  address: PostalAddress;// Google requires this value for a local business

  currenciesAccepted?: string;
  openingHours?: string;
  paymentAccepted?: string;
  priceRange?: string;
  menu?: string;
}
