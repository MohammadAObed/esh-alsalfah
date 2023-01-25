import React, { useEffect } from "react";
import { useState } from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import { getRandomItemFromArray } from "../../utils";
import "./style.css";
const PlayersImposter = () => {
  const { players, imposter, setStatus } = useGameContext();
  const [playerName, setPlayerName] = useState("");
  const [stopAnim, setStopAnim] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const player = getRandomItemFromArray(players);
      setPlayerName(player.name);
      console.log("Interval running...");
    }, 100);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setStopAnim(true);
      setPlayerName(imposter.name);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="container space-between container-centered">
      <h3>
        <span>... </span>الشخص اللي برا السالفة هو
      </h3>
      <div className="circle-container">
        <div className="outer-circle"></div>
        <div
          className={`color-circle ${stopAnim ? `` : `spin-animation`}`}
        ></div>
        <div className="color-circle-shadow"></div>
        <div className="inner-circle">
          <h3 className={`imposter ${stopAnim ? `pulse-animation` : ``}`}>
            {playerName}
          </h3>
        </div>
      </div>
      <button
        onClick={(e) => setStatus((prev) => gameStatusEnum.ImposterAnswer)}
        className={`general-btn general-btn-2 width-200 mtb128 ${
          stopAnim ? `` : `opacity-0`
        }`}
      >
        التالي
      </button>
    </div>
  );
};

export default PlayersImposter;
