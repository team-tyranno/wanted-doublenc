import * as S from './style';

export const NumItems = ({ num }: { num: number }) => {
  return (
    <S.Container>
      <div>{num}개의 상품</div>
    </S.Container>
  );
};
