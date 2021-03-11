import {Answer} from "./answer";
import {Comment} from "../comment";

export interface Question extends Comment {
  name: string; // is required for google
  acceptedAnswer: Answer;
}
