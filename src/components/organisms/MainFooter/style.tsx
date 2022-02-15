import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border-top: 1px solid #eeeeee;
  padding: 20px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  line-height: 1.15;

  nav a {
    display: block;
    padding: 5px;

    color: #888888;
    font-size: 12px;
    font-weight: 300;
    cursor: pointer;
  }

  button {
    display: flex;
    flex-direction: row;

    border: none;
    outline: none;

    background: none;
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    svg {
      width: 14;
      height: 8;
      margin: 0 4px;
    }
  }

  p {
    color: #999999;
    font-size: 11px;
    line-height: 1.7;

    span {
      margin: 0 4px;
    }

    &.hide {
      display: none;
    }
  }
`;
