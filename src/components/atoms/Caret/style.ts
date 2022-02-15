import styled from 'styled-components';

export const Container = styled.span`
  -webkit-text-size-adjust: 100%;
  -webkit-box-direction: normal;
  font-family: sans-serif;
  line-height: 1.15;
  text-transform: none;
  cursor: pointer;
  color: #333;
  font-size: 15px;
  font-weight: 500;
`;

export const Svg = styled.svg<{ degree: number }>`
  fill: none;
  align-self: center;
  overflow: hidden;
  transform: rotate(${(props) => props.degree}deg);
`;
