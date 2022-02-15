import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_END_POINT } from 'commons';
import axios from 'axios';
import { ItemButton, ItemWarning } from 'components';
import { nanoid } from 'nanoid';
import * as S from './style';

interface IItemsProps {
  id: string;
  data: object;
}

const Items = ({ id, data }: IItemsProps) => {
  console.log('options', data.options);
  const splittedWarning = data.warning.split(/\[(.*)\]/g);
  const titles: Array<string> = [];
  const contents: Array<string> = [];
  for (let i = 1; i < splittedWarning.length; i += 1) {
    if (i % 2 === 1) titles.push(splittedWarning[i]);
    else contents.push(splittedWarning[i].trim());
  }

  return (
    <S.Container>
      {id}
      {Array.from(Array(titles.length).keys()).map((n) => (
        <ItemWarning key={nanoid()} title={titles[n]} content={contents[n]} />
      ))}
      <ItemButton options={data.options} />
    </S.Container>
  );
};

export async function getServerSideProps(context) {
  const conItemId = context.params.id;
  const conItemResult = await axios.get(`${API_END_POINT.CON_ITEMS}${conItemId}`);
  const conItemData = conItemResult.data;

  return {
    props: {
      id: conItemId,
      data: conItemData.conItem,
    },
  };
}

export default Items;
