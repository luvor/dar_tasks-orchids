export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  image: string;
  trailer: string;
}
export interface Actor {
  name: string;
  rating: number;
  image_path: string;
  alternative_name?: string;
  objectID: string;
}
