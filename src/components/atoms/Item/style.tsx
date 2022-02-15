import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  border-bottom: 1px solid #eee;

  padding: 15px 0 15px 21px;

  cursor: pointer;

  & img {
    width: 70px;
    height: 70px;

    margin-right: 17px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  & .title {
    padding-bottom: 13px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .rate {
    font-size: 16px;
    color: #ff5757;
    margin-right: 9px;
  }

  & .original-price {
    font-weight: 500;
    font-size: 16px;
    margin-right: 6px;
  }

  & .discount-price {
    font-size: 14px;
    color: #808080;
    text-decoration-line: line-through;
  }
`;
