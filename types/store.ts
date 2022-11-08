import { TCategory } from "./category";
import { TImage } from "./image";

export type TStore = {
  id: string;
  slug: string;
  name: string;
  image?: TImage;
  description: string;
  categories: TCategory[];
  createdAt: string;
  updatedAt: string;
};
