import styles from "./styles.module.scss";

import { itemsType } from "../../../types/itemsType.ts";
import { Link } from "react-router-dom";

export const TableRunningOut = ({ id, name, qtde }: itemsType) => {
  return (
    <tbody className={styles.wrapper}>
      <tr className={styles.wrapperBodyLine}>
        <td className={styles.wrapperBodyLineItem}>{name}</td>
        <td className={styles.wrapperBodyLineQtde}>{qtde}</td>
        <td className={styles.wrapperBodyLineAction}>
          <Link to={`/items/${id}`}>
            <button className={styles.wrapperBodyLineActionBtn}>Ver</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
