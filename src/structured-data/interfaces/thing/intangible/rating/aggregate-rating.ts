import {Thing} from "../../../thing";
import {Rating} from "../rating";

export interface AggregateRating extends Rating {
  itemReviewed: Thing;
  ratingCount: number;
  reviewCount: number;
}
