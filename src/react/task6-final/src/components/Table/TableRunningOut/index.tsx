import { Link } from "react-router-dom";

import { ItemsType } from "../../../types/ItemsType.ts";

import styles from "./styles.module.scss";

export const TableRunningOut = ({ id, name, qtde }: ItemsType) => {
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
