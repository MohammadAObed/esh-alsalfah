import { NavLink } from "react-router-dom";
import useModal from "../../hooks/useModal";
import GameModal from "../game-modal";
import "./style.css";
const Navbar = () => {
  const { modalRef, openModal, closeModal } = useModal();

  //console.count("Navbar"); //? dont rely on console, use profiler in devtools because its more accurate, check google for clarity
  return (
    <>
      <nav className="mtb4 mlr16">
        <NavLink to="/Home">⌂</NavLink>
        <NavLink className="mlr16 q-m" onClick={openModal}>
          ?
        </NavLink>
      </nav>
      <GameModal modalRef={modalRef} closeModal={closeModal}>
        <p>.اللعبة ممتازة جربها او لا تجربها ل</p>
      </GameModal>
    </>
  );
};

export default Navbar;
