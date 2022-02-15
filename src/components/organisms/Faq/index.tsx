import { useState } from 'react';
import { Accordion } from 'components';

import * as S from './style';

interface Qa {
  id: number;
  question: string;
  answer: string;
}

interface IFaqProps {
  qaList: Qa[];
}

export const Faq = ({ qaList }: IFaqProps) => {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const handleOnClick = (id: number) => {
    if (id === openAccordion) {
      setOpenAccordion(0);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <S.Container>
      <S.QaWrap>
        {qaList.map((qa) => (
          <Accordion
            key={qa.id}
            question={qa.question}
            answer={qa.answer}
            isOpen={qa.id === openAccordion}
            id={qa.id}
            onClick={handleOnClick}
          />
        ))}
      </S.QaWrap>
    </S.Container>
  );
};
