import { useState } from "react";

/* import { useGetDashboardData } from "../../hooks/useGetDashboardData"; */

import { items } from "../../mock-data.ts";

import { ItemsType } from "../../types/ItemsType";

import styles from "./styles.module.scss";

type InputType = Omit<ItemsType, "id" | "createdAt" | "updatedAt">;

export const FormItem = () => {
  const [inputs, setInputs] = useState({
    name: "",
    qtde: 0,
    price: 0,
    cat: "",
    desc: "",
  });

  /* const { dateFormatterToday } = useGetDashboardData(); */

  const handleChange = (ev: Event | React.SyntheticEvent) => {
    setInputs((prev: InputType) => ({
      ...prev,
      [(ev.target as HTMLInputElement).name]: (ev.target as HTMLInputElement)
        .value,
    }));
  };

  const handleSubmit = (ev: Event | React.SyntheticEvent) => {
    ev.preventDefault();
    console.log(inputs);
    /* const id = Math.floor(Math.random() * 100000); */
    /* const { name, qtde, price, cat, desc } = inputs; */
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" id="name" onChange={handleChange} />

      <label htmlFor="qtde">Quantidade</label>
      <input type="number" name="qtde" id="qtde" onChange={handleChange} />

      <label htmlFor="price">Preço</label>
      <input type="number" name="price" id="price" onChange={handleChange} />

      <label htmlFor="cat">Categoria</label>
      <select name="cat" id="cat" onChange={handleChange}>
        <option value="">Selecione uma categoria...</option>
        {items.map(({ cat }) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>

      <label htmlFor="desc">Descrição</label>
      <textarea name="desc" id="desc" onChange={handleChange} />

      <button>Salvar</button>
    </form>
  );
};
