import {LocalBusiness} from "../local-business";

export interface FoodEstablishment extends LocalBusiness {
  servesCuisine: string;
}
