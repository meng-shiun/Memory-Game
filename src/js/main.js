let deck = new Deck();
let statusBoard = new StatusBoard();

const move        = document.querySelector('#move-count');
const statusMoves = document.querySelector('#status-moves');
const matchCount  = document.querySelector('#match-count');
const stars       = document.querySelector('#star-count');
const resetBtn    = document.querySelector('#reset');
const timerShown  = document.querySelector('#timer');
const scoreTimer  = document.querySelector('#score-timer');
const scoreBoard  = document.querySelector('#score-board');

let timeElapsed   = Number(timerShown.textContent);
let timer;

document.addEventListener('DOMContentLoaded', () => {

  deck.shuffle(16);
  deck.buildCards();
  deck.buildCardsHTML();

  statusBoard.init();

  // deck.deckCards.sort((a, b) => { return a.slot - b.slot });
  // console.log(...deck.deckCards);
});

document.querySelector('main').addEventListener('click', (e) => {

  // If click on card
  if (e.target.classList.contains('touch')) {

    let cardID = e.target.parentNode.id;

    let currentCard = deck.getCard(cardID) || null;

    // If card is already clicked
    if (currentCard.isTriggered) return;
    currentCard.isTriggered = true;

    currentCard.flipCard();

    // Add one move & push first card obj in pair queue
    statusBoard.addMove(currentCard);

    // Check if second card obj match in pair queue
    statusBoard.checkMatch();

    // When click on first card, start timer
    move.textContent == 0 ? timer = setTimeout(timeCounter, 1000) : false;
  }

  // If click on reset button
  e.target.id == 'reset' ? resetGame() : null;

  // If click on replay button
  e.target.id == 'replay' ? resetGame() : null;

  updateStatus();
}, true);


// Show status on board
const updateStatus = () => {
  move.textContent        = statusBoard.moveCount;
  statusMoves.textContent = move.textContent;
  matchCount.textContent  = statusBoard.matchCount;
  stars.textContent       = statusBoard.starsCount;

  // Stop timer when all cards are matched and show score board
  if (matchCount.textContent == 8) {
    scoreBoard.classList.remove('modal-hide');
    scoreBoard.classList.add('modal-trans');
    scoreTimer.textContent = timerShown.textContent;
    setTimeout(() => {
      scoreBoard.classList.add('modal-show');
    }, 1200);
    clearTimeout(timer);
  } else if (matchCount.textContent == 0) {
    scoreBoard.classList.remove('modal-show');
  }

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
  deck.buildCardsHTML();

  // Clear card pairs
  Card.init();

  // Reset moves, match count on status board
  statusBoard.init();

  // Reset timer
  timeElapsed = 0;
  timerShown.textContent = 0;
  clearTimeout(timer);

  // Hide score board
  scoreBoard.classList.remove('modal-show', 'modal-trans');
  scoreBoard.classList.add('modal-hide');
}
