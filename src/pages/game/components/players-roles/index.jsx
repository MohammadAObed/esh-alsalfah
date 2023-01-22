import React, { useEffect, useState } from "react";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import useCurrentPlayer from "./hooks/useCurrentPlayer";

const PlayersRoles = () => {
  const { players: pp, gameAnswer, imposter, setStatus } = useGameContext();
  const [players, setPlayers] = useState(pp);
  const [currentPlayer, setCurrentPlayer, isRoleShown, setIsRoleShown] =
    useCurrentPlayer(players, setPlayers, setStatus);
  const updateCurrentPlayer = () => {
    const playersNotPlayed = players.map((player) => {
      if (player.id === currentPlayer.id) {
        return { ...player, hasPlayed: true };
      }
      return { ...player };
    });
    setPlayers((prev) => {
      return playersNotPlayed;
    });
    setIsRoleShown(false);
  };
  const revealRole = () => {
    setIsRoleShown(true);
  };
  useEffect(() => {
    console.count();
    // console.log(gameAnswer, imposter);
  });
  return (
    <div className="container flex-column-center mtb32">
      <h1 className="mtb32 color-3">{currentPlayer.name}</h1>
      <h4>
        اعطو الجوال ل<span>{currentPlayer.name}</span>
      </h4>
      {!isRoleShown ? (
        <h4 className="width-200">
          اضغط التالي حتى تعرف هل انت برا السالفة او داخلها ولا تخلي أحد غيرك
          يشوف الشاشة
        </h4>
      ) : currentPlayer.id === imposter.id ? (
        <h4 className="width-200">
          انت اللي برا السالفة! حاول تعرف وش السالفة بالضبط من كلام البقية أو
          اقنعهم يصوتون على الشخص الخطأ
        </h4>
      ) : (
        <h4 className="width-200">
          انت داخل في السالفة واللي هي
          <span className="color-3"> {gameAnswer.name} </span>
          هدفك في اللعبة معرفة مين منكم اللي برا السالفة
        </h4>
      )}

      <button
        onClick={(e) => {
          isRoleShown ? updateCurrentPlayer() : revealRole();
        }}
        className="general-btn general-btn-2 width-200 mtb128"
      >
        التالي
      </button>
    </div>
  );
};

export default PlayersRoles;
