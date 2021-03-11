import {ImageObject} from "./thing/creative-work/media-object/image-object";
import {URL} from "./data-types/text/url";

export interface Thing {
  name?: string;
  url?: URL;
  image?: ImageObject | URL;
  sameAs?: URL | URL[]
}
