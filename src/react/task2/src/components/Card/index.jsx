import styles from './Card.module.scss'
import cardImgStarWars from '../../assets/card-img-star-wars.jpg'

export const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={cardImgStarWars} alt="Image Card" className={styles.cardImg} />
        <div className={styles.cardDetails}>
          <h2 className={styles.cardDetailsTitle}>Pôster: Star Wars (1977)</h2>
          <p className={styles.cardDetailsDescription}>
            Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>
          <button className={styles.cardDetailsBtn}>Comprar agora</button>
        </div>
      </div>
    </>
  )
}
