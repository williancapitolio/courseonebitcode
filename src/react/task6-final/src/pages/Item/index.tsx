import { Link, useParams } from "react-router-dom";

import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

import { items } from "../../mock-data.ts";

export const Item = () => {
  const { itemId } = useParams();

  const item = items.find((it) => it.id === Number(itemId));

  if (!item)
    return (
      <>
        <Link to="/">Voltar</Link>
        <h2>Produto não encontrado!</h2>
      </>
    );

  return (
    <>
      <section className={styles.wrapper}>
      <Title title={"Stock Items"} />
        <NavItems 
          isAllActive={false}
          isNewActive={false}
        />
        <p>{item.name}</p>
      </section>
    </>
  );
};