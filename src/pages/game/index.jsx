import React, { useEffect, useState } from "react";
import { gameStatusEnum } from "../../common/enums/enums";
import gamesData from "../../common/data/games.json";
import "./style.css";
import PlayersLobby from "./components/players-lobby";
import { useGameContext } from "../../setup/app-context-manager/game-context";
import PlayersRoles from "./components/players-roles";
import PlayersQuestions from "./components/players-questions";
import PlayersAdditionalQuestions from "./components/players-additional-questions";
import PlayersVotes from "./components/players-votes";
import PlayersImposter from "./components/players-Imposter";
import PlayersPoints from "./components/players-points";
import PlayersImposterAnswer from "./components/players-imposter-answer";
import PlayersRoundEnd from "./components/players-round-end";

const Game = () => {
  const { status } = useGameContext();
  //create context or not as you like, (try yes) for state that is not very changing
  //try refactoring it !!!!!!later!!!!!! with reducer...
  useEffect(() => {
    // setGameAnswer();
  }, []);
  return (
    <div className="container plr32 ptb16">
      {status === gameStatusEnum.CreatePlayers ? <PlayersLobby /> : ""}
      {status === gameStatusEnum.RevealRoles ? <PlayersRoles /> : ""}
      {status === gameStatusEnum.Questions ? <PlayersQuestions /> : ""}
      {status === gameStatusEnum.AdditionalQuestions ? (
        <PlayersAdditionalQuestions />
      ) : (
        ""
      )}
      {status === gameStatusEnum.Voting ? <PlayersVotes /> : ""}
      {status === gameStatusEnum.RevealImposter ? <PlayersImposter /> : ""}
      {status === gameStatusEnum.ImposterAnswer ? (
        <PlayersImposterAnswer />
      ) : (
        ""
      )}
      {status === gameStatusEnum.ShowPoints ? <PlayersPoints /> : ""}
      {status === gameStatusEnum.RoundEnd ? <PlayersRoundEnd /> : ""}
    </div>
  );
};

export default Game;

//you can use params, or location, or whatever... choose wisely based on your usecase
// let location = useLocation();
// let data = location.state.data.id;
