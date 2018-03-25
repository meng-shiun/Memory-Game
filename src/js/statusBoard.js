class StatusBoard {

  init() {
    this.moveCount  = 0;
    this.maxClick   = 0;  // Player can only click twice for each turn
    this.matchCount = 0;
    this.starsCount = 3;
    this.matchQueue = []; // Check if two cards in the queue are matched

    // Reset star icons
    this.threeStars  = document.querySelector('#three-stars');
    this.twoStars    = document.querySelector('#two-stars');
    this.oneStar     = document.querySelector('#one-star');

    this.oneStar.classList.add('star-hide');
    this.twoStars.classList.add('star-hide');
    this.threeStars.classList.remove('star-hide');
  }

  addMove(selectedCard) {
    this.maxClick++;
    this.moveCount++;
    this.matchQueue.push(selectedCard);
    this.starsCount = (this.moveCount >= 48) ? 1 : (this.moveCount >= 30) ? 2 : 3;

    // Update star icons
    if (this.starsCount == 2) {
      this.threeStars.classList.add('star-hide');
      this.twoStars.classList.remove('star-hide');
    } else if (this.starsCount == 1){
      this.twoStars.classList.add('star-hide');
      this.oneStar.classList.remove('star-hide');
    }
  }

  checkMatch() {
    if (this.matchQueue[0] && this.matchQueue[1]) {
      if (this.matchQueue[1].name == this.matchQueue[0].name) {
        // If two cards match, display two cards eternally
        Card.cardsMatch(this.matchQueue[0], this.matchQueue[1]);
        this.matchCount++;
      } else {
        // If two cards don't match, flip both cards back
        Card.cardsNoMatch(this.matchQueue[0], this.matchQueue[1]);
      }

      // Reset maxClick and match queue
      this.maxClick = 0;
      this.matchQueue = [];
    }
  }

}
