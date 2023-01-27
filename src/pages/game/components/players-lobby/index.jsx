import React, { useRef, useState } from "react";
import GameModal from "../../../../common/components/game-modal";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import usePlayerStuff from "./hooks/usePlayerStuff";
import "./style.css";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { playBtnClickSound } from "../../../../common/utils/playBtnClickAudio";

const PlayersLobby = React.memo(() => {
  //setPlayers will invoke the useEffect with useLocalStorage
  const { players, setPlayers, openModal, modalRef, closeModal, setStatus } =
    useGameContext();
  const { isPlayersEmpty, removePlayer, addPlayer } = usePlayerStuff(
    players,
    setPlayers
  );
  const [playerInput, setPlayerInput] = useState(""); //will cause rerender to whole component, but react recommends to use controlled input so ask further
  const playerInputRef = useRef(null);
  const handleSubmit = (e) => {
    // console.log(e.target);
    e.preventDefault();
    if (!playerInput) return;
    addPlayer(playerInput);
    setPlayerInput("");

    closeModal();
  };
  const nextOnClick = (e) => {
    if (players.length < 3) {
      alert("ضف ثلاثة لاعبين على الأقل");
      return;
    }
    setStatus(gameStatusEnum.RevealRoles);
  };
  return (
    <div className="players-lobby">
      <h2>اختار اللاعبين</h2>
      <div className="players-container">
        {isPlayersEmpty ? (
          <h2>لا يوجد لاعبين</h2>
        ) : (
          players.map((player) => {
            return (
              <Player
                key={player.id}
                {...player}
                removePlayer={removePlayer}
              ></Player>
            );
          })
        )}
      </div>
      <div className="btns-container">
        <button
          className="add-player"
          onClick={(e) => {
            openModal(e);
            playerInputRef.current.focus();
            playBtnClickSound();
          }}
          data-audio="true"
        >
          +
        </button>
        <button
          className="next general-btn"
          onClick={() => {
            nextOnClick();
            playBtnClickSound();
          }}
          disabled={players.length < 3 ? true : false}
          style={{ opacity: players.length < 3 ? 0.5 : 1 }}
          data-audio="true"
        >
          التالي
        </button>
      </div>
      <GameModal modalRef={modalRef} closeModal={closeModal}>
        <form onSubmit={handleSubmit} className="player-form">
          <button
            type="submit"
            className="general-btn"
            onClick={playBtnClickSound}
            data-audio="true"
          >
            ضيف
          </button>
          <input
            type="text"
            className="add-player-input"
            placeholder="ضيف لاعب"
            onChange={(e) => setPlayerInput(e.target.value)}
            value={playerInput}
            ref={playerInputRef}
          />
        </form>
      </GameModal>
    </div>
  );
});

export default PlayersLobby;

const Player = ({ name, points, id, removePlayer }) => {
  return (
    <div className="player">
      <button
        className="add-player"
        onClick={() => {
          removePlayer(id);
          playBtnClickSound();
        }}
        data-audio="true"
      >
        -
      </button>
      <h2>{name}</h2>
    </div>
  );
};
