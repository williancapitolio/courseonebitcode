import styles from "./styles.module.scss";

import { itemsType } from "../../../types/itemsType.ts";

export const TableRunningOut = ({ name, qtde }: itemsType) => {
  return (
    <tbody className={styles.wrapperBody}>
      <tr className={styles.wrapperBodyLine}>
        <td className={styles.wrapperBodyLineItem}>{name}</td>
        <td className={styles.wrapperBodyLineQtde}>{qtde}</td>
        <td className={styles.wrapperBodyLineAction}>
          <button className={styles.wrapperBodyLineActionBtn}>Ver</button>
        </td>
      </tr>
    </tbody>
  );
};
