import { useState } from "react";
import { useManageItems } from "../useManageItems";

export const useCallModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const { deleteItem } = useManageItems();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleAction = (id: number) => {
    deleteItem(id);
    handleModal();
  };

  return { openModal, setOpenModal, handleModal, handleAction };
};
