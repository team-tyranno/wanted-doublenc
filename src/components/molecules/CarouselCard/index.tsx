/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import * as S from './style';

export const CarouselCard = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, title, src } = props.data;
  const { prevIndex } = props;

  return (
    <S.Wrapper>
      <img alt={title} src={src} style={{ cursor: id === prevIndex ? 'pointer' : 'default' }} />
    </S.Wrapper>
  );
};
