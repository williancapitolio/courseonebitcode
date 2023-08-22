import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useManageItems } from "../../../hooks/useManageItems";
import { useManageCats } from "../../../hooks/useManageCats";

import { ItemsType } from "../../../types/ItemsType.ts";

import styles from "./styles.module.scss";

type InputProps = Omit<
  ItemsType,
  "id" | "createdAt" | "updatedAt" | "createdAtFormat" | "updatedAtFormat"
>;

type FormType = Omit<
ItemsType,
"createdAt" | "updatedAt" | "createdAtFormat" | "updatedAtFormat"
>;

export const FormItemUpdate = ({
  id,
  name,
  qtde,
  price,
  cat,
  desc,
}: FormType) => {
  const [inputs, setInputs] = useState({
    name: "",
    qtde: 0,
    price: 0,
    cat: "",
    desc: "",
  });

  const navigate = useNavigate();

  const { updateItem } = useManageItems();

  const { catsList } = useManageCats();

  const handleChange = (ev: Event | React.SyntheticEvent) => {
    setInputs((prev: InputProps) => ({
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
    const { name, qtde, price, cat, desc } = inputs;
    updateItem({ id, name, qtde, price, cat, desc });
    setTimeout(handleNavigate, 50);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h3 className={styles.wrapperTitleContent}>Editar Item - {name}</h3>
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
            {catsList.map(({ cat }, index) => (
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
