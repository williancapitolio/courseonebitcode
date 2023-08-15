import { NavItems } from "../../components/NavItems";
import { TableAll } from "../../components/Table/TableAll";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

import { items } from "../../mock-data.ts";

export const Items = () => {
  return (
    <section className={styles.wrapper}>
      <Title title={"Stock Items"} />
      <NavItems isAllActive={true} isNewActive={false} />
      <table className={styles.wrapperTable}>
        <thead className={styles.wrapperTableHead}>
          <tr className={styles.wrapperTableHeadLine}>
            <th className={styles.wrapperTableHeadLineItem}>ID</th>
            <th className={styles.wrapperTableHeadLineItem}>Nome</th>
            <th className={styles.wrapperTableHeadLineItem}>Em Estoque</th>
            <th className={styles.wrapperTableHeadLineItem}>Categoria</th>
            <th className={styles.wrapperTableHeadLineItem}>Ações</th>
          </tr>
        </thead>
        {items.map(({ id, name, qtde, cat }) => (
          <TableAll key={id} id={id} name={name} qtde={qtde} cat={cat} />
        ))}
      </table>
    </section>
  );
};
