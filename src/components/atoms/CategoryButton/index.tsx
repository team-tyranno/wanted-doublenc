import { useRouter } from 'next/router';
import { ICategoryDetailProps } from 'types';
import * as S from './style';

export const CategoryButton = ({ category }: { category: ICategoryDetailProps }) => {
  const router = useRouter();
  const { id, name, imageUrl } = category;

  const routeCategoryPage = () => {
    router.push({
      pathname: `/categories/${id}`,
    });
  };

  return (
    <S.Wrapper onClick={routeCategoryPage}>
      <img alt={`카테고리: ${name}`} src={imageUrl} data-test="category-image" />
      <span data-test="category-name">{name}</span>
    </S.Wrapper>
  );
};
