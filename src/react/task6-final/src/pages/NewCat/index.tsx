import { FormCat } from "../../components/Form/FormCat";
import { NavItems } from "../../components/NavItems";
import { Title } from "../../components/Title";

import styles from "./styles.module.scss";

export const NewCat = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <Title title={"Stock Items"} />
        <NavItems isAllActive={false} isNewActive={false} isCatActive={true} />
        <FormCat />
      </section>
    </>
  );
};
