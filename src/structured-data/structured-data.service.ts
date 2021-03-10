import {Injectable} from "@angular/core";
import {Place} from "./interfaces/place";
import {Address} from "./interfaces/address";
import {GeoCoordinates} from "./interfaces/geo-coordinates";
import {OpeningHoursSpecification} from "./interfaces/opening-hours-specification";
import {Business} from "./interfaces/business";
import {Question} from "./interfaces/question";


@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {
  static address = (address: Address) => {
    address['@type'] = 'PostalAddress';
    return address;
  }

  static geoCoordinates = (coordinates: GeoCoordinates) => {
    coordinates['@type'] = 'GeoCoordinates';
    return coordinates;
  }
  static openingHour = (specifications: OpeningHoursSpecification[]) => {
    return specifications.map((specification) => {
      specification["@type"] = "OpeningHoursSpecification";
    });
  }

  static localBusiness = (business: Business) => {
    const c: any = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "@id": business.url,
      'logo': business.logo,
      "name": business.name,
      "address": StructuredDataService.address(business.address),
      "geo": StructuredDataService.geoCoordinates(business.geo),
      "url": business.url,
      "telephone": business.telephone
    }
    if (typeof business.openingHoursSpecification !== "undefined") {
      c.openingHoursSpecification = StructuredDataService.openingHour(business.openingHoursSpecification)
    }

    return c;
  }

  static faqPage = (questions: Question[]) => {
    questions.map((question) => {
      question['@type'] = "Question";
      question.acceptedAnswer['@type'] = "Answer";
    });

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions
    };
  }
  static personSchema = (contact: any) => {
    const cc: any = {
      "@context": "https://schema.org",
      "@type": "Person",
      "email": "mailto:" + contact.mail,
      "image": 'https://www.bytediver.com/' + contact.image.src,
      'givenName': contact.firstName,
      'familyName': contact.lastName,
      "jobTitle": contact.position,
      "name": contact.firstName + ' ' + contact.lastName,
      "telephone": contact.phone,
      "worksFor": "Bytediver GmbH"
    }
    if (contact.gender) {
      cc.gender = contact.gender;
    }
    return cc;
  }

  static place = (place: Place) => {
    const c: any = {
      "@context": "https://schema.org",
      "@type": "Place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": place.latitude,
        "longitude": place.longitude
      },
      "name": place.name,
    };
    if (place.hasMap) {
      c.hasMap = place.hasMap;
    }
    if (place.logo) {
      c.logo = place.logo;
    }
    if (place.telephone) {
      c.telephone = place.telephone;
    }
    if (place.address) {
      c.address = {
        "@type": "PostalAddress",
        "addressLocality": place.address.addressLocality,
        "addressRegion": place.address.addressRegion,
        "postalCode": place.address.postalCode,
        "streetAddress": place.address.streetAddress
      };
    }
    return c;
  }

  removeStructuredData(): void {
    Array.from(window.document.head.getElementsByClassName('structured-data'))
      .forEach(el => window.document.head.removeChild(el));
  }

  insertSchema(schema: Record<string, any>): void {
    let script = window.document.createElement('script');
    script.setAttribute('class', 'structured-data');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    window.document.head.appendChild(script);
  }
}
