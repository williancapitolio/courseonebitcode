import { Link, useParams } from "react-router-dom";

import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

import { items } from "../../mock-data.ts";

export const Item = () => {
  const { itemId } = useParams();

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

  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
        <NavItems isAllActive={false} isNewActive={false} />
        <div className={styles.wrapperHead}>
          <h3 className={styles.wrapperHeadTitle}>{item.name}</h3>
          <button className={styles.wrapperHeadUpdate}>Atualizar</button>
          <button className={styles.wrapperHeadDelete}>Excluir</button>
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
                {" "}
                Quantidade em estoque: {item.qtde}
              </span>
            </div>
            <div className={styles.wrapperBodyCardsCard}>
              <span className={styles.wrapperBodyCardsCardItem}>
                Preço: R$ {item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <p className={styles.wrapperDescription}>{item.desc}</p>
        <div className={styles.wrapperFooter}>
          <span className={styles.wrapperFooterDate}>
            Cadastrado em: {item.createdAt}
          </span>
          {item.updatedAt && (
            <span className={styles.wrapperFooterDate}>
              Atualizado em: {item.updatedAt}
            </span>
          )}
        </div>
      </section>
    </>
  );
};
