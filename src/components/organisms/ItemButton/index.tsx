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
}

export const ItemButton = ({ options }: IItemButtonProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const toggleOptions = () => (openOptions ? setOpenOptions(false) : setOpenOptions(true));
  const availableOptions = options.filter((option) => option.count > 0);

  return (
    <S.Button openOptions={openOptions} onClick={() => toggleOptions()}>
      옵션 선택하기
      <S.Options>
        <S.Title>옵션 선택하기</S.Title>
        {availableOptions.map((e) => (
          <ItemOption
            key={nanoid()}
            count={e.count}
            expireAt={e.expireAt}
            sellingPrice={e.sellingPrice}
          />
        ))}
      </S.Options>
    </S.Button>
  );
};
