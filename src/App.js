import { useState } from "react";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [score, setScore] = useState(0);

  const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null;
  };
  console.log(score);
  return (
    <>
      {showComponent("/", <Welcome />)}
      {showComponent(
        "/questions",
        <Questions score={score} setScore={setScore} />
      )}
      {showComponent("/result", <Result score={score} />)}
    </>
  );
}

export default App;
