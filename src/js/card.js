class Card {

  constructor(name, slot) {
    this.name = name;
    this.slot = slot;
    this.board = document.querySelector('#board');
    //TODO: Add image to card
  }

  // Show card's name
  flipCard() {
    this.board.children[this.slot].textContent = this.name;

    this.board.children[this.slot].classList.add('card-show');
    // TODO: animate image
  }

  // TODO: when two cards match / don't match
  cardsMatch() {
    // TODO: Once the cards match, disable click
    this.board.children[this.slot].classList.remove('card-cover');
  }

  cardsNoMatch() {

  }


}
