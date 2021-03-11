import {Comment} from "../comment";

export interface Answer extends Comment {
  text: string; // Required for google
}
