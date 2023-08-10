import styles from "./styles.module.scss";

type tableRunningOutProps = {
  item: string;
  qtde: number
};

export const TableRunningOut = ({ item, qtde }: tableRunningOutProps) => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.wrapperHead}>
        <tr className={styles.wrapperHeadLine}>
          <th className={`${styles.wrapperHeadLineTitle} ${styles.firstTh}`}>
            Itens Recentes
          </th>
          <th className={styles.wrapperHeadLineQtde}>Qtde.</th>
          <th className={styles.wrapperHeadLineAction}>Ação</th>
        </tr>
      </thead>
      <tbody className={styles.wrapperBody}>
        <tr className={styles.wrapperBodyLine}>
          <td className={styles.wrapperBodyLineItem}>{item}</td>
          <td className={styles.wrapperBodyLineQtde}>{qtde}</td>
          <td className={styles.wrapperBodyLineAction}>
            <button className={styles.wrapperBodyLineActionBtn}>Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
