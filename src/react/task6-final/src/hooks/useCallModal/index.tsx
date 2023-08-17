import { useState } from "react";

export const useCallModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return { openModal, setOpenModal, handleModal };
};
