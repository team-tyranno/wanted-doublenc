import styled from 'styled-components';

export const Background = styled.div<{ openOptions: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  ${(props) => props.openOptions && `background-color: rgba(0, 0, 0, 0.3);`}
`;

export const Button = styled.button<{ openOptions: boolean }>`
  background-color: #ff5757;
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  ${(props) => props.openOptions && `background-color: #cccccc;`}
  z-index: 10;
  padding: 0;
`;

export const Options = styled.div<{ openOptions: boolean }>`
  width: 100%;
  position: absolute;
  top: 80px;
  color: black;
  display: none;
  flex-direction: column;
  background-color: #ffffff;
  ${(props) =>
    props.openOptions &&
    `display: flex;
  transform: translateY(-300px)`}
`;

export const Title = styled.div`
  font-size: 14px;
  background-color: #f1f3f4;
  width: 100%;
  padding: 20px 0;
`;
