import * as S from './style';

interface QaType {
  id: number;
  key: string;
  name: string;
}

interface IQaTypeSelectorProps {
  qaTypeList: QaType[];
  selected: string;
  onClick: (key: string) => void;
}

export const QaTypeSelector = ({ qaTypeList, selected, onClick }: IQaTypeSelectorProps) => {
  return (
    <S.Container>
      <S.Title>자주 묻는 질문</S.Title>
      <S.QaTypeButtons>
        {qaTypeList.map((qaType) => (
          <S.Button
            key={qaType.key}
            underLine={qaType.key === selected}
            onClick={() => onClick(qaType.key)}
          >
            {qaType.name}
          </S.Button>
        ))}
      </S.QaTypeButtons>
    </S.Container>
  );
};
