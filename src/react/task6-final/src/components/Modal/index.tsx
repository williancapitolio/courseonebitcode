import styles from "./styles.module.scss";

type ModalType = {
  isOpen: boolean;
  title: string;
  /* handleModal: () => void; */
};

export const Modal = ({ isOpen, title /* , handleModal */ }: ModalType) => {
  if (isOpen) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperBody}>
          <div className={styles.wrapperBodyHead}>
            <h3 className={styles.wrapperBodyHeadTitle}>{title}</h3>
            <span className={styles.wrapperBodyHeadClose}>&times;</span>
          </div>
          <p className={styles.wrapperBodyText}>Texto da modal</p>
          <div className={styles.wrapperBodyBtns}>
            <button
              className={
                styles.wrapperBodyBtnsClose
              } /* onClick={handleModal} */
            >
              Fechar
            </button>
            <button
              className={
                styles.wrapperBodyBtnsAction
              } /* onClick={handleModal} */
            >
              Ação
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
