import { Card } from "./components/Card";

import styles from './styles/App.module.scss'

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
