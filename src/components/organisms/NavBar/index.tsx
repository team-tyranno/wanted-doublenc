import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

interface INavbarProps {
  leftButton?: ButtonHTMLAttributes<HTMLButtonElement>;
  title?: string;
  rightButton?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const NavBar = ({ leftButton, title, rightButton }: INavbarProps) => {
  return (
    <S.Container>
      <S.LeftButtonWrap>{leftButton}</S.LeftButtonWrap>
      <S.TitleWrap>{title}</S.TitleWrap>
      <S.RightButtonWrap>{rightButton}</S.RightButtonWrap>
    </S.Container>
  );
};
