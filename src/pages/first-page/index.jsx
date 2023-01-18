import { useCallback, useEffect, useRef, useState } from "react";
import { Book } from "../../common/components/book";
import GameModal from "../../common/components/game-modal";
import useLoading from "../../common/hooks/useLoading";
import "./style.css";

const FirstPage = () => {
  const [isLoading, setIsLoading] = useLoading();
  const modalRef = useRef(null);
  const openModal = useCallback((e) => {
    modalRef.current.style.display = "block";
  }, []);
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
          <button className="play-btn">العب</button>
          <p onClick={openModal}>
            حول اللعبة <span>&#1567;</span>
          </p>
        </div>
        <GameModal modalRef={modalRef} />
      </div>
    </>
  );
};

export default FirstPage;
