import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type NavItemsType = {
  isAllActive: boolean;
  isNewActive: boolean;
};

export const NavItems = ({ isAllActive, isNewActive }: NavItemsType) => {
  return (
    <nav className={styles.wrapper}>
      <Link to={"/items"}>
        <span
          className={`${styles.wrapperLink} ${styles.wrapperAll} ${
            isAllActive && "active"
          }`}
        >
          Todos os itens
        </span>
      </Link>
      <Link to={"/items/new"}>
        <span
          className={`${styles.wrapperLink} ${styles.wrapperAll} ${
            isNewActive && "active"
          }`}
        >
          Novo item
        </span>
      </Link>
    </nav>
  );
};
