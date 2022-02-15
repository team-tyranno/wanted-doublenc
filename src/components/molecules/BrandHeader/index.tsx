import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import * as S from './style';

interface IBrandHeader {
  title: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

export const BrandHeader = ({ title, children }: IBrandHeader) => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Title>
        <button type="button" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </button>
        <div className="nav-title">{title}</div>
      </S.Title>
      {children}
    </S.Container>
  );
};
