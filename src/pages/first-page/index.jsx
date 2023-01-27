import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Book } from "../../common/components/book";
import GameModal from "../../common/components/game-modal";
import useLoading from "../../common/hooks/useLoading";
import useModal from "../../common/hooks/useModal";
import { playBtnClickSound } from "../../common/utils/playBtnClickAudio";
import "./style.css";

const FirstPage = () => {
  const [isLoading, setIsLoading] = useLoading();
  const { modalRef, openModal, closeModal } = useModal();
  return (
    <>
      {<Book isLoading={isLoading} />}
      <div
        className={`container container-centered opacity-0 ${
          !isLoading ? `fade-in` : ``
        }`}
      >
        <Book isLoading={true} />
        <div className="footer">
          <NavLink
            className="play-btn"
            to="/Home"
            onClick={playBtnClickSound}
            data-audio="true"
          >
            العب
          </NavLink>
          <p onClick={openModal}>
            حول اللعبة <span>&#1567;</span>
          </p>
        </div>
        <GameModal modalRef={modalRef} closeModal={closeModal}>
          <p>.اللعبة ممتازة جربها او لا تجربها ل</p>
        </GameModal>
      </div>
    </>
  );
};

export default FirstPage;
