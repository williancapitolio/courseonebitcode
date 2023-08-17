import { Link } from "react-router-dom";

import { useCallModal } from "../../../hooks/useCallModal";

import { Modal } from "../../Modal/index.tsx";

import { itemsType } from "../../../types/itemsType.ts";

import styles from "./styles.module.scss";

type TableAppProps = Omit<itemsType, "price" | "desc" | "createdAt">;

export const TableAll = ({ id, name, qtde, cat }: TableAppProps) => {
  const { openModal, setOpenModal, handleModal } = useCallModal();

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
          <button
            className={styles.wrapperLineActionDelete}
            onClick={() => setOpenModal(true)}
          >
            Excluir
          </button>
          <Modal
            isOpen={openModal}
            title="Confirmação"
            body={`Tem certeza que deseja excluir o item ${name}?`}
            handleModal={handleModal}
            handleAction={() => console.log("batata")}
            btnActionText="Confirmar"
          />
        </td>
      </tr>
    </tbody>
  );
};
