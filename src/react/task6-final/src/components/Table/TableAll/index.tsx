import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

import { itemsType } from "../../../types/itemsType.ts";

type TableAppProps = Omit<itemsType, "price" | "desc" | "createdAt">;

export const TableAll = ({ id, name, qtde, cat }: TableAppProps) => {
  return (
    <tbody className={styles.wrapper}>
      <tr className={styles.wrapperLine}>
        <td className={styles.wrapperLineItem}>{id}</td>
        <td className={styles.wrapperLineTitle}>{name}</td>
        <td className={styles.wrapperLineItem}>{qtde}</td>
        <td className={styles.wrapperLineItem}>{cat}</td>
        <td className={styles.wrapperLineAction}>
          <Link to={`/items/${id}`}>
            <button className={styles.wrapperLineActionView}>Ver</button>
          </Link>
          <Link to={`items/update/${id}`}>
            <button className={styles.wrapperLineActionUpdate}>
              Atualizar
            </button>
          </Link>
          <button className={styles.wrapperLineActionDelete}>Excluir</button>
        </td>
      </tr>
    </tbody>
  );
};
