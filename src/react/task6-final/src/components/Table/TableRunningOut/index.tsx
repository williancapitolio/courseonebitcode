import styles from "./styles.module.scss";

import { itemsType } from "../../../mock-data.ts";

export const TableRunningOut = ({ name, qtde }: itemsType) => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.wrapperHead}>
        <tr className={styles.wrapperHeadLine}>
          <th className={`${styles.wrapperHeadLineTitle} ${styles.firstTh}`}>
            Itens Acabando
          </th>
          <th className={styles.wrapperHeadLineQtde}>Qtde.</th>
          <th className={styles.wrapperHeadLineAction}>Ação</th>
        </tr>
      </thead>
      <tbody className={styles.wrapperBody}>
        <tr className={styles.wrapperBodyLine}>
          <td className={styles.wrapperBodyLineItem}>{name}</td>
          <td className={styles.wrapperBodyLineQtde}>{qtde}</td>
          <td className={styles.wrapperBodyLineAction}>
            <button className={styles.wrapperBodyLineActionBtn}>Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
