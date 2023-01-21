import { useCallback, useRef } from "react";

const useModal = () => {
  const modalRef = useRef(null);
  const closeModal = useCallback((e) => {
    modalRef.current.style.display = "none";
  });
  const openModal = useCallback((e) => {
    modalRef.current.style.display = "block";
  }, []);
  return { openModal, closeModal, modalRef };
};

export default useModal;
