import {Thing} from "../../thing";
import {Rating} from "../intangible/rating";

export interface Review {
  itemReviewed?: Thing;
  reviewAspect?: string;
  reviewBody?: string
  reviewRating?: Rating;
}
