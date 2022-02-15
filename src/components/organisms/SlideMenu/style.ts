import styled from 'styled-components';

export const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  z-index: 10000;

  background: #ffffff;

  transition: transform 0.2s ease 0s;
  transform: translate3d(${(props) => (props.visible ? '0vw' : '-100vw')}, 0, 0);
`;

export const Wrapper = styled.div`
  line-height: 1;
  -webkit-text-size-adjust: 100%;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  display: flex;
  margin-top: 59px;
  flex-direction: column;
`;

export const Button = styled.button`
  -webkit-box-direction: normal;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  padding: 17px;
  width: 100%;
`;

export const ButtonDescription = styled.span`
  -webkit-box-direction: normal;
  text-transform: none;
  font-size: 15px;
  font-weight: 500;
  font-family: Apple SD Gothic Neo, sans-serif;
  cursor: pointer;
  flex-grow: 1;
  text-align: left;
`;
