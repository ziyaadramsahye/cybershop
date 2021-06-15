import { ProductGallery } from './product-gallery.model';

export interface Product {
  id: number;
  img: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  category: string;
  instock: boolean;
  gallery: Array<ProductGallery>;
}
