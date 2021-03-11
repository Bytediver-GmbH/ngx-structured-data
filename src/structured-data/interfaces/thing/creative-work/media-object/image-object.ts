import {MediaObject} from "../media-object";

export interface ImageObject extends MediaObject {
  caption?: string | MediaObject;
  exifData?: string;
  representativeOfPage?: boolean;
  thumbnail?: ImageObject;
}
