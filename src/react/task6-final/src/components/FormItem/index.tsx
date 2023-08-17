import { useState } from "react";

/* import { useGetDashboardData } from "../../hooks/useGetDashboardData"; */

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

      <button>Clique</button>
    </form>
  );
};
