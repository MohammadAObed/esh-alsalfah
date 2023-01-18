import { useRef } from "react";
import "./style.css";
function GameModal({ modalRef }) {
  const closeModal = (e) => {
    modalRef.current.style.display = "none";
  };

  return (
    <div className="modal-container" ref={modalRef}>
      <div className="game-modal shadow-1">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>.اللعبة ممتازة حربها او لا تجربها ل</p>
      </div>
    </div>
  );
}

export default GameModal;
