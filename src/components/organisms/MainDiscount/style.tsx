import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 12px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  line-height: 1.2;

  span {
    padding-left: 17px;
    color: #ff5757;
    font-size: 13px;
    font-weight: 500;
  }

  h4 {
    margin: 5px 0 14px;
    padding-left: 17px;
    color: #000000;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Card = styled.article`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  border-top: 1px solid #eeeeee;
  padding: 17px;
  background-color: #ffffff;

  .card-image {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-color: #f1f3f4;
    background-position: center;
    background-size: cover;
  }

  .card-info {
    width: 240px;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    line-height: 1.2;

    h6 {
      margin: 7px 0 13px;
      color: #000000;
      font-size: 16px;
      font-weight: 400;
    }

    span,
    del {
      padding-left: 0;
      color: #808080;
      font-size: 14px;
      font-weight: 400;

      &.discount-rate {
        color: #ff5757;
        font-size: 16px;
        font-weight: 500;
      }
    }

    strong {
      margin: 0 10px;
      color: #000000;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
