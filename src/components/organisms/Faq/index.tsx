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
  return (
    <S.Container>
      <S.QaWrap>
        {qaList.map((qa) => (
          <Accordion key={qa.id} question={qa.question} answer={qa.answer} />
        ))}
      </S.QaWrap>
    </S.Container>
  );
};
