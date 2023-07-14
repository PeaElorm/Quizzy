import trophy from "../../src/assets/trophy.png";
import emoji from "../../src/assets/sad.GIF";
import "./result.css";

function Result(props) {
  const { score, setPath, setScore, userName } = props;

  const navigateToPage = (path) => {
    window.history.pushState(null, null, path);
    setPath(path);
  };
  // const { username } = props;
  return (
    <div className="container">
      {score >= 70 && score <= 100 ? (
        <div className="center">
          <div className=" trophy">
            <img src={trophy} alt="trophy" />
            <p>You did great {userName} !</p>
          </div>
          <div className="question-number result-card">
            <p className="result-header">Your Result</p>
            <div className="score-display">
              <h2 className="score">{score}%</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="center">
          <div className="emoji">
            <img src={emoji} alt="emoji" />
            <p>You can do better {userName}</p>
          </div>
          <div className="question-number result-card">
            <p className="result-header">Your Result</p>
            <div className="score-display">
              <h2 className="score">{score}%</h2>
            </div>
          </div>
        </div>
      )}

      <div className="cta">
        <button
          onClick={() => {
            setScore(0);
            navigateToPage("/questions");
          }}
          className="btn nex"
        >
          Take Quiz again
        </button>
        <button
          onClick={() => {
            setScore(0);
            navigateToPage("/");
          }}
          className="btn nex"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Result;
