import { TCategory } from "./category";
import { TImage } from "./image";

export type TProduct = {
  id: string;
  slug: string;
  name: string;
  image?: TImage;
  description?: string;
  longDescription?: string;
  details?: string;
  price: number;
  discountPrice?: number;
  categoryIds: string[];
  categories: TCategory[];
  createdAt: string;
  updatedAt: string;
};
