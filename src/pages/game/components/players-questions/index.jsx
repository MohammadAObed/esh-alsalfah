import React, { useState } from "react";
import { useEffect } from "react";
import { gameStatusEnum } from "../../../../common/enums/enums";
import { useGameContext } from "../../../../setup/app-context-manager/game-context";
import { getRandomItemFromArray } from "../../utils";

const initialQuestion = {
  asker: {},
  askee: {},
  prevAskersIds: [],
  prevAskeeIds: [],
  began: false,
};

const PlayersQuestions = () => {
  const { players, setStatus } = useGameContext();
  const [question, setQuestion] = useState(initialQuestion);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
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
      console.log("askersLength,playersLength", question.prevAskeeIds, players);
      setStatus(gameStatusEnum.AdditionalQuestions);
      return;
    }
    let asker = getRandomItemFromArray(
      players.filter((p) => !question.prevAskersIds.includes(p.id))
    );
    let askee = getRandomItemFromArray(
      players.filter(
        (p) => p.id !== asker.id && !question.prevAskeeIds.includes(p.id)
      )
    );
    console.log("askkkkk", asker.name, askee.name);
    setQuestion((prevState) => {
      return {
        ...prevState,
        asker: asker,
        askee: askee,
        prevAskersIds: [...prevState.prevAskersIds, asker.id],
        prevAskeeIds: [...prevState.prevAskeeIds, askee.id],
      };
    });
    setIsNewQuestion(false);
  }, [isNewQuestion]);
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
        }}
        className="general-btn general-btn-2 width-200 mtb128"
      >
        التالي
      </button>
    </div>
  );
};

export default PlayersQuestions;
