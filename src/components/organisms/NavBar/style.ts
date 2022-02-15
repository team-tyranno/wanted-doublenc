import styled from 'styled-components';

export const Container = styled.nav`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 15px;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-weight: 600;
  color: #000000;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  background-color: #fff;
  height: 59px;
  z-index: 50;
  width: 373px;
  max-width: 48rem;
  border-bottom: 1px solid transparent;
  padding: 0px;
  margin: 0px;
`;

export const LeftButtonWrap = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  min-width: 90px;
`;

export const TitleWrap = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-family: Apple SD Gothic Neo, sans-serif;
  color: #000000;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 600;
  flex: 3;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RightButtonWrap = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  min-width: 90px;
  justify-content: flex-end;
`;
