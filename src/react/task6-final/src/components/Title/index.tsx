import styles from "./styles.module.scss";

type titleProps = {
  title: string;
};

export const Title = ({ title }: titleProps) => {
  return <h2 className={styles.wrapper}>{title}</h2>;
};
