import React from "react";
import DeckUtility from "./components/actions/DeckUtility";

const App = () => {
  // useState for playerHand
  // antall kort i decket igjen
  // condition for bust/win

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            console.log("decks");
            DeckUtility();
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default App;
