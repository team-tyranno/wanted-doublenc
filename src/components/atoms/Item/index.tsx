import { IMenuProps } from 'types';
import * as S from './style';

export const Item = ({ data }: { data: IMenuProps }) => {
  const { name, originalPrice, minSellingPrice, imageUrl } = data;

  const calculateDiscountRate = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <S.Container>
      <img src={imageUrl} alt={`${name} 이미지`} />
      <S.Inner>
        <div className="title">{name}</div>
        <S.Price>
          <span className="rate">{`${calculateDiscountRate(
            originalPrice,
            minSellingPrice,
          )}%`}</span>
          <span className="original-price">{originalPrice}</span>
          <span className="discount-price">{minSellingPrice}</span>
        </S.Price>
      </S.Inner>
    </S.Container>
  );
};
