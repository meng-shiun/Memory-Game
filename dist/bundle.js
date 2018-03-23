"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  function Card(name, slot) {
    _classCallCheck(this, Card);

    this.name = name;
    this.slot = slot;
    this.board = document.querySelector('#board');
    this.isTriggered = false;
  }

  _createClass(Card, [{
    key: "flipCard",
    value: function flipCard() {
      var selectedSlot = this.board.children[this.slot]; // Show card's name & add fliping animation

      selectedSlot.classList.add('card-show', 'back-flip');
      selectedSlot.classList.remove('card-cover');
    }
  }], [{
    key: "cardsMatch",
    value: function cardsMatch(card1, card2) {
      var cards = [card1.board.children[card1.slot], card2.board.children[card2.slot]];
      setTimeout(function () {
        cards.forEach(function (c) {
          c.children[1].classList.remove('touch');
          c.classList.add('match', 'bounce');
        });
      }, 400);
    }
  }, {
    key: "cardsNoMatch",
    value: function cardsNoMatch(card1, card2) {
      var cards = [card1.board.children[card1.slot], card2.board.children[card2.slot]];
      setTimeout(function () {
        cards.forEach(function (c) {
          c.classList.add('shake');
          c.classList.remove('card-show');
          c.classList.add('no-match');
          setTimeout(function () {
            c.classList.remove('no-match', 'back-flip', 'shake');
          }, 900);
          c.classList.add('card-cover');
        });
      }, 400);
      card1.isTriggered = false;
      card2.isTriggered = false;
    }
  }, {
    key: "init",
    value: function init() {
      var board = document.body.querySelector('.board');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = board.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _el = _step.value;

          var isFlipped = _el.classList.contains('card-show');

          isFlipped ? _el.classList.replace('card-show', 'card-cover') : false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Card;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);

    var cards = [];
    this.cardsPair = [];
    this.deckCards = []; // A shuffled deck of cards

    var cardA = 'fas fa-coffee',
        cardB = 'fab fa-docker',
        cardC = 'fas fa-gamepad',
        cardD = 'far fa-gem',
        cardE = 'fas fa-heart',
        cardF = 'far fa-lemon',
        cardG = 'fas fa-rocket',
        cardH = 'far fa-snowflake';
    cards.push(cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH);
    this.cardsPair = cards.concat(cards);
  } // Shuffle cards and put them in randomized slots


  _createClass(Deck, [{
    key: "shuffle",
    value: function shuffle(cardsCount) {
      var takenSlots = []; // Store random slot id without duplication

      this.shuffleDeck = []; // Shuffled cards in random slot

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.cardsPair[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _card = _step.value;
          this.shuffleDeck.push({
            name: _card,
            slot: 0
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var i = 0; i < cardsCount; i++) {
        var randomId = Math.floor(Math.random() * cardsCount); // Regenerate random id if slot is taken, otherwise store random id to takenSlots

        takenSlots.indexOf(randomId) == -1 ? takenSlots.push(randomId) : i--;
        this.shuffleDeck[i].slot = takenSlots[i];
      }
    } // Generate cards for deckCards[]

  }, {
    key: "buildCards",
    value: function buildCards() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.shuffleDeck[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _c = _step2.value;
          var card = new Card(_c.name, _c.slot);
          this.deckCards.push(card);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "buildCardsHTML",
    value: function buildCardsHTML() {
      var board = document.body.querySelector('.board'); // Clear board

      board.innerHTML = '';
      this.deckCards.sort(function (a, b) {
        return a.slot - b.slot;
      });
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.deckCards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _c2 = _step3.value;
          var card = "<div id=\"".concat(_c2.slot, "\" class=\"card card-cover back\"><i class=\"").concat(_c2.name, "\"></i><div class=\"touch\"></div></div>");
          board.insertAdjacentHTML('beforeend', card);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    } // Return the card obj according to its slot ID

  }, {
    key: "getCard",
    value: function getCard(slotID) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.deckCards[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _card2 = _step4.value;

          if (_card2.slot == slotID) {
            return _card2;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return Deck;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StatusBoard =
/*#__PURE__*/
function () {
  function StatusBoard() {
    _classCallCheck(this, StatusBoard);
  }

  _createClass(StatusBoard, [{
    key: "init",
    value: function init() {
      this.moveCount = 0;
      this.maxClick = 0; // Player can only click twice for each turn

      this.matchCount = 0;
      this.starsCount = 3;
      this.matchQueue = []; // Check if two cards in the queue are matched
      // Reset star icons

      this.threeStars = document.querySelector('#three-stars');
      this.twoStars = document.querySelector('#two-stars');
      this.oneStar = document.querySelector('#one-star');
      this.oneStar.classList.add('star-hide');
      this.twoStars.classList.add('star-hide');
      this.threeStars.classList.remove('star-hide');
    }
  }, {
    key: "addMove",
    value: function addMove(selectedCard) {
      this.maxClick++;
      this.moveCount++;
      this.matchQueue.push(selectedCard);
      this.starsCount = this.moveCount >= 30 ? 1 : this.moveCount >= 20 ? 2 : 3; // Update star icons

      if (this.starsCount == 2) {
        this.threeStars.classList.add('star-hide');
        this.twoStars.classList.remove('star-hide');
      } else if (this.starsCount == 1) {
        this.twoStars.classList.add('star-hide');
        this.oneStar.classList.remove('star-hide');
      }
    }
  }, {
    key: "checkMatch",
    value: function checkMatch() {
      if (this.matchQueue[0] && this.matchQueue[1]) {
        if (this.matchQueue[1].name == this.matchQueue[0].name) {
          // If two cards match, display two cards eternally
          Card.cardsMatch(this.matchQueue[0], this.matchQueue[1]);
          this.matchCount++;
        } else {
          // If two cards don't match, flip both cards back
          Card.cardsNoMatch(this.matchQueue[0], this.matchQueue[1]);
        } // Reset maxClick and match queue


        this.maxClick = 0;
        this.matchQueue = [];
      }
    }
  }]);

  return StatusBoard;
}();
"use strict";

var deck = new Deck();
var statusBoard = new StatusBoard();
var move = document.querySelector('#move-count');
var statusMoves = document.querySelector('#status-moves');
var matchCount = document.querySelector('#match-count');
var stars = document.querySelector('#star-count');
var resetBtn = document.querySelector('#reset');
var timerShown = document.querySelector('#timer');
var scoreBoard = document.querySelector('#score-board');
var timeElapsed = Number(timerShown.textContent);
var timer;
document.addEventListener('DOMContentLoaded', function () {
  deck.shuffle(16);
  deck.buildCards();
  deck.buildCardsHTML();
  statusBoard.init();
  deck.deckCards.sort(function (a, b) {
    return a.slot - b.slot;
  }); // console.log(...deck.deckCards);
});
document.querySelector('main').addEventListener('click', function (e) {
  // If click on card
  if (e.target.classList.contains('touch')) {
    var cardID = e.target.parentNode.id;
    var currentCard = deck.getCard(cardID) || null; // If card is already clicked

    if (currentCard.isTriggered) return;
    currentCard.isTriggered = true;
    currentCard.flipCard(); // Add one move & push first card obj in pair queue

    statusBoard.addMove(currentCard); // Check if second card obj match in pair queue

    statusBoard.checkMatch(); // When click on first card, start timer

    move.textContent == 0 ? timer = setTimeout(timeCounter, 1000) : false;
  } // If click on reset button


  e.target.id == 'reset' ? resetGame() : null; // If click on replay button

  e.target.id == 'replay' ? resetGame() : null;
  updateStatus();
}, true); // Show status on board

var updateStatus = function updateStatus() {
  move.textContent = statusBoard.moveCount;
  statusMoves.textContent = move.textContent;
  matchCount.textContent = statusBoard.matchCount;
  stars.textContent = statusBoard.starsCount; // Stop timer when all cards are matched and show score board

  if (matchCount.textContent == 8) {
    scoreBoard.classList.remove('modal-hide');
    scoreBoard.classList.add('modal-trans');
    setTimeout(function () {
      scoreBoard.classList.add('modal-show');
    }, 1200);
    clearTimeout(timer);
  } else if (matchCount.textContent == 0) {
    scoreBoard.classList.remove('modal-show');
  }
};

var timeCounter = function timeCounter() {
  timeElapsed++;
  timerShown.textContent = timeElapsed;
  timer = setTimeout(timeCounter, 1000);
};

var resetGame = function resetGame() {
  // Reset deck
  deck = new Deck();
  deck.shuffle(16);
  deck.buildCards();
  deck.buildCardsHTML(); // Clear card pairs

  Card.init(); // Reset moves, match count on status board

  statusBoard.init(); // Reset timer

  timeElapsed = 0;
  timerShown.textContent = 0;
  clearTimeout(timer); // Hide score board

  scoreBoard.classList.remove('modal-show', 'modal-trans');
  scoreBoard.classList.add('modal-hide');
};
//# sourceMappingURL=bundle.js.map
