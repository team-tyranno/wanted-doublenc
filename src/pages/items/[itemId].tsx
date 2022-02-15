import { useRouter } from 'next/router';
import { API_END_POINT } from 'commons';
import axios from 'axios';
import { ItemButton, ItemWarning, NavBar, Caret, ItemInfo } from 'components';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

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

export const Container = styled.div`
  background: #ffffff;
  height: 100%;
`;

export const Body = styled.div`
  position: relative;
  min-height: 500px;
`;

export const BottomDiv = styled.div`
  height: 80px;
`;

interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  warning: string;
  discountRate: number;
  imageUrl: string;
  conCategory2: ConCategory2;
  options: Option[];
}

interface ConCategory2 {
  id: number;
  name: string;
}

interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

// interface IItemsProps {
//   id: string;
//   data: ConItem;
// }

interface IParams {
  params: {
    itemId: string;
  };
}

const Items = ({ data }: { data: ConItem }) => {
  const router = useRouter();
  let splittedWarning: Array<string> = [];
  if (data.warning) {
    splittedWarning = data.warning?.split(/\[(.*)\]/g);
  }
  const titles: Array<string> = [];
  const contents: Array<string> = [];
  const itemInfoData = {
    id: data.id,
    brand: data.conCategory2.name,
    name: data.name,
    originalPrice: data.originalPrice,
    minSellingPrice: data.minSellingPrice,
    imageUrl: data.imageUrl,
  };
  const itemOptions = {
    options: data.options,
    discountRate: data.discountRate,
  };

  for (let i = 1; i < splittedWarning.length; i += 1) {
    if (i % 2 === 1) titles.push(splittedWarning[i]);
    else contents.push(splittedWarning[i].trim());
  }

  return (
    <Container>
      <NavBar
        leftButton={
          <Button type="button" onClick={() => router.back()}>
            <Caret direction="left" />
          </Button>
        }
      />
      <ItemInfo data={itemInfoData} />
      <Body>
        {data.warning &&
          Array.from(Array(titles.length).keys()).map((n) => (
            <ItemWarning key={nanoid()} title={titles[n]} content={contents[n]} />
          ))}
        <BottomDiv />
        <ItemButton options={itemOptions.options} discountRate={itemOptions.discountRate} />
      </Body>
    </Container>
  );
};

export async function getServerSideProps({ params }: IParams) {
  const conItemId = params.itemId;
  const conItemResult = await axios.get(`${API_END_POINT.CON_ITEMS}${conItemId}`);
  const conItemData = conItemResult.data;

  return {
    props: {
      // id: conItemId,
      data: conItemData.conItem,
    },
  };
}

export default Items;
