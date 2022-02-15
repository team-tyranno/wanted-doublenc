import { ItemOption } from 'components';
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
  const toggleOptions = () => (openOptions ? setOpenOptions(false) : setOpenOptions(true));
  const availableOptions = options.filter((option) => option.count > 0);

  return (
    <S.Background openOptions={openOptions} onClick={() => openOptions && toggleOptions()}>
      <S.Button openOptions={openOptions} onClick={() => toggleOptions()}>
        옵션 선택하기
        <S.Options openOptions={openOptions}>
          <S.Title>옵션 선택하기</S.Title>
          {availableOptions.map((e) => (
            <ItemOption
              key={nanoid()}
              count={e.count}
              expireAt={e.expireAt}
              sellingPrice={e.sellingPrice}
              discountRate={discountRate}
            />
          ))}
        </S.Options>
      </S.Button>
    </S.Background>
  );
};
