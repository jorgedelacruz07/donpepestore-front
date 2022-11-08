import { TImage } from "./image";
import { TProduct } from "./product";
import { TStore } from "./store";

export type TCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: TImage;
  productIds: string[];
  products: TProduct[];
  store: TStore;
  createdAt: string;
  updatedAt: string;
};
