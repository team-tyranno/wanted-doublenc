export interface ICategoryProps {
  conCategory1s: Array<ICategoryDetailProps>;
}

export interface ICategoryDetailProps {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}
