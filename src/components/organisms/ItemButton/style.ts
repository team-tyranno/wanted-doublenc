import styled from 'styled-components';

export const Button = styled.button<{ openOptions: boolean }>`
  background-color: #ff5757;
  height: 80px;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  ${(props) => props.openOptions && `background-color: #cccccc`}
  z-index: 10;
  padding: 0;
`;

export const Options = styled.div`
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  color: black;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 14px;
  background-color: #f1f3f4;
  width: 100%;
  padding: 20px 0;
`;
