import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
