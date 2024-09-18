export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  dose: string;
  addedDate: Date;
  viewCount: number;
};

export type Review = {
  id: number;
  title: string;
  description: string;
  stars: number;
  customerName: string;
  addedDate: Date;
};
