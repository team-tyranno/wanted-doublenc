import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import * as S from './style';

interface IBrandHeader {
  title: string;
  children: React.ReactNode;
}

export const BrandHeader = ({ title, children }: IBrandHeader) => {
  return (
    <S.Container>
      <S.Title>
        <span>
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </span>
        <div className="nav-title">{title}</div>
      </S.Title>
      {children}
    </S.Container>
  );
};
