import {Injectable} from "@angular/core";
import {OpeningHoursSpecification} from "./interfaces/thing/intangible/structured-value/opening-hours-specification";
import {Question} from "./interfaces/thing/creative-work/comment/question";
import {TYPE_GUARDS} from "./typeguards";
import {LocalBusiness} from "./interfaces/thing/organization/local-business";


@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {

  private static addTypeToData(data: any, type: string) {
    data['@type'] = type;
    return data;
  }

  public static openingHour(specifications: OpeningHoursSpecification[]) {
    return specifications.map((specification) => {
      return StructuredDataService.compileSchema(specification);
    });
  }

  public static corporation(business: LocalBusiness) {
    business['@id'] = business.url;
    business = StructuredDataService.compileSchema(business);

    if (typeof business.address !== "undefined") {
      business.address = StructuredDataService.compileSchema(business.address);
    }
    if (typeof business.geo !== "undefined") {
      business.geo = StructuredDataService.compileSchema(business.geo);
    }
    if (typeof business.openingHoursSpecification !== "undefined") {
      business.openingHoursSpecification = StructuredDataService.openingHour(business.openingHoursSpecification)
    }
    return business;
  }

  static faqPage = (questions: Question[]) => {
    questions.map((question) => {
      question = StructuredDataService.compileSchema(question);
      question.acceptedAnswer = StructuredDataService.compileSchema(question.acceptedAnswer);
      return question;
    });

    return StructuredDataService.compileSchema({
      "mainEntity": questions
    });
  }
  static personSchema = (contact: any) => {
    const cc: any = {
      "@type": "Person",
      "email": "mailto:" + contact.mail,
      "image": 'https://www.bytediver.com/' + contact.image.src,
      "telephone": contact.phone,
      "worksFor": "Bytediver GmbH"
    }
    if (contact.gender) {
      cc.gender = contact.gender;
    }
    return cc;
  }

  public static compileSchema(schema: Record<string, any>) {
    for (let name in TYPE_GUARDS) {
      if (TYPE_GUARDS[name](schema)) {
        const data = StructuredDataService.addTypeToData(schema, name);
        for (let key in data) {
          if (!data.hasOwnProperty(key)) {
            // If prototype value, skip
            continue;
          }
          if (!Array.isArray(data[key])) {
            // if the property is an object
            data[key] = StructuredDataService.compileIfObject(data[key]);
            continue;
          }
          // if the property is an array of possible objects
          for (let i = 0; i < data[key].length; i++) {
            data[key][i] = StructuredDataService.compileIfObject(data[key][i]);
          }
        }
        return data;
      }
    }
  }

  private static compileIfObject(item: any) {
    if (typeof item === 'object') {
      // if the property is a object
      return StructuredDataService.compileSchema(item);
    }
    return item;
  }


  public removeStructuredData(): void {
    Array.from(window.document.head.getElementsByClassName('structured-data'))
      .forEach(el => window.document.head.removeChild(el));
  }

  public insertSchema(schema: Record<string, any>, context: string = 'https://schema.org'): void {
    let script = window.document.createElement('script');
    script.setAttribute('class', 'structured-data');
    script.type = 'application/ld+json';

    // Always add a context if the passed schema is added to the document
    schema['@context'] = context;
    script.text = JSON.stringify(StructuredDataService.compileSchema(schema));
    window.document.head.appendChild(script);
  }
}
