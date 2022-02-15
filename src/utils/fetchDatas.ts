export async function fetchDatas(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
  return null;
}
