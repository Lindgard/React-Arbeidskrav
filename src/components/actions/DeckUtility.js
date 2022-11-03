import { cardData } from "../items/DeckOfCards";

const DeckUtility = () => {
  //const [cards, setCards] = useState(0);
  const deck = [...cardData, ...cardData, ...cardData, ...cardData];

  const shuffle = () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[randomIndex];
      deck[randomIndex] = temp;
    }
  };

  shuffle();

  const getCards = (i) => {
    return deck[i];
  };
  getCards();
};

export default DeckUtility;
