class Deck {

  constructor() {
    let cards = [];
    this.cardsPair = [];
    this.deckCards = []; // A shuffled deck of cards

    let cardA = 'Cat',
        cardB = 'Orange',
        cardC = '333',
        cardD = 'Space',
        cardE = 'Game',
        cardF = 'Cake',
        cardG = 'Apple',
        cardH = 'Tree';

    cards.push(cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH);
    this.cardsPair = [...cards, ...cards];
  }

  // Shuffle cards and put them in randomized slots
  shuffle(cardsCount) {
    let takenSlots = []; // Store random slot id without duplication
    this.shuffleDeck = []; // Shuffled cards in random slot

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

  // Generate cards in random slot
  buildCards() {
    for (let el of this.shuffleDeck) {
      let card = new Card(el.name, el.slot);
      this.deckCards.push(card);
    }
  }

  // Get the card according to its slot ID
  getCard(slotID) {
    for (let card of this.deckCards) {
      if (card.slot == slotID) {
        return card;
      }
    }
  }

}


// TODO: Check if two cards match
