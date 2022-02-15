import { nanoid } from 'nanoid';
import * as S from './style';

interface IItemWarningProps {
  title: string;
  content: string;
}

export const ItemWarning = ({ title, content }: IItemWarningProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {content.split('\n').map((e) => (
        <S.Content key={nanoid()}>{e}</S.Content>
      ))}
    </S.Container>
  );
};
