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
      <p>{email}</p>
      <p>{comment}</p>
      <button onClick={() => onRemove(id)}>Apagar</button>
    </section>
  );
};
