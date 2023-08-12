import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type NavItemsType = {
  isAllActive: boolean;
  isNewActive: boolean;
};

export const NavItems = ({ isAllActive, isNewActive }: NavItemsType) => {
  return (
    <nav className={styles.wrapper}>
      <Link
        to={"/items"}
        className={`${isAllActive ? "active" : "inactive"}`}
      >
        Todos os itens
      </Link>
      <Link
        to={"/items/new"}
        className={`${isNewActive ? "active" : "inactive"}`}
      >
        Novo item
      </Link>
    </nav>
  );
};
