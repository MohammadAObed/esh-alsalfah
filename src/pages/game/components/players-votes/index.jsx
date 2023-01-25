import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";

function initialiseVoter(player) {
  return {
    voter: player,
  };
}

// const initialVote = {};

// const initialVoter = {
//   index: 0,
//   voter: {}
// }

const PlayersVotes = () => {
  const { players, setPlayers, setStatus, imposter } = useGameContext();
  const [votes, setVotes] = useState([]);
  const [currentVoter, setCurrentVoter] = useState(initialiseVoter(players[0]));
  const newVote = (votee) => {
    setVotes((prev) => {
      return [...prev, { voterId: currentVoter.voter.id, voteeId: votee.id }];
    });
    console.log("votee", votee);
  };
  useEffect(() => {
    if (votes.length >= players.length) {
      let updatedPlayers = players.map((player) => {
        console.log("votes", votes, player.id);
        let voter = votes.find((vote) => vote.voterId == player.id);
        if (voter == undefined || voter == null) {
          return player;
        }
        if (voter.voteeId === imposter.id) {
          return { ...player, points: player.points + 100 };
        }
        return player;
      });
      setPlayers((prevState) => {
        return updatedPlayers;
      });
      setStatus(gameStatusEnum.RevealImposter);
      return;
    }
    console.log("🚀 ~ file: index.jsx:24 ~ PlayersVotes ~ votes", votes);
    console.log(
      "🚀 ~ file: index.jsx:52 ~ setCurrentVoter ~ currentVoter",
      currentVoter
    );

    setCurrentVoter((prev) => {
      const availableVoters = players.filter((player) => {
        return votes.some((v) => v.voterId == player.id) == false;
      });
      return {
        voter: availableVoters[0] || currentVoter,
      };
    });
  }, [votes]);
  return (
    <div className="container flex-column-center mtb32">
      <h3 className="mtb8 width-200">
        <span className="color-3">{currentVoter.voter.name} </span>
        اختار الشخص اللي تظن انه برا السالفة
      </h3>
      <div className="flex-column-center">
        {players
          .filter((p) => p.id !== currentVoter.voter.id)
          .map((p) => {
            return (
              <button
                className="general-btn general-btn-2 mtb8 width-200 bg-color-red"
                key={p.id}
                onClick={() => newVote(p)}
              >
                {p.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default PlayersVotes;
