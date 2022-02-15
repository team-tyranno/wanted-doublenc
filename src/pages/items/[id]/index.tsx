import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_END_POINT } from 'commons';
import axios from 'axios';
import { ItemButton, ItemWarning } from 'components';
import { nanoid } from 'nanoid';
import { formatDateString } from 'utils/formatDateString';
import * as S from './style';

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: string;
  warning: string;
  discountRate: number;
  info: string;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ConCategory2;
  options: Option[];
}

export interface ConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: ConCategory1;
}

export interface ConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}

export interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

interface IItemsProps {
  id: string;
  data: ConItem;
}

interface IParams {
  params: {
    id: string;
  };
}

const Items = ({ id, data }: IItemsProps) => {
  // console.log('data', data);
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

export async function getServerSideProps({ params }: IParams) {
  const conItemId = params.id;
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
