import { useState, useEffect } from 'react';
import { ContentsDivider, CustomerServiceInfo, Faq, QaTypeSelector } from 'components';
import { API_END_POINT } from 'commons';
import { Qa } from 'types';
import axios from 'axios';

import * as S from './style';

interface QaLists {
  [key: string]: [
    {
      id: number;
      question: string;
      answer: string;
    },
  ];
}

const Contacts = () => {
  const [qaTypes, setQaTypes] = useState({
    qaTypes: [{ id: 1, key: '', name: '' }],
  });
  const [qaLists, setQaLists] = useState<QaLists>({
    buy: [
      {
        id: 1,
        question: '',
        answer: '',
      },
    ],
  });
  const [chosenType, setChosenType] = useState<string>('buy');

  // custom hook으로 만들기?
  // 에러처리
  useEffect(() => {
    const fetchData = async () => {
      const qaTypesResult = await axios.get(API_END_POINT.QA_TYPES);
      const qaTypesData = qaTypesResult.data;
      setQaTypes(qaTypesData);

      const temp = await Promise.all(
        qaTypesData.qaTypes.map(async (qaType: Qa) => {
          return axios.get(`${API_END_POINT.QA_LISTS}${qaType.id}`);
        }),
      );

      const qaListsData = temp.reduce((acc, current, idx) => {
        return { ...acc, [qaTypesData.qaTypes[idx].key]: current.data.qas };
      }, {});

      setQaLists(qaListsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <S.Nav />
      <S.Container>
        <CustomerServiceInfo />
        <ContentsDivider />
        <QaTypeSelector
          qaTypeList={qaTypes.qaTypes}
          selected={chosenType}
          onClick={setChosenType}
        />
        <ContentsDivider />
        <Faq qaList={qaLists[chosenType]} />
      </S.Container>
    </>
  );
};

export default Contacts;
