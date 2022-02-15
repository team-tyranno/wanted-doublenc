import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavBar, ContentsDivider, CustomerServiceInfo, Faq, MenuSelector, Cross } from 'components';
import { API_END_POINT } from 'commons';
import { Qa, ICategoryDetailProps } from 'types';
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

export const Button = styled.button`
  -webkit-box-direction: normal;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  box-shadow: none !important;
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  padding: 19px;
`;

interface IContactsProps {
  qaTypes: Array<ICategoryDetailProps>;
  qaLists: {
    [key: number]: [
      {
        id: number;
        question: string;
        answer: string;
      },
    ];
  };
}

const Contacts = ({ qaTypes, qaLists }: IContactsProps) => {
  const [chosenTypeId, setChosenTypeId] = useState<number>(qaTypes[0].id);
  const router = useRouter();

  return (
    <>
      <NavBar
        title="고객센터"
        rightButton={
          <Button type="button" onClick={() => router.back()}>
            <Cross />
          </Button>
        }
      />
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

// 에러처리
export const getStaticProps = async () => {
  const qaTypesResult = await axios.get(API_END_POINT.QA_TYPES);
  const qaTypesData = qaTypesResult.data.qaTypes.map((qaType: Qa) => ({
    id: qaType.id,
    name: qaType.name,
  }));

  const temp = await Promise.all(
    qaTypesData.map(async (qaType: Qa) => {
      return axios.get(`${API_END_POINT.QA_LISTS}${qaType.id}`);
    }),
  );

  const qaListsData = temp.reduce((acc, current, idx) => {
    return { ...acc, [qaTypesData[idx].id]: current.data.qas };
  }, {});

  return {
    props: {
      qaTypes: qaTypesData,
      qaLists: qaListsData,
    },
  };
};
