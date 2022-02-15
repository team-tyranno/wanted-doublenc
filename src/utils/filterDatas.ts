import { fetchDatas } from 'utils/fetchDatas';
import { BRAND_LISTS } from 'commons';

async function getParseObject() {
  const allDatas = await fetchDatas(BRAND_LISTS);

  const parsedDatas = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in allDatas) {
    if (Object.prototype.hasOwnProperty.call(allDatas, key)) {
      parsedDatas.push(allDatas[key]);
    }
  }

  return parsedDatas;
}

export async function getCategoryPath() {
  const parsedDatas = await getParseObject();

  return parsedDatas.map((parsedData) => ({ params: { categoryId: parsedData.id.toString() } }));
}

export async function getCategotyData(id: string) {
  const parsedDatas = await getParseObject();

  return parsedDatas.find((parsedData) => {
    return parsedData.id.toString() === id;
  });
}
