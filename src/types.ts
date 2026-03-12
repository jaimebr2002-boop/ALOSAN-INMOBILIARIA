export interface Property {
  id: string;
  title: string;
  image: string;
  price: string;
  location: string;
  beds: number;
  sqm: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
  photo: string;
}
