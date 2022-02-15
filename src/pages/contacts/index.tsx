import { useState, useEffect } from 'react';
import { ContentsDivider, CustomerServiceInfo, Faq, MenuSelector } from 'components';
import { API_END_POINT } from 'commons';
import { Qa } from 'types';
import axios from 'axios';

import styled from 'styled-components';

export const Container = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 14px;
  font-family: apple sd gothic neo, sans-serif;
  color: #333;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  display: flex;
  margin-top: 59px;
  flex-direction: column;
`;

// 임시
export const Navbar = styled.div`
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 15px;
  font-family: Apple SD Gothic Neo, sans-serif;
  font-weight: 600;
  color: #000000;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  background-color: #fff;
  height: 59px;
  z-index: 50;
  width: 373px;
  max-width: 48rem;
  border-bottom: 1px solid transparent;
  padding: 0px;
  margin: 0px;
`;

interface QaLists {
  [key: number]: [
    {
      id: number;
      question: string;
      answer: string;
    },
  ];
}

const Contacts = () => {
  const [qaTypes, setQaTypes] = useState([
    {
      id: 1,
      name: '',
    },
  ]);
  const [qaLists, setQaLists] = useState<QaLists>({
    1: [
      {
        id: 1,
        question: '',
        answer: '',
      },
    ],
  });
  const [chosenTypeId, setChosenTypeId] = useState<number>(0);

  // custom hook으로 만들기?
  // 에러처리
  useEffect(() => {
    const fetchData = async () => {
      const qaTypesResult = await axios.get(API_END_POINT.QA_TYPES);
      const qaTypesData = qaTypesResult.data;
      setQaTypes(
        qaTypesData.qaTypes.map((qaType: Qa) => ({
          id: qaType.id,
          name: qaType.name,
        })),
      );
      setChosenTypeId(qaTypesData.qaTypes[0].id); // chosenTypeId 초기화

      const temp = await Promise.all(
        qaTypesData.qaTypes.map(async (qaType: Qa) => {
          return axios.get(`${API_END_POINT.QA_LISTS}${qaType.id}`);
        }),
      );

      const qaListsData = temp.reduce((acc, current, idx) => {
        return { ...acc, [qaTypesData.qaTypes[idx].id]: current.data.qas };
      }, {});

      setQaLists(qaListsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <CustomerServiceInfo />
        <ContentsDivider />
        <MenuSelector
          title="자주 묻는 질문"
          menuList={qaTypes}
          selected={chosenTypeId}
          onClick={setChosenTypeId}
        />
        <ContentsDivider />
        <Faq qaList={qaLists[chosenTypeId]} />
      </Container>
    </>
  );
};

export default Contacts;
