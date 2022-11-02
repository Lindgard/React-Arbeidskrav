import React, { useState } from "react";
import { cardData } from "../items/DeckOfCards";

const DeckController = () => {
  const deck = [...cardData, ...cardData, ...cardData, ...cardData];
  //const [cards, setCards] = useState(0);

  const shuffle = () => {
    for (let i = 0; i < deck.length; i++) {
      const randomIndex = Math.floor(math.random() * deck.length);
      const card = randomIndex;
      const temp = card;
      randomIndex = temp;
    }
  };

  const getCards = () => {
    //function to get cards to render
  };

  return <div>DeckShuffle</div>;
};

export default DeckController;
