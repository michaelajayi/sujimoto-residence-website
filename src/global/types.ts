interface Amenity {
  title: string;
  icon?: JSX.Element;
}

interface GalleryItem {
  img: string;
}

interface Property {
  title: string;
  subTitle: string;
  description: string;
  active: boolean;
  img: string;
  minPrice: string;
  maxPrice: string;
  amenities: Amenity[];
  gallery: GalleryItem[];
}

export interface PropertyGalleryModalProps {
  property: Property;
}

export type Currency =
  | "NGN"
  | "USD"
  | "GBP"
  | "EUR"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "CNY"
  | "SEK"
  | "NZD";
