import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
