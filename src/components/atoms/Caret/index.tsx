import * as S from './style';

interface ICaretProps {
  direction: 'right' | 'left' | 'up' | 'down';
}

export const Caret = ({ direction }: ICaretProps) => {
  const calcDegree = (dir: 'right' | 'left' | 'up' | 'down') => {
    switch (dir) {
      case 'down':
        return 0;
      case 'left':
        return 90;
      case 'up':
        return 180;
      case 'right':
        return 270;
      default:
        return 0;
    }
  };

  return (
    <S.Container>
      <S.Svg
        data-v-52e7c3af=""
        width="15"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        degree={calcDegree(direction)}
      >
        <path
          d="M1.354.646a.5.5 0 10-.708.708l.708-.708zM8 8l-.354.354a.5.5 0 00.708 0L8 8zm7.354-6.646a.5.5 0 00-.708-.708l.708.708zm-14.708 0l7 7 .708-.708-7-7-.708.708zm7.708 7l7-7-.708-.708-7 7 .708.708z"
          fill="gray"
        />
      </S.Svg>
    </S.Container>
  );
};
