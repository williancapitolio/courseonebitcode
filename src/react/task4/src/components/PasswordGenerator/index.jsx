import { useState } from "react"
import styles from "./styles.module.scss"

export const PasswordGenerator = () => {
  const [generateBtn, setGenerateBtn] = useState('Gerar')
  const [password, setPassword] = useState('')
  const [copyBtn, setCopyBtn] = useState('Copiar')

  const handleGeneratePassword = () => {
    setGenerateBtn('Gerado!')
    setPassword('_YBw#RF&WHUM')
  }

  const handleCopyPassword = () => {
    if (password.length > 0) {
      setCopyBtn('Copiado!')

    } else {
      alert('Gere a senha primeiro!')
    }
  }

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gerador de Senhas</h2>
        <div className={styles.sectionBtns}>
          <button onClick={handleGeneratePassword} className={styles.sectionBtnsBtn}>{generateBtn}</button>
          <button onClick={handleCopyPassword} className={styles.sectionBtnsBtn}>{copyBtn}</button>
        </div>
        <span className={styles.sectionResult}>{password}</span>
      </section>
    </>
  )
}