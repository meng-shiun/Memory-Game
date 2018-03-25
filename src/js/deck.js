class Deck {

  constructor() {
    let cards = [];
    this.cardsPair = [];
    this.deckCards = []; // A shuffled deck of cards

    let cardA = 'fas fa-coffee',
        cardB = 'fab fa-docker',
        cardC = 'fas fa-gamepad',
        cardD = 'far fa-gem',
        cardE = 'fas fa-heart',
        cardF = 'far fa-lemon',
        cardG = 'fas fa-rocket',
        cardH = 'far fa-snowflake';

    cards.push(cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH);
    this.cardsPair = [...cards, ...cards];
  }

  // Shuffle cards and put them in randomized slots
  // Shuffle function from https://bost.ocks.org/mike/shuffle/
  shuffle() {
    let currentId = this.cardsPair.length;
    let randomId; // random index

     // While there remain elements to shuffle
    while(currentId !== 0) {
      // Pick a remaining element
      randomId = Math.floor(Math.random() * currentId);
      currentId--;

      // Swap it with current element
      [this.cardsPair[randomId], this.cardsPair[currentId]] = [this.cardsPair[currentId], this.cardsPair[randomId]];
    }

    return this.cardsPair;
  }

  // Generate cards for deckCards[]
  buildCards() {
    for (let i in this.cardsPair) {
      let card = new Card(this.cardsPair[i], i);
      this.deckCards.push(card);
    }
  }


  buildCardsHTML() {
    const board = document.body.querySelector('.board');

    // Clear board
    board.innerHTML = '';

    this.deckCards.sort((a, b) => { return a.slot - b.slot });

    for (let c of this.deckCards) {
      let card = `<div id="${c.slot}" class="card card-cover back"><i class="${c.name}"></i><div class="touch"></div></div>`;
      board.insertAdjacentHTML('beforeend', card);
    }
  }

  // Return the card obj according to its slot ID
  getCard(slotID) {
    for (let card of this.deckCards) {
      if (card.slot == slotID) {
        return card;
      }
    }
  }

}
