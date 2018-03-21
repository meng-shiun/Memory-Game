class StatusBoard {

  init() {
    this.moveCount  = 0;
    this.maxClick   = 0;  // Player can only click twice for each turn
    this.matchCount = 0;
    this.starsCount = 3;
    this.matchQueue = []; // Check if two cards in the queue are matched
  }

  addMove(selectedCard) {
    this.maxClick++;
    this.moveCount++;
    this.matchQueue.push(selectedCard);
    this.starsCount = (this.moveCount >= 30) ? 1 : (this.moveCount >= 20) ? 2 : 3;
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

      this.matchCount == 8 ? ScoreBoard.finalResult() : false;

      // Reset maxClick and match queue
      this.maxClick = 0;
      this.matchQueue = [];
    }
  }

}
