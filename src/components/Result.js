import React from "react";
// import { score } from "./Questions";
import trophy from "../../src/assets/trophy.png";
import emoji from "../../src/assets/sad.GIF";
import './result.css'

function Result(props) {
  const { score } = props;
  // const { username } = props;
  return (
    <div className="container">
      <h2>{score}</h2>
      {score >= 70 && score <= 100 ? (
        <div className="center">
          <div className=" trophy">
            <img src={trophy} alt="trophy" />
            <p>You did great !</p>
          </div>
          <div className="question-number result-card">
            <div className="score-display">
              <h2>{score}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="center">
          <div className="emoji">
            <img src={emoji} alt="emoji" />
            <p>You can do better</p>
          </div>
          <div className="question-number result-card">
            <div className="score-display">
              <h2>{score}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
