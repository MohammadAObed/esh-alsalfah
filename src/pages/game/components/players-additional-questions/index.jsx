import React from "react";
import { useState } from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";

function initialiseQuestion(players) {
  return {
    asker: players[0],
  };
}

const initialQuestion = {};

const PlayersAdditionalQuestions = () => {
  const { players, setStatus } = useGameContext();
  const [question, setQuestion] = useState(initialiseQuestion(players));
  const newQuestion = (playerId) => {
    let asker = players.find((p) => p.id === playerId);
    setQuestion((prevState) => {
      return { ...prevState, asker: asker };
    });
  };
  return (
    <div className="container flex-column-center mtb32">
      <h3 className="mtb8 width-200">
        <span className="color-3">{question.asker.name} </span>
        اختار شخص تبغى تسأله أو اضغط زر صوّت اذا كنتم جاهزين للتصويت على اللي
        برا السالفة
      </h3>
      <div className="flex-column-center">
        {players
          .filter((p) => p.id !== question.asker.id)
          .map((p) => {
            return (
              <button
                className="general-btn general-btn-2 mtb8 width-200 bg-color-red"
                key={p.id}
                onClick={() => newQuestion(p.id)}
              >
                {p.name}
              </button>
            );
          })}
      </div>
      <button
        onClick={(e) => {
          setStatus((prev) => gameStatusEnum.Voting);
        }}
        className="general-btn general-btn-2 width-200 mtb128"
      >
        صوّت
      </button>
    </div>
  );
};

export default PlayersAdditionalQuestions;
