import { useState } from "react";

import { ItemsType } from "../../types/ItemsType";
import { useManageDates } from "../useManageDates";

export const useManageItems = () => {
  const [items, setItems] = useState<[] | ItemsType[]>(() => {
    const storedItems = localStorage.getItem("items-list");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const { dateFormatEn, dateFormat } = useManageDates();

  const createItem = ({ id, name, qtde, price, cat, desc }: ItemsType) => {
    setItems((state: ItemsType[]) => {
      const newState = [
        ...state,
        {
          id,
          name,
          qtde,
          price,
          cat,
          desc,
          createdAt: dateFormatEn,
          updatedAt: "",
          createdAtFormat: dateFormat,
          updatedAtFormat: "",
        },
      ];
      localStorage.setItem("items-list", JSON.stringify(newState));
      return newState;
    });
  };

  const updateItem = ({ id, name, qtde, price, cat, desc }: ItemsType) => {
    const itemFound = items.find((i: ItemsType) => i.id === id);
    if (!itemFound) return;

    setItems((state: ItemsType[]) => {
      if (itemFound) {
        itemFound.name = name;
        itemFound.qtde = qtde;
        itemFound.price = price;
        itemFound.cat = cat;
        itemFound.desc = desc;
        itemFound.updatedAt = dateFormatEn;
        itemFound.updatedAtFormat = dateFormat;
      }
      const index = state.indexOf(itemFound);
      state[index] = itemFound;

      localStorage.setItem("items-list", JSON.stringify(state));
      return state;
    });
  };

  const deleteItem = (id: number) => {
    setItems((state: ItemsType[]) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("items-list", JSON.stringify(newState));
      return newState;
    });
  };

  return { items, createItem, updateItem, deleteItem };
};
