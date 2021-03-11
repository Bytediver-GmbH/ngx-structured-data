import {AggregateRating} from "./intangible/rating/aggregate-rating";

import {GeoCoordinates} from "./intangible/structured-value/geo-coordinates";
import {GeoShape} from "./intangible/structured-value/geo-shape";
import {OpeningHoursSpecification} from "./intangible/structured-value/opening-hours-specification";

export interface Place {
  aggregateRating?: AggregateRating;
  openingHoursSpecification?: OpeningHoursSpecification[];
  geo?: GeoCoordinates | GeoShape;
}
