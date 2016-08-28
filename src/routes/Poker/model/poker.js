import _ from 'underscore'

const WEIGHTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const SUITS = ["hearts", "diams", "spades", "clubs"];
const HANDVALUE = {
    royalFlush: 90000000000,
    straightFlush: 80000000000,
    fourOfAKind: { baseWeight: 70000000000, cardsWeight: 100000000 },
    fullHouse: { baseWeight: 60000000000 },
    flush: 50000000000,
    straight: 40000000000,
    threeOfAKind: { baseWeight: 30000000000, cardsWeight: 1000000 },
    twoPair: { baseWeight: 20000000000 },
    onePair: { baseWeight: 10000000000 },
    secondPair: 1000,
    firstPair: 100,
    highCard: 0
};

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
        const cards = this.cards.splice(this.cards.length - num, num)
        return _.sortBy(cards, (card) => card.weight);
    }
}

export class PokerHand {
    constructor() {
        this.cards = new Deck().draw(5);
        this.cards = _.sortBy(this.cards, (card) => card.weight);
    }
}

export class Player{
    constructor(name, hand) {
        this.name = name;
        this.hand = hand.cards;
    }
}

export function evaluate(hand) {

    let combinations = [
                {
                    name: "Royal Flush",
                    is: isStraight(hand) && isFlush(hand) && hasAce(hand),
                    handValue: HANDVALUE.royalFlush +
                                totalHandWeight(hand)
                },
                {
                    name: "Straight flush",
                    is: isStraight(hand) && isFlush(hand),
                    handValue: HANDVALUE.straightFlush +
                                totalHandWeight(hand)
                },
                {
                    name: "Four of a kind",
                    is: hasDuplicates(hand, 4),
                    handValue: HANDVALUE.fourOfAKind.baseWeight +
                                HANDVALUE.fourOfAKind.cardsWeight * combinationWeight(hand) +
                                totalHandWeight(hand)
                },
                {
                    name: "Full house",
                    is: hasDuplicates(hand, 3) && hasPair(hand, 1),
                    handValue: HANDVALUE.fullHouse.baseWeight +
                                HANDVALUE.firstPair * combinationWeight(hand)[0] +
                                HANDVALUE.threeOfAKind.cardsWeight * combinationWeight(hand)[1] +
                                totalHandWeight(hand)
                },
                {
                    name: "Flush",
                    is: isFlush(hand),
                    handValue: HANDVALUE.flush + totalHandWeight(hand)
                },
                {
                    name: "Straight",
                    is: isStraight(hand),
                    handValue: HANDVALUE.straight + totalHandWeight(hand)
                },
                {
                    name: "Three of a kind",
                    is: hasDuplicates(hand, 3),
                    handValue: HANDVALUE.threeOfAKind.baseWeight +
                                HANDVALUE.threeOfAKind.cardsWeight * combinationWeight(hand) +
                                totalHandWeight(hand)
                },
                {
                    name: "Two pair",
                    is: hasPair(hand, 2),
                    handValue: HANDVALUE.twoPair.baseWeight +
                                HANDVALUE.firstPair * combinationWeight(hand)[0] +
                                HANDVALUE.secondPair * combinationWeight(hand)[1] +
                                totalHandWeight(hand)
                },
                {
                    name: "One Pair",
                    is: hasPair(hand, 1),
                    handValue: HANDVALUE.onePair.baseWeight +
                                HANDVALUE.firstPair * combinationWeight(hand) +
                                totalHandWeight(hand)
                },
                {
                    name: "High Card",
                    is: hasNoCombinations(hand),
                    handValue: HANDVALUE.highCard + totalHandWeight(hand)
                }];
    return _.findWhere(combinations, { is: true });
}

function hasNoCombinations(hand) {
    return _.chain(hand)
            .uniq()
            .value()
            .length == 5;
}

function hasPair(hand, numberOfPairs) {
    return _.chain(hand)
            .countBy('weight')
            .values()
            .filter((num) => num == 2)
            .value()
            .length == numberOfPairs;
}

function hasDuplicates(hand, numberOfDuplicates) {
    return _.chain(hand)
            .countBy('weight')
            .values()
            .contains(numberOfDuplicates)
            .value();
}

function isStraight(hand) {
    var weightValues = _.pluck(hand, 'weight');
    return _.chain(weightValues)
            .every((num, i) => _.min(weightValues) + i == num)
            .value();
}

function isFlush(hand) {
    return _.chain(hand)
            .countBy('suit')
            .values()
            .every((num) => num == 5)
            .value();
}

function hasAce(hand) {
    return _.chain(hand)
            .pluck('weight')
            .contains(14)
            .value();
}

function combinationWeight(hand) {
    var pairWeight = [];
    var weightGroup = _.countBy(hand, 'weight');
    _.each(weightGroup, function (count, rank) {
        if (count > 1) {
            pairWeight.push(rank * count);
        }
    })
    return pairWeight;
}

function totalHandWeight(hand) {
    return _.chain(hand)
            .pluck('weight')
            .reduce((memo, num) => memo + num)
            .value();
}

export function _getWinner(players) {
    let evalutedHands =
          _.chain(players)
          .map((player) => evaluate(player.hand))
          .value();
    let handsValue = _.pluck(evalutedHands, 'handValue');
    let indexOfMaxValue = _.indexOf(handsValue, _.max(handsValue));
    return {id: players[indexOfMaxValue].handId, combination: evalutedHands[indexOfMaxValue].name};
}
