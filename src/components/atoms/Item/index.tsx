import { IMenuProps } from 'types';
import { useRouter } from 'next/router';
import * as S from './style';

export const Item = ({ data }: { data: IMenuProps }) => {
  const router = useRouter();

  const { id, name, originalPrice, minSellingPrice, imageUrl } = data;

  const calculateDiscountRate = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  const onClick = () => router.push({ pathname: `/items/${id}` });

  return (
    <S.Container onClick={onClick}>
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
