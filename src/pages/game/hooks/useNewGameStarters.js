import React, { useEffect, useState } from "react";
import { gameStatusEnum } from "../../../common/enums/enums";
import { getRandomItemFromArray } from "../utils";
function useNewGameStarters(GamesJSONDetails, singleGame, players, status) {
  const [singleGameDetails, setSingleGameDetails] = useState({});
  const [imposter, setImpost] = useState({});
  useEffect(() => {
    if (status >= gameStatusEnum.RevealRoles) return;
    const chosenDetails = GamesJSONDetails.filter(
      (x) => x.gameId == singleGame.id
    );
    setSingleGameDetails((prev) => {
      return getRandomItemFromArray(chosenDetails);
    });
    setImpost((prev) => {
      return getRandomItemFromArray(players);
    });
  }, [status]);
  return [singleGameDetails, imposter];
}

export default useNewGameStarters;
