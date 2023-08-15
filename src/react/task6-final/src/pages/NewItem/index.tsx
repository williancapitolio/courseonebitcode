import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

export const NewItem = () => {
  return (
    <>
      <section className={styles.wrapper}>
      <Title title={"Stock Items"} />
        <NavItems 
          isAllActive={false}
          isNewActive={true}
        />
      </section>
    </>
  );
};