import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInputText, setGreetingInputText] =
    useState("Greeting Message");
  const changeGreetingMsg = (newGreeting) => {
    setGreetingInputText(newGreeting);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingInputText}</div>
      <div className="buttons">
        <button
          onClick={() => {
            changeGreetingMsg("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            changeGreetingMsg("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            changeGreetingMsg("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
