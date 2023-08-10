import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
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
        <Table situation="Recentes" item="7 Wonders" />
        <Table
          situation="Acabando"
          item="7 Wonders"
          hasAmount={true}
          amount={2}
        />
      </div>
    </section>
  );
};
