// import { useState } from 'react';
import * as S from './style';

interface IItemOptionProps {
  count: number;
  expireAt: string;
  sellingPrice: number;
}

export const ItemOption = ({ count, expireAt, sellingPrice }: IItemOptionProps) => {
  return (
    <S.Container>
      <S.Info>
        <S.Div>
          <S.Label>유효기간</S.Label>
          <S.Content>{expireAt}까지</S.Content>
        </S.Div>
        <S.Div>
          <S.Label>할인가</S.Label>
          <S.Content>{sellingPrice.toLocaleString()}원</S.Content>
        </S.Div>
      </S.Info>
      <S.DiscountRate>14%</S.DiscountRate>
    </S.Container>
  );
};
