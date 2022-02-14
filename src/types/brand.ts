interface ICafeProps {
import { type } from './index';
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conCategory2s: Array<IBrandProps>;
}

interface IBrandProps {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: Array<IMenuProps>;
}

interface IMenuProps {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}

export type { ICafeProps, IBrandProps, IMenuProps };
