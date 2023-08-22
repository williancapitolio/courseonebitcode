import { Link, useNavigate, useParams } from "react-router-dom";

import { useManageItems } from "../../hooks/useManageItems";
import { useCallModal } from "../../hooks/useCallModal";

import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";
import { Modal } from "../../components/Modal";

import styles from "./styles.module.scss";

export const Item = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();

  const { items, deleteItem } = useManageItems();
  const { openModal, setOpenModal, handleModal } = useCallModal();

  const item = items.find((it) => it.id === Number(itemId));

  if (!item)
    return (
      <>
        <section className={styles.wrapper}>
          <Title title={"Stock Items"} />
          <NavItems isAllActive={false} isNewActive={false} />
          <h2>Produto não encontrado!</h2>
          <Link to="/">Voltar</Link>
        </section>
      </>
    );

  const handleNavigate = () => {
    navigate("/items");
  };

  const handleAction = () => {
    deleteItem(item.id);
    setOpenModal(false);
    setTimeout(handleNavigate, 50);
  };

  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
        <NavItems isAllActive={false} isNewActive={false} />
        <div className={styles.wrapperHead}>
          <h3 className={styles.wrapperHeadTitle}>{item.name}</h3>
          <Link to={`/items/update/${item.id}`}>
            <button className={styles.wrapperHeadUpdate}>Atualizar</button>
          </Link>
          <button
            className={styles.wrapperHeadDelete}
            onClick={() => setOpenModal(true)}
          >
            Excluir
          </button>
          <Modal
            isOpen={openModal}
            title="Confirmação"
            body={`Tem certeza que deseja excluir o item ${item.name}?`}
            handleModal={handleModal}
            handleAction={handleAction}
            btnActionText="Confirmar"
          />
        </div>
        <div className={styles.wrapperBody}>
          <div className={styles.wrapperBodyCards}>
            <div className={styles.wrapperBodyCardsCard}>
              <span className={styles.wrapperBodyCardsCardItem}>
                Categoria: {item.cat}
              </span>
            </div>
            <div className={styles.wrapperBodyCardsCard}>
              <span className={styles.wrapperBodyCardsCardItem}>
                Quantidade em estoque: {item.qtde}
              </span>
            </div>
            <div className={styles.wrapperBodyCardsCard}>
              <span className={styles.wrapperBodyCardsCardItem}>
                Preço: R$ {Number(item.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <p className={styles.wrapperDescription}>{item.desc}</p>
        <div className={styles.wrapperFooter}>
          <span className={styles.wrapperFooterDate}>
            Cadastrado em: {item.createdAtFormat}
          </span>
          {item.updatedAt && (
            <span className={styles.wrapperFooterDate}>
              Atualizado em: {item.updatedAtFormat}
            </span>
          )}
        </div>
      </section>
    </>
  );
};
