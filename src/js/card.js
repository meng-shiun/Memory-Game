class Card {

  constructor(name, slot) {
    this.name = name;
    this.slot = slot;
    this.board = document.querySelector('#board');
    this.isTriggered = false;
  }

  flipCard() {

    let selectedSlot = this.board.children[this.slot];

    // Show card's name & add fliping animation
    selectedSlot.classList.add('card-show', 'back-flip');

    selectedSlot.classList.remove('card-cover');

  }

  static cardsMatch(card1, card2) {

    let cards = [card1.board.children[card1.slot], card2.board.children[card2.slot]];

    setTimeout(() => {
      cards.forEach(c => {
        c.children[1].classList.remove('touch');
        c.classList.add('match', 'bounce');
      });
    }, 400);
  }

  static cardsNoMatch(card1, card2) {

    let cards = [card1.board.children[card1.slot], card2.board.children[card2.slot]];

    setTimeout(() => {
      cards.forEach(c => {
        c.classList.add('shake');
        c.classList.remove('card-show');
        c.classList.add('no-match');
        setTimeout(() => {
          c.classList.remove('no-match', 'back-flip', 'shake');
        }, 900);
        c.classList.add('card-cover');
      });
    }, 400);

    card1.isTriggered = false;
    card2.isTriggered = false;
  }

  static init() {
    const board = document.body.querySelector('.board');

    for (let el of board.children) {
      let isFlipped = el.classList.contains('card-show');
      isFlipped ? el.classList.replace('card-show', 'card-cover') : false;
    }

  }


}
