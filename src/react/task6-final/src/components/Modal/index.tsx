import styles from "./styles.module.scss";

type ModalType = {
  id: number
  isOpen: boolean;
  title: string;
  body: string;
  handleModal: () => void;
  handleAction: (id: number) => void;
  btnActionText?: string;
};

export const Modal = ({
  id,
  isOpen,
  title,
  body,
  handleModal,
  handleAction,
  btnActionText = "Confirmar",
}: ModalType) => {
  if (isOpen) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperBody}>
          <div className={styles.wrapperBodyHead}>
            <h3 className={styles.wrapperBodyHeadTitle}>{title}</h3>
            <span className={styles.wrapperBodyHeadClose} onClick={handleModal}>
              &times;
            </span>
          </div>
          <p className={styles.wrapperBodyText}>{body}</p>
          <div className={styles.wrapperBodyBtns}>
            <button
              className={styles.wrapperBodyBtnsClose}
              onClick={handleModal}
            >
              Fechar
            </button>
            <button
              className={styles.wrapperBodyBtnsAction}
              onClick={() => handleAction(id)}
            >
              {btnActionText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
