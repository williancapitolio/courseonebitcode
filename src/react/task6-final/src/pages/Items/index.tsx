import { useManageItems } from "../../hooks/useManageItems";
import { useCallModal } from "../../hooks/useCallModal";

import { NavItems } from "../../components/NavItems";
import { TableAll } from "../../components/Table/TableAll";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

export const Items = () => {
  const { items, deleteItem } = useManageItems();
  const { setOpenModal } = useCallModal();

  const handleAction = (id: number) => {
    deleteItem(id);
    setOpenModal(false);
  };

  return (
    <section className={styles.wrapper}>
      <Title title={"Stock Items"} />
      <NavItems isAllActive={true} isNewActive={false} isCatActive={false} />
      <table className={styles.wrapperTable}>
        <thead className={styles.wrapperTableHead}>
          <tr className={styles.wrapperTableHeadLine}>
            <th className={styles.wrapperTableHeadLineItem}>ID</th>
            <th className={styles.wrapperTableHeadLineItem}>Nome</th>
            <th className={styles.wrapperTableHeadLineItem}>Em Estoque</th>
            <th className={styles.wrapperTableHeadLineItem}>Categoria</th>
            <th className={styles.wrapperTableHeadLineItem}>Ações</th>
          </tr>
        </thead>
        {items.map(({ id, name, qtde, cat }) => (
          <TableAll key={id} id={id} name={name} qtde={qtde} cat={cat} handleAction={handleAction} />
        ))}
      </table>
    </section>
  );
};
