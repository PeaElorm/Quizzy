import React, { useState } from "react";
import quizData from "./QuizData";
import welcome from "./Welcome";
import Result from "./Result";
import "./questions.css";

function Questions({ score, setScore, setPath }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [submit, setSubmit] = useState();

  const navigateToPage = (path) => {
    window.history.pushState(null, null, path);
    setPath(path);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setIsAnswered(true);
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (optionId === quizData[currentQuestion].options[correctAnswer].id) {
      setScore(score + 10);
    }
  };

  const currentQuestionData = quizData[currentQuestion];
  const isCorrect =
    selectedOption ===
    currentQuestionData.options[currentQuestionData.correctAnswer].id;
  //   const isAnswered = selectedOption !== null;

  return (
    <main className="container">
      <div className="top">
        <progress
          className="progress-bar"
          value={currentQuestion + 1}
          max={quizData.length + 1}
        ></progress>
        <h2 className="questions__score">
          Score: {score}/{quizData.length * 10}
        </h2>
      </div>
      <div className="center">
        <div className="questions__card">
          <h2 className="question-number">Question {currentQuestion + 1}</h2>
          <p>{currentQuestionData.question}</p>
        </div>
        <div className="answers__card">
          {currentQuestionData.options.map((item, index) => (
            <button
              disabled={selectedOption && selectedOption !== index + 1}
              key={index}
              className={`possible-answer-card ${
                selectedOption === index + 1
                  ? isCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(item.id)}
            >
              <p>{item.option}</p>
            </button>
          ))}
          {currentQuestion === quizData.length - 1 ? (
            <button
              disabled={!isAnswered}
              className="btn next"
              onClick={() => navigateToPage("/result")}
            >
              Submit
            </button>
          ) : (
            <button
              disabled={!isAnswered}
              className="btn next"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <div className="bottom"></div>
    </main>
  );
}

export default Questions;
// export { score };
