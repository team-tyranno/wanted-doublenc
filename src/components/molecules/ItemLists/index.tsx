import { Item } from 'components';
import { IMenuProps } from 'types';
import * as S from './style';

export const ItemLists = ({ conItems }: { conItems: Array<IMenuProps> }) => {
  return (
    <S.Container>
      {conItems.map((conItem: IMenuProps) => (
        <Item key={conItem.id} data={conItem} />
      ))}
    </S.Container>
  );
};
