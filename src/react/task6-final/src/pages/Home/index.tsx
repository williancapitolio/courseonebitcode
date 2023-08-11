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

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <section className={styles.wrapper}>
      <Title title="Dashboard" />
      <div className={styles.wrapperCards}>
        <Card title="Diversidade de itens" value={calcItemsDiversity} />
        <Card title="Inventário total" value={calcTotalInventory} />
        <Card title="Itens recentes" value={calcRecentItems.length} />
        <Card title="Itens acabando" value={calcItemsRunningOut.length} />
      </div>
      <div className={styles.wrapperTables}>
        <div className={styles.wrapperTablesTableRecent}>
          {calcRecentItems.map(
            ({ id, name, qtde, price, cat, desc, createdAt }) => (
              <TableRecent
                key={id}
                id={id}
                name={name}
                qtde={qtde}
                price={price}
                cat={cat}
                desc={desc}
                createdAt={createdAt}
              />
            )
          )}
        </div>
        <div className={styles.wrapperTablesTableRunningOut}>
          {calcItemsRunningOut.map(
            ({ id, name, qtde, price, cat, desc, createdAt }) => (
              <TableRunningOut
                key={id}
                id={id}
                name={name}
                qtde={qtde}
                price={price}
                cat={cat}
                desc={desc}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
