// import { useAppContext } from "../../setup/app-context-manager/app-context";
import "./style.css";
import gamesData from "../../common/data/games.json";
import GameCategory from "./components/game-category";
export const Home = () => {
  return (
    <div className="container">
      <div className="games-container">
        {gamesData.map((game) => {
          return <GameCategory key={game.id} {...game} />;
        })}
      </div>
    </div>
  );
};

export default Home;
