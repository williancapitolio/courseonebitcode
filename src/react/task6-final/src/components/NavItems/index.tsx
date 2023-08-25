import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type NavItemsType = {
  isAllActive: boolean;
  isNewActive: boolean;
  isCatActive: boolean;
};

export const NavItems = ({ isAllActive, isNewActive, isCatActive }: NavItemsType) => {
  return (
    <nav className={styles.wrapper}>
      <Link
        to={"/items"}
        className={`${isAllActive ? "navItemActive" : "navItemInactive"}`}
      >
        Todos itens
      </Link>
      <Link
        to={"/items/new"}
        className={`${isNewActive ? "navItemActive" : "navItemInactive"}`}
      >
        Novo item
      </Link>
      <Link
        to={"/items/cat"}
        className={`${isCatActive ? "navItemActive" : "navItemInactive"}`}
      >
        Nova categoria
      </Link>
    </nav>
  );
};