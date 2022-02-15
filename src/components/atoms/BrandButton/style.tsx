import styled from 'styled-components';

export const Container = styled.div`
  width: 111px;
  height: 111px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;

  & img {
    width: 36px;
    height: 36px;

    margin-bottom: 15px;
  }

  & div {
    font-size: 12px;
  }
`;
