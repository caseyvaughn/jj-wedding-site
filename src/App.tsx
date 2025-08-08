import { useState } from "react";
import "./App.css";
import "./index.css";
import { fetchNewQuestion } from "./utils.ts";
import { QUESTIONS } from "./questions.ts";

function App() {
  const [question, setQuestion] = useState<string>(
    "Do you have any marriage advice for the bride and groom?"
  );

  const handleClick = () => {
    const newQuestion = fetchNewQuestion(QUESTIONS);
    if (newQuestion) {
      setQuestion(newQuestion);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your personal video confessional!</h1>
        <h3>First, start off with a hello and your name then start talking.</h3>
      </header>
      <div className="Main-content">
        <div>{question}</div>
      </div>
      <div className="App-footer">
        <img
          src="/dice.png"
          alt="and if you don't know what to say, roll for a prompt"
          style={{ width: "45%", height: "fit-content" }}
          onClick={handleClick}
        />
        <img
          src="/circlelogo.png"
          alt="good times logo"
          style={{ width: "20%", height: "fit-content", margin: "3rem" }}
        />
      </div>
    </div>
  );
}

export default App;
