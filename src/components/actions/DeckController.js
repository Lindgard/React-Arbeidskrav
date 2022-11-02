import cardData from "../items/DeckOfCards";

const DeckController = () => {
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

  const getCards = (i) => {
    return deck(shuffle());
  };
  console.log(getCards());
};

export default DeckController;
