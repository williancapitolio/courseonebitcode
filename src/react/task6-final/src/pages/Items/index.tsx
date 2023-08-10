import { Title } from "../../components/Title";
import styles from "./styles.module.scss";

export const Items = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
      </section>
    </>
  );
};
