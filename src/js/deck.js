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
  shuffle(cardsCount) {
    let takenSlots = [];    // Store random slot id without duplication
    this.shuffleDeck = [];  // Shuffled cards in random slot

    for (let card of this.cardsPair) {
      this.shuffleDeck.push({name: card, slot: 0});
    }

    for (let i = 0; i < cardsCount; i++) {
      let randomId = Math.floor(Math.random() * cardsCount);

      // Regenerate random id if slot is taken, otherwise store random id to takenSlots
      takenSlots.indexOf(randomId) == -1 ? takenSlots.push(randomId) : i--;

      this.shuffleDeck[i].slot = takenSlots[i];
    }
  }

  // Generate cards for deckCards[]
  buildCards() {
    for (let c of this.shuffleDeck) {
      let card = new Card(c.name, c.slot);
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
