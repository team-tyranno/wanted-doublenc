import { useState } from 'react';
import { Caret } from 'components';
import * as S from './style';

const footerLinks = [
  {
    id: 1,
    text: '회사소개서',
    link: 'https://ncnc-public.s3.ap-northeast-2.amazonaws.com/doublenc.pdf',
  },
  {
    id: 2,
    text: '사업/제휴 문의',
    link: 'mailTo:contact@doublenc.com',
  },
  {
    id: 3,
    text: '회사소개서',
    link: 'https://ncnc.io/privacy',
  },
];

export const MainFooter = () => {
  const [isFooterInfoShown, setIsFooterInfoShown] = useState(false);
  const toggleFooterInfo = () => {
    setIsFooterInfoShown(!isFooterInfoShown);
  };

  return (
    <S.Wrapper data-test="footer-wrapper">
      <nav>
        {footerLinks.map((data) => {
          const { id, text, link } = data;

          return (
            <a key={id} href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          );
        })}
      </nav>

      <button type="button" data-test="footer-toggle" onClick={toggleFooterInfo}>
        <h5>(주) 더블엔씨</h5>
        <Caret direction={isFooterInfoShown ? 'up' : 'down'} />
      </button>
      <p data-test="footer-info" className={isFooterInfoShown ? '' : 'hide'}>
        대표 : 박진희 <span>|</span> 이메일 : cs@doublenc.com
        <br />
        사업자 등록번호 : 290-86-00970
        <br />
        통신판매업신고번호 : 제2020-서울성동-00206호
        <br />
        서울특별시 성동구 왕십리로10길 6 서울숲비즈포레
      </p>
    </S.Wrapper>
  );
};
