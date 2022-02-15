import { IMenuProps } from 'types';
import * as S from './style';

interface IItemInfoProps {
  id: number;
  brand: string;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  imageUrl: string;
}

export const ItemInfo = ({ data }: { data: IItemInfoProps }) => {
  const { id, brand, name, originalPrice, minSellingPrice, imageUrl } = data;

  const calculateDiscountRate = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <S.Container>
      <img src={imageUrl} alt={`${name} 이미지`} />
      <S.Inner>
        <S.Brand>{brand}</S.Brand>
        <div className="title">{name}</div>
        <S.Price>
          <span className="rate">{`${calculateDiscountRate(
            originalPrice,
            minSellingPrice,
          )}%`}</span>
          <span className="original-price">{originalPrice.toLocaleString()}원</span>
          <span className="discount-price">{minSellingPrice.toLocaleString()}원</span>
        </S.Price>
      </S.Inner>
    </S.Container>
  );
};
