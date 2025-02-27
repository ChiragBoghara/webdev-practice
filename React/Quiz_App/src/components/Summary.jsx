import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(
    (userAnswer) => userAnswer === null
  );

  const correctAnswers = userAnswers.filter(
    (userAns, idx) => userAns === QUESTIONS[idx].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length * 100) / QUESTIONS.length
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length * 100) / QUESTIONS.length
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="Trophy Icon" />
      <h2>Quiz Completed !</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((userAns, index) => {
          let cssClass = "user-answer";
          if (userAns === null) {
            cssClass += " skipped";
          } else if (userAns === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{userAns ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
