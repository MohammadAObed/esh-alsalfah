import { useRef } from "react";
import "./style.css";
function GameModal({ modalRef, closeModal, children }) {
  return (
    <div className="modal-container" ref={modalRef}>
      <div className="game-modal shadow-1">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

export default GameModal;
