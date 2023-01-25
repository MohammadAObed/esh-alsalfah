import React from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import "./style.css";
const PlayersPoints = () => {
  const { players, setStatus } = useGameContext();
  return (
    <div className="container flex-column-center mtb32">
      <h1 className="results-heading">النتائج</h1>
      <div className="results">
        {players.map((player) => {
          return <PlayerPoint key={player.id} {...player} />;
        })}
      </div>
      <button
        onClick={(e) => {
          setStatus((prev) => gameStatusEnum.RoundEnd);
        }}
        className="general-btn general-btn-2 width-200 mtb128"
      >
        التالي
      </button>
    </div>
  );
};

const PlayerPoint = ({ name, points }) => {
  return (
    <div className="result">
      <h2>{points}</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default PlayersPoints;
