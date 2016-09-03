import _ from 'underscore';

const WEIGHTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const SUITS = ["hearts", "diams", "spades", "clubs"];

class Card {
    constructor(weight, suit) {
        this.weight = weight;
        this.suit = suit;
    }
}

export class Deck {
    constructor() {
        this.cards = [];
        _.each(SUITS, (suit) =>
            _.each(WEIGHTS, (weight) =>
                this.add(new Card(weight, suit))))
        this.cards = _.shuffle(this.cards);
    }
    add(card) {
        this.cards.push(card);
    }
    draw(num) {
        return this.cards.splice(this.cards.length - num, num)
    }
}

export class CommunityCards {
  constructor() {
      this.cards = new Deck().draw(5);
  }
}

export class PokerHand {
    constructor() {
        this.cards = new Deck().draw(2);
        this.cards = _.sortBy(this.cards, (card) => card.weight);
    }
}
