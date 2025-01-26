import React, { useEffect } from "react";
import { gameStatusEnum } from "../../common/enums/enums";
import { useGameContext } from "../../setup/app-context-manager/game-context";
import PlayersAdditionalQuestions from "./components/players-additional-questions";
import PlayersImposter from "./components/players-Imposter";
import PlayersImposterAnswer from "./components/players-imposter-answer";
import PlayersLobby from "./components/players-lobby";
import PlayersPoints from "./components/players-points";
import PlayersQuestions from "./components/players-questions";
import PlayersRoles from "./components/players-roles";
import PlayersRoundEnd from "./components/players-round-end";
import PlayersVotes from "./components/players-votes";
import "./style.css";

const Game = () => {
  const { status } = useGameContext();
  //create context or not as you like, (try yes) for state that is not very changing
  //try refactoring it !!!!!!later!!!!!! with reducer...
  useEffect(() => {
    // setGameAnswer();
  }, []);
  return (
    <div className="container plr32 ptb16" style={{ display: "flex", justifyContent: "center" }}>
      {status === gameStatusEnum.CreatePlayers ? <PlayersLobby /> : ""}
      {status === gameStatusEnum.RevealRoles ? <PlayersRoles /> : ""}
      {status === gameStatusEnum.Questions ? <PlayersQuestions /> : ""}
      {status === gameStatusEnum.AdditionalQuestions ? <PlayersAdditionalQuestions /> : ""}
      {status === gameStatusEnum.Voting ? <PlayersVotes /> : ""}
      {status === gameStatusEnum.RevealImposter ? <PlayersImposter /> : ""}
      {status === gameStatusEnum.ImposterAnswer ? <PlayersImposterAnswer /> : ""}
      {status === gameStatusEnum.ShowPoints ? <PlayersPoints /> : ""}
      {status === gameStatusEnum.RoundEnd ? <PlayersRoundEnd /> : ""}
    </div>
  );
};

export default Game;

//you can use params, or location, or whatever... choose wisely based on your usecase
// let location = useLocation();
// let data = location.state.data.id;
