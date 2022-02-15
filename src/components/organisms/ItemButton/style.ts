import styled from 'styled-components';

interface IProps {
  openOptions: boolean;
  selectedOption: string | null;
}

export const Background = styled.div<{ openOptions: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  top: 0;
  overflow-y: hidden;
  ${(props) => props.openOptions && `background-color: rgba(0, 0, 0, 0.3);`}
`;

export const SelectedOption = styled.div`
  height: 60px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  position: absolute;
  bottom: 80px;

  font-size: 14px;
  font-weight: 500;
  padding: 15px;
`;

export const Div = styled.div`
  background-color: #f1f3f4;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Button = styled.button<IProps>`
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
  ${(props) => props.selectedOption && `background-color: #ff5757;`}
  z-index: 10;
  padding: 0;
`;

export const Options = styled.div<{ openOptions: boolean }>`
  width: 100%;
  position: absolute;
  top: 420px;
  color: black;
  height: 230px;
  display: flex;
  flex-direction: column;
  background-color: #f1f3f4;
  z-index: 5;
  ${(props) =>
    props.openOptions &&
    `transform: translateY(-230px);
  transition: transform .2s linear;`}
`;

export const Title = styled.div`
  font-size: 14px;
  background-color: #f1f3f4;
  width: 100%;
  padding: 20px;
`;

export const OptionList = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
