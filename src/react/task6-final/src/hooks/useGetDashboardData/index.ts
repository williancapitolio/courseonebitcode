import { useManageItems } from "../useManageItems/index.ts";

import { ItemsType } from "../../types/ItemsType.ts";
import { useManageDates } from "../useManageDates/index.ts";

export const useGetDashboardData = () => {
  const { items } = useManageItems();

  const { dateFormatEn } = useManageDates();

  const calcItemsDiversity = [
    ...new Set(items.map((item: ItemsType) => item.cat)),
  ].length;

  const calcTotalInventory: number =
    items.length > 0
      ? (items as ItemsType[]).reduce(
          (acc: number, item: ItemsType): number => {
            return acc + Number(item.qtde);
          },
          0
        )
      : 0;

  const diffInDays = (dateOne: Date, dateTwo: Date) => {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    return Math.round(
      Math.abs((dateOne.getTime() - dateTwo.getTime()) / oneDayInMs)
    );
  };

  const limit = 10;
  const today = new Date(dateFormatEn);

  const calcRecentItems: ItemsType[] = items.filter((item) => {
    const created = new Date(item.createdAt as string);
    diffInDays(today, created) < limit;
  });

  const calcItemsRunningOut = items.filter((item: ItemsType) => {
    if (item.qtde < 10) return item;
  });

  return {
    calcItemsDiversity,
    calcTotalInventory,
    calcRecentItems,
    calcItemsRunningOut,
  };
};
