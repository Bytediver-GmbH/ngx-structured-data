import {FAQPage} from "./interfaces/thing/creative-work/web-page/faq-page";
import {Question} from "./interfaces/thing/creative-work/comment/question";
import {Answer} from "./interfaces/thing/creative-work/comment/answer";
import {PostalAddress} from "./interfaces/thing/intangible/structured-value/contact-point/postal-address";
import {Corporation} from "./interfaces/thing/organization/corporation";
import {GeoCoordinates} from "./interfaces/thing/intangible/structured-value/geo-coordinates";
import {OpeningHoursSpecification} from "./interfaces/thing/intangible/structured-value/opening-hours-specification";
import {LocalBusiness} from "./interfaces/thing/organization/local-business";
import {Person} from "./interfaces/thing/person";
import {MediaObject} from "./interfaces/thing/creative-work/media-object";

/**
 * THE ORDER OF THESE METHODS IS IMPORTANT!
 * ORDER IT FROM SPECIFIC TO GENERAL, OTHERWISE OBJECTS WILL BE IDENTIFIED WRONG!
 * @todo: move this into the files with the interfaces itself. include a priority for correct execution order.
 */
export const TYPE_GUARDS = {
  PostalAddress: (object: any): object is PostalAddress => {
    return 'streetAddress' in object;
  },
  Corporation: (object: any): object is Corporation => {
    return 'tickerSymbol' in object;
  },
  FAQPage: (object: any): object is FAQPage => {
    // @todo: check if mainEntity is instance if question array
    return 'mainEntity' in object;
  },
  Question: (object: any): object is Question => {
    return 'acceptedAnswer' in object;
  },
  Answer: (object: any): object is Answer => {
    // @todo: this is not specific enough
    return 'text' in object;
  },
  GeoCoordinates: (object: any): object is GeoCoordinates => {
    // @todo: this is not specific enough
    return 'latitude' in object && 'longitude' in object;
  },
  OpeningHoursSpecification: (object: any): object is OpeningHoursSpecification => {
    // @todo: this is not specific enough
    return 'opens' in object && 'closes' in object;
  },
  LocalBusiness: (object: any): object is LocalBusiness => {
    // @todo: check if mainEntity is instance if question array
    return 'address' in object && 'name' in object;
  },
  Person: (object: any): object is Person => {
    // @todo: this is not specific enough
    return 'givenName' in object
  },
  MediaObject: (object: any): object is MediaObject => {
    // @todo: this is not specific enough
    return 'height' in object && 'width' in object
  }
};
