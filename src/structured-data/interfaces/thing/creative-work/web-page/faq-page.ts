import {Question} from "../comment/question";
import {WebPage} from "../web-page";

export interface FAQPage extends WebPage {
  mainEntity: Question[]
}
