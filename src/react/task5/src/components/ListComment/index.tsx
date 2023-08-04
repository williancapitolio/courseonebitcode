import styles from "./styles.module.scss";

export const ListComment = ({
  id,
  email,
  comment,
  onRemove,
}: {
  id: number;
  email: string;
  comment: string;
  onRemove: (id: number) => void;
}) => {
  return (
    <section className={styles.listComment}>
      <div className={styles.listCommentDiv}>
        <p className={styles.listCommentDivEmail}>E-mail: {email}</p>
        <p className={styles.listCommentDivComment}>Comentário: {comment}</p>
      </div>
      <button className={styles.listCommentBtn} onClick={() => onRemove(id)}>
        Apagar
      </button>
    </section>
  );
};
