import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.wrapperTitle} to="/">
        REACT STOCK
      </Link>
      <nav className={styles.wrapperNav}>
        <Link className={styles.wrapperNavLink} to="/">
          Início
        </Link>
        <Link className={styles.wrapperNavLink} to="/items">
          Itens
        </Link>
      </nav>
    </div>
  );
};
