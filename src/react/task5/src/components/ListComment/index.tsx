import styles from "./styles.module.scss";

export const ListComment = ({
  id,
  email,
  comment,
  date,
  onRemove,
}: {
  id: number;
  email: string;
  comment: string;
  date: string;
  onRemove: (id: number) => void;
}) => {
  return (
    <section className={styles.listComment}>
      <div className={styles.listCommentDiv}>
        <p className={styles.listCommentDivEmail}>E-mail: {email}</p>
        <p className={styles.listCommentDivComment}>Comentário: {comment}</p>
        <p className={styles.listCommentDivDate}>{date}</p>
      </div>
      <button className={styles.listCommentBtn} onClick={() => onRemove(id)}>
        Apagar
      </button>
    </section>
  );
};
