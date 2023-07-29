import styles from "./styles.module.scss"

export const PasswordGenerator = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gerador de Senhas</h2>
        <div className={styles.sectionBtns}>
          <button className={styles.sectionBtnsBtn}>Gerar!</button>
          <button className={styles.sectionBtnsBtn}>Copiar</button>
        </div>
        <span className={styles.sectionResult}></span>
      </section>
    </>
  )
}