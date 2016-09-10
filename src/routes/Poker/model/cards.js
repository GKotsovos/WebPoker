import _ from 'underscore';

const WEIGHTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const SUITS = ['hearts', 'diams', 'spades', 'clubs'];

class Card {
  constructor(weight, suit, id) {
    this.weight = weight;
    this.suit = suit;
    this.id = id;
  }
}

export const deck = () => {
  let id = 0;
  const cards = [];
  _.each(SUITS, (suit) =>
    _.each(WEIGHTS, (weight) =>
      cards.push(new Card(weight, suit, id++))))
  return _.shuffle(cards);
}
