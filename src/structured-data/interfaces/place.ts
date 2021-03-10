export interface Place {
  latitude: string,
  longitude: string,
  name: string,
  hasMap?: string,
  logo?: string,
  telephone?: string,
  address?: {
    addressLocality: string,
    addressRegion: string,
    postalCode: string,
    streetAddress: string
  },
}
