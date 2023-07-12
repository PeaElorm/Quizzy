import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./welcome.css";
import Questions from "./Questions";
import Result from "./Result";

function Welcome() {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    setInputValue("");
  };

  // const handleGetStarted = () => {
  //   ReactDOM.render(<Questions />, document.getElementById("root"));
  // };

  return (
    <div className="container">
      <h2 className="logo">QUIZZY</h2>
      <div className="card">
        {username ? (
          <>
            <div className="greeting">
              <h1>Welcome {username} !</h1>
              <p>Let's get quizzy</p>
            </div>

            <a href="/questions">
              <button className="btn">Get Started</button>
            </a>
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
