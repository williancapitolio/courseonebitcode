import styles from './Card.module.scss'
import cardImgStarWars from '../../assets/card-img-star-wars.jpg'

export const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={cardImgStarWars} alt="Image Card" className={`${styles.card} ${styles.img}`} />
        <div className={`${styles.card} ${styles.details}`}>
          <h2 className={`${styles.card} ${styles.details} ${styles.title}`}>Pôster: Star Wars (1977)</h2>
          <p className={`${styles.card} ${styles.details} ${styles.description}`}>
            Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>
          <button className={`${styles.card} ${styles.details} ${styles.button}`}>Comprar agora</button>
        </div>
      </div>
    </>
  )
}
