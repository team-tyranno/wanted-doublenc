import { fetchDatas } from 'utils/fetchDatas';
import { CON_CATEGORYS, CON_ITEMS, BRAND_LISTS } from 'commons';
import { ICafeProps } from 'types';

async function getParseObject(url: string) {
  const allDatas = await fetchDatas(url);

  const parsedDatas = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in allDatas) {
    if (Object.prototype.hasOwnProperty.call(allDatas, key)) {
      parsedDatas.push(allDatas[key]);
    }
  }

  return parsedDatas;
}

// [Main] 대분류 리스트 조회
export async function getCategoryList() {
  const parsedDatas = await getParseObject(CON_CATEGORYS);
  console.log(parsedDatas[0]);

  return parsedDatas[0];
}

// [Main] 땡처리 리스트 조회
export async function getItemList() {
  const parsedDatas = await getParseObject(CON_ITEMS);
  console.log(parsedDatas[0]);

  return parsedDatas[0];
}

export async function getCategoryPath() {
  const parsedDatas: Array<ICafeProps> = await getParseObject(BRAND_LISTS);

  return parsedDatas.map((parsedData) => ({ params: { categoryId: parsedData.id.toString() } }));
}

export async function getCategotyData(id: number) {
  const parsedDatas: Array<ICafeProps> = await getParseObject(BRAND_LISTS);

  return parsedDatas.find((parsedData) => {
    return parsedData.id === Number(id);
  });
}

export async function getBrandsData(id: number, query: number) {
  const parsedDatas = (await getCategotyData(id)) as ICafeProps;

  return parsedDatas.conCategory2s.filter((parsedData) => {
    return parsedData.id === Number(query);
  });
}

export async function getMenuList() {
  const parsedDatas = await getParseObject(CON_CATEGORYS);

  return parsedDatas[0];
}
