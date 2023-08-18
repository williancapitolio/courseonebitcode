import { useState } from "react";

import { ItemsType } from "../../types/ItemsType";

export const useManageItems = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items-list");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const dateNow = (date = new Date(), locale = "pt-BR") => {
    return new Intl.DateTimeFormat(locale).format(date);
  };

  const createItem = ({ name, qtde, price, cat, desc }: ItemsType) => {
    const id = Math.floor(Math.random() * 100000);

    setItems((state: ItemsType[]) => {
      const newState = [
        ...state,
        { id, name, qtde, price, cat, desc, createdAt: dateNow },
      ];
      localStorage.setItem("items-list", JSON.stringify(newState));
      return newState;
    });
  };

  const updateItem = ({ id, name, qtde, price, cat, desc }: ItemsType) => {
    setItems((state: ItemsType[]) => {
      const itemFound = state.find((i) => i.id === id);
      if (itemFound) {
        itemFound.name = name;
        itemFound.qtde = qtde;
        itemFound.price = price;
        itemFound.cat = cat;
        itemFound.desc = desc;
        itemFound.updatedAt = dateNow;

        const index = state.indexOf(itemFound);
        state[index] = itemFound;

        localStorage.setItem("items-list", JSON.stringify(state));
        return state;
      }
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
