import {Thing} from "../thing";
import {PostalAddress} from "./intangible/structured-value/contact-point/postal-address";
import {Organization} from "./organization";
import {Place} from "./place";
import {QuantitativeValue} from "./intangible/structured-value/quantitative-value";
import {DefinedTerm} from "./intangible/defined-term";
import {Country} from "./place/administrative-area/country";
import {CreativeWork} from "./creative-work";
import {EducationalOrganization} from "./organization/educational-organization";
import {Brand} from "./intangible/brand";
import {ContactPoint} from "./intangible/structured-value/contact-point";
import {GenderType} from "./intangible/enumeration/gender-type";
import {EducationalOccupationalCredential} from "./creative-work/educational-occupational-credential";
import {Occupation} from "./intangible/occupation";
import {OfferCatalog} from "./intangible/item-list/offer-catalog";
import {Distance} from "./intangible/quantity/distance";
import {InteractionCounter} from "./intangible/structured-value/interaction-counter";
import {Language} from "./intangible/language";
import {Offer} from "./intangible/offer";
import {ProgramMembership} from "./intangible/program-membership";
import {MonetaryAmount} from "./intangible/structured-value/monetary-amount";
import {PriceSpecification} from "./intangible/structured-value/price-specification";
import {OwnershipInfo} from "./intangible/structured-value/ownership-info";
import {Product} from "./product";
import {Demand} from "./intangible/demand";

export interface Person extends Thing {
  additionalName?: string;
  address?: PostalAddress | string;
  affiliation?: Organization;
  alumniOf?: EducationalOrganization | Organization
  award?: string;
  birthDate?: Date;
  birthPlace?: Place;
  brand?: Brand | Organization;
  callSign?: string;
  children?: Person;
  colleague?: Person | URL;
  contactPoint?: ContactPoint | ContactPoint[];
  deathDate?: Date;
  deathPlace?: Place;
  duns?: string;
  email?: string;
  familyName?: string;
  faxNumber?: string;
  follows?: Person;
  funder?: Organization | Person;
  gender?: GenderType | string;
  givenName: string;
  globalLocationNumber?: string;
  hasCredential?: EducationalOccupationalCredential;
  hasOccupation?: Occupation;
  hasOfferCatalog?: OfferCatalog;
  hasPOS?: Place;
  height?: Distance | QuantitativeValue;
  homeLocation?: ContactPoint | Place;
  honorificPrefix?: string
  honorificSuffix?: string;
  interactionStatistic?: InteractionCounter;
  isicV4?: string;
  jobTitle?: DefinedTerm | string;
  knows?: Person;
  knowsAbout?: string | Thing | URL;
  knowsLanguage?: Language | string;
  makesOffer?: Offer;
  memberOf?: Organization | ProgramMembership;
  naics?: string;
  nationality?: Country;
  netWorth?: MonetaryAmount | PriceSpecification;
  owns?: OwnershipInfo | Product;
  parent?: Person;
  performerIn?: Event;
  publishingPrinciples?: CreativeWork | URL;
  relatedTo?: Person;
  seeks?: Demand;
  sibling?: Person;
  sponsor?: Organization | Person;
  spouse?: Person;
  taxID?: string;
  telephone?: string
  vatID?: string;
  weight?: QuantitativeValue;
  workLocation?: ContactPoint | Place;
  worksFor?: Organization;
}