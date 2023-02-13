import { Category } from "./Category";

export type Simulation = {
  id: string;
  title: string;
  categories: Category[];
  url: string;
  thumbnailUrl: string;
  shareLinkUrl?: string;
  description?: string;
};
