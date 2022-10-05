import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "⌛": "Hourglass Done",
    "⏳": "Hourglass Not Done",
    "⌚": "Watch",
    "⏰": "Alarm Clock",
    "⏱️": "Stopwatch",
    "⏲️": "Timer Clock",
    "🕰️": "Mantelpiece Clock",
    "🌡️": "Thermometer",
    "⛱️": "Umbrella on Ground",
    "🧨": "Firecracker",
    "🎈": "Balloon",
    "🎉": "Party Popper"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var textInput = event.target.value;

    var meaning = emojiDictionary[textInput];

    if (meaning === undefined) {
      meaning = "We do not have the meaning of this in our database";
    }
    setMeaning(meaning);
  }

  function emojiMeaningHandler(item) {
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiEventHandler} />{" "}
      <div id={meaning ? "meaning" : ""}> {meaning} </div>
      <h3>Emojis We Know</h3>
      <ul>
        {emojisWeKnow.map((item) => {
          return (
            <li key={item}>
              <span id="emojis" onClick={() => emojiMeaningHandler(item)}>
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
