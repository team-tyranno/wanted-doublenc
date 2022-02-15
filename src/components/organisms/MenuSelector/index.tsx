import * as S from './style';

interface IMenuSelectorProps {
  title?: string;
  menuList: {
    id: number;
    name: string;
  }[];
  selected: number;
  onClick: (key: number) => void;
}

export const MenuSelector = ({ title = '', menuList, selected, onClick }: IMenuSelectorProps) => {
  return (
    <S.Container>
      {title !== '' && <S.Title>{title}</S.Title>}
      <S.MenuButtons>
        {menuList.map((menu) => (
          <S.Button key={menu.id} underLine={menu.id === selected} onClick={() => onClick(menu.id)}>
            {menu.name}
          </S.Button>
        ))}
      </S.MenuButtons>
    </S.Container>
  );
};
