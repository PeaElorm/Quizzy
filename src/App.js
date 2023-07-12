import { useState } from "react";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [score, setScore] = useState(0);
  const [userName, setUsername] = useState("");
  const [_path, setPath] = useState("/")

  const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null;
  };
  
  return (
    <>
      {showComponent("/", <Welcome userName={userName} setUserName={setUsername} setPath={setPath}/>)}
      {showComponent(
        "/questions",
        <Questions score={score} setScore={setScore} setPath={setPath}/>
      )}
      {showComponent("/result", <Result score={score} setPath={setPath} setScore={setScore} userName={userName}/>)}
    </>
  );
}

export default App;
