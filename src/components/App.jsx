import React from "react";
import Card from "./Card.jsx"
import emojipedia from "../emojipedia.js"

function createCard(emojiMeaning){
  return (
    <Card 
      key={emojiMeaning.id}
      emoji={emojiMeaning.emoji}
      name={emojiMeaning.name}
      meaning={emojiMeaning.meaning}
    /> 
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>

    </div>
  );
}

export default App;
export { createCard };
