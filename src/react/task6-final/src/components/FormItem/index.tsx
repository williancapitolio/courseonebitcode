import { useState } from "react";

/* import { useGetDashboardData } from "../../hooks/useGetDashboardData"; */

import { items } from "../../mock-data.ts";

import { ItemsType } from "../../types/ItemsType";

import styles from "./styles.module.scss";

type InputType = Omit<ItemsType, "id" | "createdAt" | "updatedAt">;

type FormProps = {
  title: string;
} & InputType;

export const FormItem = ({
  title,
  name,
  qtde,
  price,
  cat,
  desc,
}: FormProps) => {
  const [inputs, setInputs] = useState({
    name: "",
    qtde: 0,
    price: 0,
    cat: "",
    desc: "",
  });

  /* const { dateFormatterToday } = useGetDashboardData(); */

  const uniqueCats = [...new Set(items.map((item) => item.cat))]

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
      <div className={styles.wrapperTitle}>
        <h3 className={styles.wrapperTitleContent}>{title}</h3>
      </div>
      <div className={styles.wrapperUnion}>
        <div className={styles.wrapperUnionDiv}>
          <label htmlFor="name" className={styles.wrapperUnionDivLabel}>
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className={styles.wrapperUnionDivInput}
            value={name}
          />
        </div>

        <div className={styles.wrapperUnionDiv}>
          <label htmlFor="qtde" className={styles.wrapperUnionDivLabel}>
            Quantidade
          </label>
          <input
            type="number"
            name="qtde"
            id="qtde"
            onChange={handleChange}
            className={styles.wrapperUnionDivInput}
            value={qtde}
          />
        </div>

        <div className={styles.wrapperUnionDiv}>
          <label htmlFor="price" className={styles.wrapperUnionDivLabel}>
            Preço
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            className={styles.wrapperUnionDivInput}
            value={price}
          />
        </div>

        <div className={styles.wrapperUnionDiv}>
          <label htmlFor="cat" className={styles.wrapperUnionDivLabel}>
            Categoria
          </label>
          <select
            name="cat"
            id="cat"
            onChange={handleChange}
            className={styles.wrapperUnionDivInput}
          >
            <option value="" className={styles.wrapperUnionDivOption}>
              {cat}
            </option>
            {uniqueCats.map((cat, index) => (
              <option
                key={index}
                value={cat}
                className={styles.wrapperUnionDivOption}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.wrapperDesc}>
        <label htmlFor="desc" className={styles.wrapperDescLabel}>
          Descrição
        </label>
        <textarea
          name="desc"
          id="desc"
          onChange={handleChange}
          className={styles.wrapperDescTextarea}
          rows={8}
          value={desc}
        />
      </div>

      <button className={styles.wrapperBtn}>Salvar</button>
    </form>
  );
};
