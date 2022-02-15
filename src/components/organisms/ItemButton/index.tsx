import { ItemOption, Pencil } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import * as S from './style';

interface IOptions {
  count: number;
  expireAt: string;
  sellingPrice: number;
}

interface IItemButtonProps {
  options: Array<IOptions>;
  discountRate: number;
}

export const ItemButton = ({ options, discountRate }: IItemButtonProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);

  const toggleOptions = () => {
    if (openOptions) setOpenOptions(false);
    else setOpenOptions(true);
  };
  const availableOptions = options.filter((option) => option.count > 0);

  return (
    <S.Background openOptions={openOptions} onClick={() => openOptions && toggleOptions()}>
      {selectedOption && (
        <S.SelectedOption>
          <S.Div
            onClick={() => {
              setSelectedOption(null);
              setOpenOptions(true);
            }}
          >
            {selectedOption}
            <Pencil />
          </S.Div>
        </S.SelectedOption>
      )}
      <S.Button
        openOptions={openOptions}
        selectedOption={selectedOption}
        onClick={() => !selectedOption && toggleOptions()}
      >
        {!openOptions && !selectedOption ? '옵션 선택하기' : '구매하기'}
      </S.Button>
      <S.Options openOptions={openOptions}>
        <S.Title>옵션 선택하기</S.Title>
        <S.OptionList>
          {availableOptions.map((e) => (
            <ItemOption
              key={nanoid()}
              setSelectedOption={setSelectedOption}
              count={e.count}
              expireAt={e.expireAt}
              sellingPrice={e.sellingPrice}
              discountRate={discountRate}
            />
          ))}
        </S.OptionList>
      </S.Options>
    </S.Background>
  );
};
