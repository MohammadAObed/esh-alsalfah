import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { playBtnClickSound } from "../../../../common/utils/playBtnClickAudio";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import { getRandomItemFromArray } from "../../utils";

const initialQuestion = {
  asker: {},
  askee: {},
  prevAskersIds: [],
  prevAskeeIds: [],
  began: false,
};

const noAskerIndex = -1;

const PlayersQuestions = () => {
  const { players, setStatus } = useGameContext();
  const [question, setQuestion] = useState(initialQuestion);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [askerIndex, setAskerIndex] = useState(noAskerIndex);
  let randomPositionedPlayers = useMemo(
    () => players.sort(() => Math.random() - 0.5),
    [players]
  );
  const NewQuestion = () => {
    setIsNewQuestion(true);
    setQuestion((prev) => {
      return { ...prev, began: true };
    });
  };
  useEffect(() => {
    if (!isNewQuestion) return;
    var checker = players.every((p) => question.prevAskersIds.includes(p.id)); //check if the questions ended, all players asked and got asked
    if (checker) {
      setStatus(gameStatusEnum.AdditionalQuestions);
      return;
    }
    if (askerIndex >= randomPositionedPlayers.length) {
      setAskerIndex(0);
      return;
    }
    setAskerIndex((prevState) => prevState + 1);
    setIsNewQuestion(false);
  }, [isNewQuestion]);

  useEffect(() => {
    //? what to do? (ask chatgpt) just randomise the order of players in te players array
    //? then let first one ask second, third ask fourth or first if they are only three...
    //? then second ask third, (3 players)
    //? then fourth ask first, second ask third (4players)
    //? hint (shuffle array is the name) from chatgpt, code: array.sort(() => Math.random() - 0.5);
    if (askerIndex <= noAskerIndex) return;
    let askeeIndex = askerIndex + 1;
    if (askerIndex >= randomPositionedPlayers.length - 1) {
      askeeIndex = 0;
    }
    let asker = randomPositionedPlayers[askerIndex];
    let askee = randomPositionedPlayers[askeeIndex];
    setQuestion((prevState) => {
      return {
        ...prevState,
        asker: asker,
        askee: askee,
        prevAskersIds: [...prevState.prevAskersIds, asker.id],
        prevAskeeIds: [...prevState.prevAskeeIds, askee.id],
      };
    });
  }, [askerIndex]);
  useEffect(() => {});
  return (
    <div className="container flex-column-center mtb32">
      <h2 className="mtb32 color-3">وقت الاسئلة</h2>
      <h4 className="width-200">
        {question.began == false ? (
          <span>
            كل شخص راح يسأل شخص تاني سؤال متعلق بالسالفة، اضغطو التالي حتى
            تعرفون مين رح يسأل مين
          </span>
        ) : (
          <span>
            <span className="color-3">{question.asker.name} </span> اسأل
            <span className="color-3"> {question.askee.name} </span>
            سؤال متعلق بالسالفة! اختار سؤالك بعناية حتى اللي برا السالفة ما بعرف
            عن ايش تتكلمون
          </span>
        )}
      </h4>
      <button
        onClick={(e) => {
          NewQuestion();
          playBtnClickSound();
        }}
        className="general-btn general-btn-2 width-200 mtb128"
      >
        التالي
      </button>
    </div>
  );
};

export default PlayersQuestions;
