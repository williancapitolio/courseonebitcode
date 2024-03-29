import { useState } from "react"
import styles from "./styles.module.scss"

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [copyBtn, setCopyBtn] = useState('Copiar')

  const handleGeneratePassword = () => {
    const random = Math.random().toString(36).slice(-10)
    setPassword(random)
    setCopyBtn('Copiar')
  }

  const handleCopyPassword = () => {
    if (password.length > 0) {
      setCopyBtn('Copiado!')
      navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada para área de transferênia!')
      })

    } else {
      alert('Gere a senha primeiro!')
    }
  }

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gerador de Senhas</h2>
        <div className={styles.sectionBtns}>
          <button onClick={handleGeneratePassword} className={styles.sectionBtnsBtn}>Gerar!</button>
          <button onClick={handleCopyPassword} className={styles.sectionBtnsBtn}>{copyBtn}</button>
        </div>
        <span className={styles.sectionResult}>{password}</span>
      </section>
    </>
  )
}