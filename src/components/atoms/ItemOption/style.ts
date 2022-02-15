import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  background-color: #ffffff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const DiscountRate = styled.div`
  color: #ff5757;
  font-weight: 400;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
`;

export const Content = styled.span`
  position: absolute;
  left: 50px;
  font-weight: 400;
  min-width: max-content;
`;
