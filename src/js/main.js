let deck = new Deck();
let statusBoard = new StatusBoard();

const move        = document.querySelector('#move-count');
const matchCount  = document.querySelector('#match-count');
const stars       = document.querySelector('#stars');
const resetBtn    = document.querySelector('#reset');
const timerShown  = document.querySelector('#timer');
let timeElapsed   = Number(timerShown.textContent);
let timer;

document.addEventListener('DOMContentLoaded', () => {

  deck.shuffle(16);
  deck.buildCards();
  deck.buildCardsHTML();

  statusBoard.init();

  deck.deckCards.sort((a, b) => { return a.slot - b.slot });
  console.log(...deck.deckCards);
});

document.querySelector('main').addEventListener('click', (e) => {

  // If click on card
  if (e.target.classList.contains('card-cover')) {

     // Return a card of Card class
    let selectedCard = deck.getCard(e.target.id) || null;

    selectedCard.flipCard();

    // Add one move & push first card obj in pair queue
    statusBoard.addMove(selectedCard);

    // Check if second card obj match in pair queue
    statusBoard.checkMatch();

    for (let i of statusBoard.matchQueue) {
      console.log(`click count: ${statusBoard.maxClick} || ${i.name} in match queue`);
    }
    console.log(statusBoard);

    // TODO: Disable click when playing card animation

    // When click on first card, start timer
    move.textContent == 0 ? timer = setTimeout(timeCounter, 1000) : false;
  }

  // If click on reset button
  e.target.id == 'reset' ? resetGame() : null;

  updateStatus();
}, true);

// Show status on board
const updateStatus = () => {
  move.textContent        = statusBoard.moveCount;
  matchCount.textContent  = statusBoard.matchCount;
  stars.textContent       = statusBoard.starsCount;

  // Stop timer when all cards are matched
  matchCount.textContent == 8 ? clearTimeout(timer) : null;
}

const timeCounter = () => {
  timeElapsed++;
  timerShown.textContent = timeElapsed;
  timer = setTimeout(timeCounter, 1000);
}

const resetGame = () => {
  // Reset deck
  deck = new Deck();
  deck.shuffle(16);
  deck.buildCards();

  // Clear card pairs
  Card.init();

  // Reset moves, match count on status board
  statusBoard.init();

  // Reset timer
  timeElapsed = 0;
  timerShown.textContent = 0;
  clearTimeout(timer);
}








///////////////////////////////////////////////////////
