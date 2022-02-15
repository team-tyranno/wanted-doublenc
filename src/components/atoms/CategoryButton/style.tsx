import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 111px;
  height: 111px;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
    margin-bottom: 15px;
  }

  span {
    font-size: 12px;
  }
`;
