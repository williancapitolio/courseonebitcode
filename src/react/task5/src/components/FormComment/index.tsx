import { useState } from "react";

import styles from "./styles.module.scss";

export const FormComment = ({
  onAdd,
}: {
  onAdd: ({ email, comment }: { email: string; comment: string }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onAdd({ email, comment });
    setEmail("");
    setComment("");
  };

  return (
    <section className={styles.formComment}>
      <h2 className={styles.formCommentTitle}>Seção de Comentários</h2>

      <form className={styles.formCommentForm} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.formCommentFormEmail}>
          E-mail
        </label>
        <input
          className={styles.formCommentFormInput}
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="comment" className={styles.formCommentFormComment}>
          Comentário
        </label>
        <textarea
          className={styles.formCommentFormTextarea}
          name="comment"
          id="comment"
          placeholder="Deixe um comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className={styles.formCommentFormBtn}>Comentar!</button>
      </form>
    </section>
  );
};
