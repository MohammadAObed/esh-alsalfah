import React, { useState } from "react";
import GamesJSONDetails from "../../../../common/data/gameDetails.json";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import { getRandomAnswers } from "../../utils";

const numberOfRandomAnswer = 7;

const PlayersImposterAnswer = () => {
  const { imposter, singleGame, gameAnswer, setStatus, setPlayers, players } =
    useGameContext();
  const [imposterAnswer, setImposterAnswer] = useState({ id: 0 });
  const [randomAnswers, setRandomAnswers] = useState(
    getRandomAnswers(
      GamesJSONDetails.filter((x) => x.gameId == singleGame.id),
      numberOfRandomAnswer,
      gameAnswer
    )
  );
  const checkAnswer = (imposterAnswerParam) => {
    const isCorrectAnswer =
      imposterAnswerParam.id == gameAnswer.id ? true : false;
    setImposterAnswer(imposterAnswerParam);
    let updatedPlayers = players.map((player) => {
      if (player.id == imposter.id && isCorrectAnswer) {
        return { ...player, points: player.points + 100 };
      }
      return player;
    });
    setPlayers((prevState) => {
      return updatedPlayers;
    });
    const timeoutId = setTimeout(() => {
      setStatus(gameStatusEnum.ShowPoints);
    }, 3000);

    return () => clearTimeout(timeoutId);
    //sss
  };
  return (
    <div className="container flex-column-center mtb32">
      <h3>
        <span>{imposter.name}</span> ايش هي السالفة؟
      </h3>
      {randomAnswers.map((ra) => {
        return (
          <button
            className={`general-btn general-btn-2 mtb8 width-200 ${
              ra.id == gameAnswer.id && imposterAnswer.id != 0
                ? `green`
                : ra.id == imposterAnswer.id
                ? `red`
                : `bg-color-red`
            }`}
            key={ra.id}
            onClick={() => checkAnswer(ra)}
            disabled={imposterAnswer.id == 0 ? false : true}
          >
            {ra.name}
          </button>
        );
      })}
    </div>
  );
};

export default PlayersImposterAnswer;
