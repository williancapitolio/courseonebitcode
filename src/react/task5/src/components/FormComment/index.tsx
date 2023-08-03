import styles from "./styles.module.scss";

export const FormComment = () => {
  return (
    <section className={styles.formComment}>
      <h2 className={styles.formCommentTitle}>Seção de Comentários</h2>

      <form className={styles.formCommentForm}>
        <label htmlFor="email" className={styles.formCommentFormEmail}>
          E-mail
        </label>
        <input
          className={styles.formCommentFormInput}
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
        />

        <label htmlFor="comment" className={styles.formCommentFormComment}>
          Comentário
        </label>
        <textarea
          className={styles.formCommentFormTextarea}
          name="comment"
          id="comment"
          placeholder="Deixe um comentário"
        />

        <button className={styles.formCommentFormBtn}>Comentar!</button>
      </form>
    </section>
  );
};
