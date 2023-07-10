import { useState } from "react";
import "./welcome.css";

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
  return (
    <div className="container">
      <h2>QUIZZY</h2>
      <div className="card">
        {username ? (
          <>
            <div className="greeting">
              <h1>Welcome {username} !</h1>
              <p>Let's get quizzy</p>
            </div>
            <button className="btn">Get Started</button>
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
