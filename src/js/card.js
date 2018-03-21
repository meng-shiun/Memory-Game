class Card {

  constructor(name, slot) {
    this.name = name;
    this.slot = slot;
    this.board = document.querySelector('#board');
    //TODO: Add image to card
  }

  flipCard() {

    let selectedSlot = this.board.children[this.slot];

    // Show card's name
    selectedSlot.textContent = this.name;

    selectedSlot.classList.add('card-show');
    selectedSlot.classList.remove('card-cover');

    // Show card's image
    const img = document.createElement('img');

    let content = `<img src="img/${this.name}.svg" id="icon-${this.slot}" class="card-icon-show">`;

    img.insertAdjacentHTML('afterbegin', content);

    selectedSlot.appendChild(img);
    // TODO: animate image
  }

  static cardsMatch(card1, card2) {
    // TODO: When cards match, play animation
    // this.board.children[this.slot].classList.remove('card-cover');
  }

  static cardsNoMatch(card1, card2) {

    let cards = [card1.board.children[card1.slot], card2.board.children[card2.slot]];

    setTimeout(() => {
      cards.forEach(c => {
        c.classList.remove('card-show');
        c.classList.add('card-cover');
        c.textContent = 'Flip back';
      });
    }, 500);
    // TODO: play animation
  }

  static init() {
    const board = document.body.querySelector('.board');

    for (let el of board.children) {
      el.textContent = 'reset card';
      let isFlipped = el.classList.contains('card-show');
      isFlipped ? el.classList.replace('card-show', 'card-cover') : false;
    }
  }


}
