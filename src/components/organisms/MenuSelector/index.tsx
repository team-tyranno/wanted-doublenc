import { useRef } from 'react';

import { ICategoryDetailProps } from 'types';
import * as S from './style';

interface IMenuSelectorProps {
  title?: string;
  menuList: Array<ICategoryDetailProps>;
  selected: number;
  onClick: (key: number) => void;
}

export const MenuSelector = ({ title = '', menuList, selected, onClick }: IMenuSelectorProps) => {
  let isDragging = false;
  let swipeStartPos = 0;
  let currentPos = 0;
  const slideRef = useRef<HTMLDivElement>(null);

  const cutByTranslateLimit = (length: number): number => {
    if (!slideRef.current) return 0;
    const translateLimit = slideRef.current.clientWidth - slideRef.current.scrollWidth;
    return Math.max(Math.min(0, length), translateLimit);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    swipeStartPos = e.pageX;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const swipeLength = e.pageX - swipeStartPos;
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(${cutByTranslateLimit(
        currentPos + swipeLength,
      )}px)`;
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    isDragging = false;
    currentPos = cutByTranslateLimit(currentPos + e.pageX - swipeStartPos);
    swipeStartPos = 0;
  };

  return (
    <S.Container>
      {title !== '' && <S.Title>{title}</S.Title>}
      <S.MenuButtons
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
        ref={slideRef}
      >
        {menuList.map((menu) => (
          <S.Button
            key={menu.id}
            underLine={menu.id === selected}
            onClick={() => onClick(menu.id)}
            data-cy="menuButton"
          >
            {menu.name}
          </S.Button>
        ))}
      </S.MenuButtons>
    </S.Container>
  );
};
