const deck = new Deck();

document.addEventListener('DOMContentLoaded', () => {
  deck.shuffle(16);
  deck.buildCards();

  deck.deckCards.sort((a, b) => { return a.slot - b.slot });
  for (let el of deck.deckCards) {
    console.log(`slot: ${el.slot}, name: ${el.name}`);
  }
  console.log(...deck.deckCards);
});


// If click on a card, get the corresponding card
document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card-cover')) {
    let card = deck.getCard(evt.target.id);
    card.flipCard();
    //TODO: add one move
    //TODO: push the first card name in pair queue
  }
}, true);
