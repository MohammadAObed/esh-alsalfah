import React, {
  createContext,
  useReducer,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router";
import useLocalStorage from "../../common/hooks/useLocalStorage";
import GamesJSON from "../../common/data/games.json";
import GamesJSONDetails from "../../common/data/gameDetails.json";
import useModal from "../../common/hooks/useModal";
import { gameStatusEnum } from "../../common/enums/enums";
import useNewGameStarters from "../../pages/game/hooks/useNewGameStarters";
const GameContext = createContext();
//Drawbacks of context: whenever state of this context changes, everything inside the provider (children) rerenders!!!!, i tried useMemo, React.memo, ... nothing worked
//so only put state that is rarerly changing && its needed in almost all pages of the app
function GameContextProvider({ children }) {
  let { id } = useParams();
  const { openModal, closeModal, modalRef } = useModal();
  const [status, setStatus] = useState(gameStatusEnum.CreatePlayers);
  const [players, setPlayers] = useLocalStorage("ESH_ALS_Players", []);
  const [singleGame] = useState(() => {
    return GamesJSON.find((g) => g.id == id) || null;
  });
  const [gameAnswer, imposter] = useNewGameStarters(
    GamesJSONDetails,
    singleGame,
    players,
    status
  );
  useEffect(() => {
    console.count();
    console.log(gameAnswer);
  });
  if (!singleGame) {
    return (
      <h2 className="not-found mlr16">
        اللعبة غير موجودة، الرجوع الى الصفحة الرئيسية
      </h2>
    );
  }
  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        singleGame,
        openModal,
        closeModal,
        modalRef,
        status,
        setStatus,
        gameAnswer,
        imposter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}

function useGameContextWithEffect(callback, dependencies) {
  const context = useGameContext();
  useEffect(() => {
    callback(context);
  }, dependencies);
}

// function ComponentNeedsContext(){ //?the Home Comonent
//   const callback = useCallback((context)=>{
//     //perform side-effects here
//   }, [context.state]) // context.state as dependency
//   useMyContextWithEffect(callback,[]) //?its like im using useEffect there, but its actually here
// }

export { GameContextProvider, useGameContext };
