import { Link } from "react-router-dom";
import { playBtnClickSound } from "../../../../common/utils/playBtnClickAudio";
import "./style.css";
function GameCategory({ name, imgUrl, id }) {
  const newImgUrl = "../../" + imgUrl;
  return (
    <div className="game">
      {/* <Link to={"/game"} state={{ data: { id } }}> */}
      <Link to={`/game/${id}`}>
        <div className="img-container" id={`game-${id}`}>
          <p className="name">{name}</p>
          <img
            src={process.env.PUBLIC_URL + newImgUrl}
            alt={name}
            className={`game-bg-${id}`}
            onClick={playBtnClickSound}
            data-audio="true"
          />
        </div>
        {/* <p>{newImgUrl}</p> */}
      </Link>
    </div>
  );
}

export default GameCategory;
