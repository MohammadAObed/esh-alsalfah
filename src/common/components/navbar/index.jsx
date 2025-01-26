import { NavLink } from "react-router-dom";
import useModal from "../../hooks/useModal";
import { playBtnClickSound } from "../../utils/playBtnClickAudio";
import GameModal from "../game-modal";
import "./style.css";
const Navbar = () => {
  const { modalRef, openModal, closeModal } = useModal();
  //console.count("Navbar"); //? dont rely on console, use profiler in devtools because its more accurate, check google for clarity
  return (
    <>
      <nav className="mtb4 mlr16">
        <NavLink to="/Home" onClick={playBtnClickSound} data-audio="true">
          ⌂
        </NavLink>
        <NavLink
          className="mlr16 q-m"
          onClick={() => {
            openModal();
            playBtnClickSound();
          }}
          data-audio="true"
        >
          ?
        </NavLink>
      </nav>
      <GameModal modalRef={modalRef} closeModal={closeModal}>
        <p>العب مع الاصحاب، حتى صاحب يلعب فيكم</p>
      </GameModal>
    </>
  );
};

export default Navbar;
