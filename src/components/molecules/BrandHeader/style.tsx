import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 134px;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
  padding: 51px 0 0 17px;

  background: red;
`;

export const Title = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  & .nav-title {
    position: absolute;
    left: calc(50% - 100px / 6 + 0.5px);
  }
`;
