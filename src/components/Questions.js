import React, { useState } from "react";
import ReactDOM from 'react-dom'
import quizData from "./QuizData";
import Result from "./Result";
import "./questions.css";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    if (optionIndex === quizData[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
    };
    
    const handleSubmit = () => {
        ReactDOM.render(<Result />,document.getElementById('root')) }

  const currentQuestionData = quizData[currentQuestion];
  const isCorrect = selectedOption === currentQuestionData.correctAnswer;
  //   const isAnswered = selectedOption !== null;

  return (
    <main className="container">
      <div className="top">
        <progress
          className="progress-bar"
          value={currentQuestion + 1}
          max={quizData.length}
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
            currentQuestion === quizData.length - 1 ? (
              <button className="btn next" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button className="btn next" onClick={handleNextQuestion}>
                Next
              </button>
            )
          ) : (
            <button disabled className="btn next ">
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
