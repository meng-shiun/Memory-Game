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
    this.board = document.querySelector('#board'); //TODO: Add image to card
  } // Show card's name


  _createClass(Card, [{
    key: "flipCard",
    value: function flipCard() {
      this.board.children[this.slot].textContent = this.name;
      this.board.children[this.slot].classList.add('card-show'); // TODO: animate image
    } // TODO: when two cards match / don't match

  }, {
    key: "cardsMatch",
    value: function cardsMatch() {
      // TODO: Once the cards match, disable click
      this.board.children[this.slot].classList.remove('card-cover');
    }
  }, {
    key: "cardsNoMatch",
    value: function cardsNoMatch() {}
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

    var cardA = 'Cat',
        cardB = 'Orange',
        cardC = '333',
        cardD = 'Space',
        cardE = 'Game',
        cardF = 'Cake',
        cardG = 'Apple',
        cardH = 'Tree';
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
    } // Generate cards in random slot

  }, {
    key: "buildCards",
    value: function buildCards() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.shuffleDeck[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _el = _step2.value;
          var card = new Card(_el.name, _el.slot);
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
    } // Get the card according to its slot ID

  }, {
    key: "getCard",
    value: function getCard(slotID) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.deckCards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _card2 = _step3.value;

          if (_card2.slot == slotID) {
            return _card2;
          }
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
    }
  }]);

  return Deck;
}(); // TODO: Check if two cards match
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var deck = new Deck();
document.addEventListener('DOMContentLoaded', function () {
  var _console;

  deck.shuffle(16);
  deck.buildCards();
  deck.deckCards.sort(function (a, b) {
    return a.slot - b.slot;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = deck.deckCards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _el = _step.value;
      console.log("slot: ".concat(_el.slot, ", name: ").concat(_el.name));
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

  (_console = console).log.apply(_console, _toConsumableArray(deck.deckCards));
}); // If click on a card, get the corresponding card

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card-cover')) {
    var card = deck.getCard(evt.target.id);
    card.flipCard(); //TODO: add one move
    //TODO: push the first card name in pair queue
  }
}, true);
"use strict";
"use strict";
"use strict";
//# sourceMappingURL=bundle.js.map
