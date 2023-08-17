import { Link, useParams } from "react-router-dom";

import { FormItem } from "../../components/FormItem";
import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

import { items } from "../../mock-data.ts";

export const UpdateItem = () => {
  const { itemId } = useParams();

  const item = items.find((it) => it.id === Number(itemId));

  if (!item)
    return (
      <>
        <section className={styles.wrapper}>
          <Title title={"Stock Items"} />
          <NavItems isAllActive={false} isNewActive={false} />
          <h2>Produto não encontrado!</h2>
          <Link to="/">Voltar</Link>
        </section>
      </>
    );

  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
        <NavItems isAllActive={false} isNewActive={false} />
        <FormItem />
      </section>
    </>
  );
};
