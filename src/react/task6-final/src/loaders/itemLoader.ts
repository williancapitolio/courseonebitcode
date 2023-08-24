import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

import { useManageItems } from "../hooks/useManageItems";

/* import { ItemsType } from "../types/ItemsType"; */

export const itemLoader = ({ params }: LoaderFunctionArgs): LoaderFunction => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { items } = useManageItems();

  const item= items.find((it) => it.id === Number(params.itemId));

  return item;
};
