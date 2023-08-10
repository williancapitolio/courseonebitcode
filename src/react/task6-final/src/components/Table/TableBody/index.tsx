import styles from "./styles.module.scss";

type tableBodyProps = {
  item: string;
  hasAmount?: boolean;
  amount?: number;
};

export const TableBody = ({ item, hasAmount, amount }: tableBodyProps) => {
  return (
    <tr className={styles.wrapper}>
      <td className={styles.wrapperItem}>{item}</td>
      {hasAmount ? <th className={styles.wrapperAmount}>{amount}</th> : null}
      <td className={styles.wrapperAction}>
        <button className={styles.wrapperActionBtn}>Ver</button>
      </td>
    </tr>
  );
};
