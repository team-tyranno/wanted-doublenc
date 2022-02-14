import { useState } from 'react';
import { Caret } from 'components';

import * as S from './style';

interface IAccordionProps {
  question: string;
  answer: string;
}

export const Accordion = ({ question, answer }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((c) => !c);
  };

  return (
    <S.Container>
      <S.FAQ type="button" onClick={toggleIsOpen}>
        <S.QMark>Q.</S.QMark>
        <S.Question>{question}</S.Question>
        <Caret isOpen={isOpen} />
      </S.FAQ>
      {isOpen && (
        <S.AnswerBox>
          <S.AnswerWrap>
            <p>{answer}</p>
          </S.AnswerWrap>
        </S.AnswerBox>
      )}
    </S.Container>
  );
};
