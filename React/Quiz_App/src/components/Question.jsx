import { useState } from "react";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import QUESTIONS from "../questions";

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
  timer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let time = 10000;
  if (answer.selectedAnswer) {
    time = 1000;
  }

  if (answer.isCorrect !== null) {
    time = 2000;
  }

  function handleSelectAnswer(ans) {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: QUESTIONS[questionIndex].answers[0] === ans,
      });

      setTimeout(() => {
        onSelectAnswer(ans);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <ProgressBar
        key={time}
        timer={time}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
