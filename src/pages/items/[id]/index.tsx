import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import {  } from 'components';
import { API_END_POINT } from 'commons';
import axios from 'axios';

import * as S from './style';

// interface QaLists {
//   [key: string]: [
//     {
//       id: number;
//       question: string;
//       answer: string;
//     },
//   ];
// }

export async function getServerSideProps(context) {
  const conItemId = context.params.id;
  const conItemResult = await axios.get(`${API_END_POINT.CON_ITEMS}${conItemId}`);
  const conItemData = conItemResult.data;

  return {
    props: {
      item: data,
    },
  };
}

const Items = () => {
  // const router = useRouter();
  // const conItemId = router.query.id;
  // console.log(conItemId);
  // const [conItem, setConItem] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // console.log(`${API_END_POINT.CON_ITEMS}${conItemId}`);
  //     const conItemResult = await axios.get(`${API_END_POINT.CON_ITEMS}${conItemId}`);
  // const conItemData = conItemResult.data;
  // setConItem(conItemData);
  // const qaTypesResult = await axios.get(API_END_POINT.QA_TYPES);
  // const qaTypesData = qaTypesResult.data;
  // setQaTypes(qaTypesData);
  // const temp = await Promise.all(
  //   qaTypesData.qaTypes.map(async (qaType: Qa) => {
  //     return axios.get(`${API_END_POINT.QA_LISTS}${qaType.id}`);
  //   }),
  // );
  // const qaListsData = temp.reduce((acc, current, idx) => {
  //   return { ...acc, [qaTypesData.qaTypes[idx].key]: current.data.qas };
  // }, {});
  // setQaLists(qaListsData);
  //   };
  //   fetchData();
  // }, []);

  return <S.Container>{conItemId}</S.Container>;
};

export default Items;
