import { Link, useParams } from "react-router-dom";
import { useManageItems } from "../../hooks/useManageItems";

import { FormItem } from "../../components/Form/FormItem/index.tsx";
import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

export const UpdateItem = () => {
  const { itemId } = useParams();
  const { items } = useManageItems();

  const item = items.find((it) => it.id === Number(itemId));

  if (!item)
    return (
      <>
        <section className={styles.wrapper}>
          <Title title={"Stock Items"} />
          <NavItems isAllActive={false} isNewActive={false} isCatActive={false} />
          <h2>Produto não encontrado!</h2>
          <Link to="/">Voltar</Link>
        </section>
      </>
    );

  const { name, qtde, price, cat, desc } = item;

  const props = {
    name,
    qtde,
    price,
    cat,
    desc,
  };

  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
        <NavItems isAllActive={false} isNewActive={false} isCatActive={false} />
        <FormItem {...props} />
      </section>
    </>
  );
};
