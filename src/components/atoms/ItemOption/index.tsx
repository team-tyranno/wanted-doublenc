import { formatDateString } from 'utils';
import * as S from './style';

interface IItemOptionProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<null | string>>;
  count: number;
  expireAt: string;
  sellingPrice: number;
  discountRate: number;
}

export const ItemOption = ({
  setSelectedOption,
  count,
  expireAt,
  sellingPrice,
  discountRate,
}: IItemOptionProps) => {
  return (
    <S.Container
      onClick={() =>
        setSelectedOption(
          `${formatDateString(expireAt)} 까지 / ${sellingPrice.toLocaleString()}원 `,
        )
      }
    >
      <S.Info>
        <S.Div>
          <S.Label>유효기간</S.Label>
          <S.Content>{formatDateString(expireAt)} 까지</S.Content>
        </S.Div>
        <S.Div>
          <S.Label>할인가</S.Label>
          <S.Content>{sellingPrice.toLocaleString()}원</S.Content>
        </S.Div>
      </S.Info>
      <S.DiscountRate>{discountRate}%</S.DiscountRate>
    </S.Container>
  );
};
