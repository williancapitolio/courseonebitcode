import styles from "./styles.module.scss";

import { itemsType } from "../../../mock-data.ts";

export const TableRecent = ({ name }: itemsType) => {
  return (
    <tbody className={styles.wrapper}>
      <tr className={styles.wrapperBodyLine}>
        <td className={styles.wrapperBodyLineItem}>{name}</td>
        <td className={styles.wrapperBodyLineAction}>
          <button className={styles.wrapperBodyLineActionBtn}>Ver</button>
        </td>
      </tr>
    </tbody>
  );
};
