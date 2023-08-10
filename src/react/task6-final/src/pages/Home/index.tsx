import { Card } from "../../components/Card";
import { TableRecent } from "../../components/Table/TableRecent";
import { TableRunningOut } from "../../components/Table/TableRunningOut";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <section className={styles.wrapper}>
      <Title title="Dashboard" />
      <div className={styles.wrapperCards}>
        <Card title="Diversidade de itens" value={2} />
        <Card title="Inventário total" value={40} />
        <Card title="Itens recentes" value={2} />
        <Card title="Itens acabando" value={1} />
      </div>
      <div className={styles.wrapperTables}>
        <TableRecent item="O Senhor dos Anéis" />
        <TableRunningOut item="O Senhor dos Anéis" qtde={2} />
      </div>
    </section>
  );
};
