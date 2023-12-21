import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleAddThai = () => {
    setGreeting("สวัสดี!");
  };
  const handleAddEng = () => {
    setGreeting("Hi!");
  };
  const handleAddChinese = () => {
    setGreeting("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={handleAddThai}>สวัสดี!</button>
        <button onClick={handleAddEng}>Hi!</button>
        <button onClick={handleAddChinese}>你好!</button>
      </div>
    </div>
  );
}

export default App;
