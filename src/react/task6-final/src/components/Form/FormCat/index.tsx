import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useManageCats } from "../../../hooks/useManageCats";

import styles from "./styles.module.scss";

export const FormCat = () => {
  const [cat, setCat] = useState("");

  const navigate = useNavigate();

  const { createCat } = useManageCats();

  const handleNavigate = () => {
    navigate("/items");
  };

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    createCat({ cat });
    setCat("");
    setTimeout(handleNavigate, 50);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h3 className={styles.wrapperTitleContent}>Adicionar Categoria</h3>
      </div>
      <div className={styles.wrapperUnion}>
        <div className={styles.wrapperUnionDiv}>
          <label htmlFor="name" className={styles.wrapperUnionDivLabel}>
            Nome da categoria
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={cat}
            onChange={(ev) => setCat(ev.target.value)}
            className={styles.wrapperUnionDivInput}
          />
        </div>
      </div>

      <button className={styles.wrapperBtn}>Salvar</button>
    </form>
  );
};
