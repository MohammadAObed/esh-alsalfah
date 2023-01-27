import React from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { playBtnClickSound } from "../../../../common/utils/playBtnClickAudio";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";

const PlayersRoundEnd = () => {
  const { setStatus } = useGameContext();
  return (
    <div className="container flex-column-center mtb32">
      <h2 className="mtb32 color-3">نهاية الجولة</h2>
      <h4 className="width-200">
        تقدرون تكملون لعب أو تغيرون لاعب أو ترجعون لشاشة اختيار الأسئلة
      </h4>
      <h4 className="mtb32 width-200">زمبحكولك! كمّل لعب، حتى لو قالولك صعب</h4>
      <div className="btns container-centered height-auto">
        <button
          onClick={(e) => {
            setStatus((prev) => gameStatusEnum.RevealRoles);
            playBtnClickSound();
          }}
          className="general-btn general-btn-2 width-200 mtb128"
        >
          كمّل لعب
        </button>
        <button
          onClick={(e) => {
            setStatus((prev) => gameStatusEnum.CreatePlayers);
            playBtnClickSound();
          }}
          className="general-btn general-btn-2 mtb16 width-200 bg-color-red"
        >
          تغيير اللاعبين
        </button>
      </div>
    </div>
  );
};

export default PlayersRoundEnd;
