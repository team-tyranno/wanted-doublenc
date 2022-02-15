const CON_CATEGORYS = 'https://api2.ncnc.app/con-category1s';

const CON_ITEMS = 'https://api2.ncnc.app/con-items/soon';

const BRAND_LISTS = 'https://api2.ncnc.app/con-category1s/67/nested';

const ITEM_DETAIL = (id: string) => `https://api2.ncnc.app/con-items/${id}`;

const FAQ_TYPES = 'https://api2.ncnc.app/qa-types';

const FAQ_LISTS = (id: string) => `https://api2.ncnc.app/qas?qaTypeId=${id}`;

export { CON_CATEGORYS, CON_ITEMS, BRAND_LISTS, ITEM_DETAIL, FAQ_TYPES, FAQ_LISTS };
