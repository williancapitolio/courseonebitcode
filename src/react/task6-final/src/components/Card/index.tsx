import styles from "./styles.module.scss";

type cardProps = {
  title: string;
  value: number;
};

export const Card = ({ title, value }: cardProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperTitle}>{title}</h3>
      <span className={styles.wrapperValue}>{value}</span>
    </div>
  );
};
