import { Card } from "../../components/Card";
import { TableRecent } from "../../components/Table/TableRecent";
import { TableRunningOut } from "../../components/Table/TableRunningOut";
import { Title } from "../../components/Title";

import {
  calcItemsDiversity,
  calcTotalInventory,
  calcRecentItems,
  calcItemsRunningOut,
} from "../../utils/functions.ts";

/* import { items } from "../../mock-data.ts"; */

import styles from "./styles.module.scss";

/* type itemsType = {
  id: number;
  name: string;
  qtde: number;
  price: number;
  cat: string;
  desc: string;
}; */

export const Home = () => {
  return (
    <section className={styles.wrapper}>
      <Title title="Dashboard" />
      <div className={styles.wrapperCards}>
        <Card title="Diversidade de itens" value={calcItemsDiversity} />
        <Card title="Inventário total" value={calcTotalInventory} />
        <Card title="Itens recentes" value={calcRecentItems} />
        <Card title="Itens acabando" value={calcItemsRunningOut} />
      </div>
      <div className={styles.wrapperTables}>
        {/* Uma lista dos itens adicionados nos últimos 10 dias. */}
        <TableRecent item="O Senhor dos Anéis" />
        {/* Uma lista dos itens com menos de 10 em estoque. */}
        <TableRunningOut item="O Senhor dos Anéis" qtde={2} />
      </div>
    </section>
  );
};
