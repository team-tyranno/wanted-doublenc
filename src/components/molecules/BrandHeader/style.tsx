import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 134px;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;

  background: #ffffff;
`;

export const Title = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  margin-bottom: 30px;

  & button {
    margin-left: 20px;
    outline: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  & .nav-title {
    position: absolute;
    left: calc(50% - 100px / 3.5 + 0.5px);
  }
`;
