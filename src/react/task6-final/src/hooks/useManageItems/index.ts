import { useState } from "react";

import { ItemsType } from "../../types/ItemsType";

export const useManageItems = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items-list");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const createItem = ({ name, qtde, price, cat, desc }: ItemsType) => {
    const id = Math.floor(Math.random() * 100000);
    const createdAt = (date = new Date(), locale = "pt-BR") => {
      return new Intl.DateTimeFormat(locale).format(date);
    };

    setItems((state: ItemsType[]) => {
      const newState = [
        ...state,
        { id, name, qtde, price, cat, desc, createdAt },
      ];
      localStorage.setItem("items-list", JSON.stringify(newState));
      return newState;
    });
  };

  /* const readItemById = (id: number) => {
    const itemFound = items.find((i: ItemsType) => i.id === id);
    if (!itemFound) return null
    return itemFound
  }; */

  /* const updateItem = ({ id, name, qtde, price, cat, desc }: ItemsType) => {
    const localItem = localStorage.getItem("items-list");
    const itemFound: ItemsType = localItem.find((i: ItemsType) => i.id === id);
  }; */

  const deleteItem = (id: number) => {
    setItems((state: ItemsType[]) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("items-list", JSON.stringify(newState));
      return newState;
    });
  };

  return { items, createItem, deleteItem };
};
