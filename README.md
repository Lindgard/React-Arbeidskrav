# Blackjack game in React

will look to add functionality in the future to expand the options within the game.

## Main task requirements and possible bonus functionality

Creating a simple blackjack game in ReactJS with:

- [ ] Two players
- [ ] Dealer
  - Deals one card face up and one card face down to itself, two cards face up for Player One and Player Two
  - standard blackjack rules apply for Dealer after Hit/Stay has been submitted by Player(s)
- [ ] Shuffle for each round
- [x] Card values
  - created JSON file with a deck of cards
- [ ] Hit, stay
- [ ] Highscore system stored in session/local storage
  - Sum of card values added together and new game/round launched
  - Total sum of games/rounds played until first loss results in score for leaderboard
  - Highscore should show a top ten

### Bonus functionality

- possibly split and double
- Card images and card backs

## React methods required

- [ ] Props
- [x] Components
- [ ] useState()
- [ ] useEffect()

## Todo list

1. Shuffle cards og console.log første kortet i bunken og se at det endres
2. Plukk et kort og se at du får neste kort i bunken, med console.log
3. Lag en knapp som lar deg trekke kort
4. Lag en visning av kort som er trukket
5. Sjekk verdien på kortene ikke går over 21
   5.1 Hvis sum er over 21 og bunken trukket kort inneholder Ess, gi ess verdi 1
6. Lag en knapp som sier stopp
7. Dealer ting
   7.1 While løkke, så lenge sum er < 16 og < 21 plukk kort
   7.2 Når dealer har fått sine kort, sammenlign
8. Avgjør om spiller vant
9. Ny runde med det samme.
10. High score med antall runder ?
    BONUS
11. Split på 2 like kort, og ha 2 stacks man spiller på

### Author: André Lindgård
