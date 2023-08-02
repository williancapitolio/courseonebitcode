import styles from "./styles.module.scss";

export const FormComment = () => {
  return (
    <section className={styles.formComment}>
      <h2 className={styles.formCommentTitle}>Seção de Comentários</h2>

      <form className={styles.formCommentForm}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
        />

        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Deixe um comentário"
          rows={5}
        />

        <button>Comentar!</button>
      </form>
    </section>
  );
};
