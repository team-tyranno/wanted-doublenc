import * as S from './style';

interface ICaretProps {
  isOpen: boolean;
}

export const Caret = ({ isOpen }: ICaretProps) => {
  return (
    <S.Container>
      <S.Svg
        data-v-52e7c3af=""
        width="16"
        height="9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        isOpen={isOpen}
      >
        <path
          d="M1.354.646a.5.5 0 10-.708.708l.708-.708zM8 8l-.354.354a.5.5 0 00.708 0L8 8zm7.354-6.646a.5.5 0 00-.708-.708l.708.708zm-14.708 0l7 7 .708-.708-7-7-.708.708zm7.708 7l7-7-.708-.708-7 7 .708.708z"
          fill="gray"
        />
      </S.Svg>
    </S.Container>
  );
};
