import React, { useState } from "react";
import quizData from "./QuizData";
import "./questions.css";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const currentQuestionData = quizData[currentQuestion];
  const isCorrect = selectedOption === currentQuestionData.correctAnswer;
  const isAnswered = selectedOption !== null;

  return (
    <main className="container">
      <div className="top">
        <progress
          className="progress-bar"
          value={currentQuestion + 1}
          max={quizData.length}
        ></progress>
        <h2 className="questions__score">
          {currentQuestion + 1}/{quizData.length}
        </h2>
      </div>
      <div className="center">
        <div className="questions__card">
          <h2 className="question-number">Question {currentQuestion + 1}</h2>
          <p>{currentQuestionData.question}</p>
        </div>
        <div className="answers__card">
          {currentQuestionData.options.map((option, index) => (
            <div
              key={index}
              className={`possible-answer-card ${
                selectedOption === index
                  ? isCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              <p>{option}</p>
            </div>
          ))}
          {isAnswered ? (
            <button className="btn next" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button disabled className="btn next ">Next</button>
          )}
        </div>
      </div>
      <div className="bottom"></div>
    </main>
  );
}

export default Questions;
