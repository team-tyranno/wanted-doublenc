import styled from 'styled-components';

export const Container = styled.div`
  line-height: 1.33;
  -webkit-text-size-adjust: 100%;
  font-size: 15px;
  font-weight: 500;
  font-family: Apple SD Gothic Neo, sans-serif;
  color: #333;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  border-bottom: 2px solid #ebeced;
`;

export const FAQ = styled.button`
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

export const QMark = styled.span`
  -webkit-box-direction: normal;
  text-transform: none;
  cursor: pointer;
  margin-right: 10px;
  color: rgb(255, 87, 87);
`;

export const Question = styled.span`
  -webkit-box-direction: normal;
  text-transform: none;
  font-size: 15px;
  font-weight: 500;
  font-family: Apple SD Gothic Neo, sans-serif;
  cursor: pointer;
  flex-grow: 1;
  text-align: left;
`;

export const AnswerBox = styled.div`
  -webkit-box-direction: normal;
  box-sizing: border-box;
  background-color: rgb(235, 236, 237);
  padding: 17px;
`;

export const AnswerWrap = styled.div`
  color: #333;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-weight: 400;
  transition: all 1.5s ease 0s;
  line-height: 1.4;
`;
