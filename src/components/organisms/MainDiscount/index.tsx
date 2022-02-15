import { useRouter } from 'next/router';
import { IMenuProps } from 'types';
import * as S from './style';

export const MainDiscount = ({ itemList }: { itemList: Array<IMenuProps> }) => {
  return (
    <S.Wrapper data-test="discount-wrapper">
      <span>놓치지 마세요</span>
      <h4>오늘의 땡처리콘!</h4>

      {itemList.map((item) => {
        const router = useRouter();
        const { id, name, originalPrice, ncSellingPrice, discountRate, imageUrl, conCategory2 } =
          item;

        const routeItemPage = () => {
          router.push({
            pathname: `/items/${id}`,
          });
        };

        return (
          <S.Card key={id} onClick={routeItemPage}>
            <div
              className="card-image"
              data-test="discount-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="card-info">
              <span data-test="discount-brand">{conCategory2.name}</span>
              <h6 data-test="discount-name">{name}</h6>
              <span className="discount-rate" data-test="discount-rate">
                {discountRate}%
              </span>
              <strong data-test="discount-price">{ncSellingPrice.toLocaleString()}원</strong>
              <del data-test="original-price">{originalPrice.toLocaleString()}원</del>
            </div>
          </S.Card>
        );
      })}
    </S.Wrapper>
  );
};
