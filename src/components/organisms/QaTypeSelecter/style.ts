import styled from 'styled-components';

export const Container = styled.section`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 14px;
  font-family: apple sd gothic neo, sans-serif;
  color: #333;
  -webkit-box-direction: normal;
  display: block;
  box-sizing: border-box;
  padding: 17px 17px 0px;
  background: #ffffff;
`;

export const Title = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-family: apple sd gothic neo, sans-serif;
  color: #333;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const QaTypeButtons = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 14px;
  font-family: apple sd gothic neo, sans-serif;
  color: #333;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  display: flex;
`;

export const Button = styled.button<{ underLine: boolean }>`
  -webkit-text-size-adjust: 100%;
  -webkit-box-direction: normal;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  box-shadow: none !important;
  cursor: pointer;
  background-color: #fff;
  padding: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  border: none;

  ${(props) =>
    props.underLine ? 'color: #f75656;border-bottom: 2px solid #f75656;' : 'color:#333;'}
`;
