import { Player } from "../../../models";

function usePlayerStuff(players, setPlayers) {
  const isPlayersEmpty = players?.length > 0 ? false : true;
  const addPlayer = (playerName) => {
    const newPlayer = new Player(playerName);
    newPlayer.id = isPlayersEmpty
      ? 1
      : Math.max(...players.map((p) => p.id)) + 1;
    // console.log(newPlayer);
    setPlayers((prev) => {
      return [...prev, newPlayer];
    });
  };
  const removePlayer = (playerId) => {
    setPlayers((prev) => {
      const newPlayers = players.filter((p) => p.id != playerId);
      return [...newPlayers];
    });
  };

  return { isPlayersEmpty, removePlayer, addPlayer };
}

export default usePlayerStuff;
