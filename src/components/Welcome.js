import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./welcome.css";
import Questions from "./Questions";
import Result from "./Result";

function Welcome({userName, setUserName, setPath}) {
  const [inputValue, setInputValue] = useState("");


  const navigateToPage = (path) => {
    window.history.pushState(null, null, path);
    setPath(path);
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
  };

  // const handleGetStarted = () => {
  //   ReactDOM.render(<Questions />, document.getElementById("root"));
  // };

  return (
    <div className="container">
      <h2 className="logo">QUIZZY</h2>
      <div className="card">
        {userName ? (
          <>
            <div className="greeting">
              <h1>Welcome {userName} !</h1>
              <p>Let's get quizzy</p>
            </div>

            {/* <a href="/questions"> */}
              <button className="btn" onClick={() => {
                navigateToPage('/questions')
              }}>Get Started</button>
            {/* </a> */}
          </>
        ) : (
          <>
            <h1 className="first">Welcome!</h1>
            <p>What should we call you?</p>

            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="your preferred username..."
                  onChange={handleChange}
                />
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Welcome;
