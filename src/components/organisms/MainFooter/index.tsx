import { useState } from 'react';
import { Caret } from 'components';
import { footerLinks } from '../../../../public/footerData.json';
import * as S from './style';

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
