import { useState } from "react";

type CatsType = {
  cat: string;
};

export const useManageCats = () => {
  const [catsList, setCatsList] = useState<[] | CatsType[]>(() => {
    const storedCats = localStorage.getItem("cats-list");
    if (!storedCats) return [];
    return JSON.parse(storedCats);
  });

  const createCat = ({ cat }: CatsType) => {
    setCatsList((state: CatsType[]) => {
      const newState = [...state, { cat }];
      localStorage.setItem("cats-list", JSON.stringify(newState));
      return newState;
    });
  };

  return { catsList, createCat };
};
