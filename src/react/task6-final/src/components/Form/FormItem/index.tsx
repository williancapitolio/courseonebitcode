import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useManageItems } from "../../../hooks/useManageItems";
import { useManageCats } from "../../../hooks/useManageCats";

import { ItemsType } from "../../../types/ItemsType";

import styles from "./styles.module.scss";

type InputType = Omit<ItemsType, "id" | "createdAt" | "updatedAt">;

export const FormItem = () => {
  const [inputs, setInputs] = useState({
    name: "Não informado",
    qtde: 0,
    price: 0,
    cat: "Não informado",
    desc: "Não informado",
  });

  const navigate = useNavigate();

  const { createItem } = useManageItems();

  const { catsList } = useManageCats();

  const handleChange = (ev: Event | React.SyntheticEvent) => {
    setInputs((prev: InputType) => ({
      ...prev,
      [(ev.target as HTMLInputElement).name]: (ev.target as HTMLInputElement)
        .value,
    }));
  };

  const handleNavigate = () => {
    navigate("/items");
  };

  const handleSubmit = (ev: Event | React.SyntheticEvent) => {
    ev.preventDefault();
    const id = Math.floor(Math.random() * 100000);
    const { name, qtde, price, cat, desc } = inputs;

    createItem({ id, name, qtde, price, cat, desc });
    setTimeout(handleNavigate, 50);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h3 className={styles.wrapperTitleContent}>Adicionar Item</h3>
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
              Selecione uma categoria...
            </option>
            {catsList.map(({ cat }, index) => (
              <option key={index} className={styles.wrapperUnionDivOption}>
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
        />
      </div>

      <button className={styles.wrapperBtn}>Salvar</button>
    </form>
  );
};
