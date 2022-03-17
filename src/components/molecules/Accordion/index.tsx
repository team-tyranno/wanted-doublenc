import { Caret } from 'components';

import * as S from './style';

interface IAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: (id: number) => void;
  id: number;
}

export const Accordion = ({ question, answer, isOpen, onClick, id }: IAccordionProps) => {
  return (
    <S.Container data-cy="accordion">
      <S.FAQ type="button" onClick={() => onClick(id)}>
        <S.QMark>Q.</S.QMark>
        <S.Question>{question}</S.Question>
        <Caret direction={isOpen ? 'up' : 'down'} />
      </S.FAQ>
      {isOpen && (
        <S.AnswerBox data-cy="accordionAnswer">
          <S.AnswerWrap>
            <p>{answer}</p>
          </S.AnswerWrap>
        </S.AnswerBox>
      )}
    </S.Container>
  );
};
