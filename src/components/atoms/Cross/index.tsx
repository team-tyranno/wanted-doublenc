import * as S from './style';

export const Cross = () => {
  return (
    <S.Container>
      <S.Svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 7l16 16M23 7L7 23"
          stroke="#000"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </S.Svg>
    </S.Container>
  );
};
