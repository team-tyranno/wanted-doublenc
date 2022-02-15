import { ICategoryDetailProps } from 'types';
import { CategoryButton } from 'components';
import * as S from './style';

export const MainCategory = ({ categoryList }: { categoryList: Array<ICategoryDetailProps> }) => {
  return (
    <S.Wrapper data-test="category-wrapper">
      {categoryList.map((category) => (
        <CategoryButton key={category.id} category={category} />
      ))}
    </S.Wrapper>
  );
};
