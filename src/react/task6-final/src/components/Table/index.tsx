import { TableBody } from "./TableBody";
import styles from "./styles.module.scss";

type tableProps = {
  situation: string;
  item: string;
  hasAmount?: boolean;
  amount?: number;
};

export const Table = ({
  situation,
  item,
  hasAmount = false,
  amount = 0,
}: tableProps) => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.wrapperHead}>
        <tr className={styles.wrapperHeadLine}>
          <th className={`${styles.wrapperHeadLineTitle} ${styles.firstTh}`}>
            Itens {situation}
          </th>
          {hasAmount && <th className={styles.wrapperHeadLineTitle}>Qtde.</th>}
          <th className={styles.wrapperHeadLineTitle}>Ações</th>
        </tr>
      </thead>
      <tbody className={styles.wrapperBody}>
        <TableBody item={item} hasAmount={hasAmount} amount={amount} />
        <TableBody item={item} hasAmount={hasAmount} amount={amount} />
      </tbody>
    </table>
  );
};
