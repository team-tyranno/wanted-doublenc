import { IMenuProps } from 'types';
import * as S from './style';

export const MainDiscount = ({ itemList }: { itemList: Array<IMenuProps> }) => {
  return (
    <S.Wrapper data-test="discount-wrapper">
      <span>놓치지 마세요</span>
      <h4>오늘의 땡처리콘!</h4>

      {itemList.map((item) => (
        <S.Card key={item.id}>
          <div
            className="card-image"
            data-test="discount-image"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <div className="card-info">
            <span data-test="discount-brand">{item.conCategory2.name}</span>
            <h6 data-test="discount-name">{item.name}</h6>
            <span className="discount-rate" data-test="discount-rate">
              {item.discountRate}%
            </span>
            <strong data-test="discount-price">{item.ncSellingPrice.toLocaleString()}원</strong>
            <del data-test="original-price">{item.originalPrice.toLocaleString()}원</del>
          </div>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};
