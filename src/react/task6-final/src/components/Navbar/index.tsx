import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <Link className={styles.wrapperTitle} to="/">REACT STOCK</Link>
        <nav className={styles.wrapperNav}>
          <Link className={styles.wrapperNavLink} to="/">
            Início
          </Link>
          <Link className={styles.wrapperNavLink} to="/items">
            Itens
          </Link>
        </nav>
      </header>
    </>
  );
};
