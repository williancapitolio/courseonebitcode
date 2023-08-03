import { useState } from "react";
import styles from "./components/FormComment/styles.module.scss";
/* import { FormComment } from "./components/FormComment";
import { ListComment } from "./components/ListComment"; */

export const App = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const addComment = ({
    email,
    comment,
  }: {
    email: string;
    comment: string;
  }) => {
    const id = Math.floor(Math.random() * 1000000);
    setCommentsList((state: []) => {
      const newState = [...state, { id, email, comment }];
      return newState;
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addComment({ email, comment });
    setEmail("");
    setComment("");
  };

  return (
    <>
      <section className={styles.formComment}>
        <h2 className={styles.formCommentTitle}>Seção de Comentários</h2>

        <form className={styles.formCommentForm} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.formCommentFormEmail}>
            E-mail
          </label>
          <input
            className={styles.formCommentFormInput}
            type="email"
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

      <section className={styles.listComment}>
        {/* {feedComments.length > 0 ? feedComments.map((comments) => (
        <p>{comments.email}</p>
        <p>{comments.comment}</p>
      )) : <p>Sem comentários</p>} */}
      </section>
    </>
  );
};
