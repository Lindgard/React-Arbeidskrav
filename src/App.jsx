import React, { useState, useEffect } from "react";
import DeckController from "./components/actions/DeckController";

const App = () => {
  return (
    <div className="App">
      <div>
        <button onClick={DeckController}>test</button>
      </div>
    </div>
  );
};

export default App;
