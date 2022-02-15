import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  border-bottom: 1px solid #eee;

  & img {
    width: 70px;
    height: 70px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .rate {
    font-size: 16px;
    color: #ff5757;
  }

  & .original-price {
    font-weight: 500;
    font-size: 16px;
  }

  & .discount-price {
    font-size: 14px;
    color: #808080;
    text-decoration-line: line-through;
  }
`;
