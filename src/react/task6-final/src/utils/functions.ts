import { items } from "../mock-data.ts";

export const dateFormatterToday = (date = new Date(), locale = "en-US") => {
  return new Intl.DateTimeFormat(locale).format(date);
};

export const calcDifferenceBetweenTwoDays = (date: string) => {
  const createdDate = new Date(date);
  const todayDate = new Date(dateFormatterToday());
  
  const diffTime = Math.abs(+todayDate - +createdDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export const calcItemsDiversity = [...new Set(items.map((item) => item.cat))]
  .length;

export const calcTotalInventory = items.reduce((acc, item) => {
  return acc + item.qtde;
}, 0);

/* A quantidade de itens adicionados nos últimos 10 dias. */
/* export const calcRecentItems; */
export const calcRecentItems = items.filter((item) => {
  if (calcDifferenceBetweenTwoDays(item.createdAt) < 10) return item;
}).length;

export const calcItemsRunningOut = items.filter((item) => {
  if (item.qtde < 10) return item;
}).length;
