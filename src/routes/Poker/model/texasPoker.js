import _ from 'underscore';

const evaluate = (hand) => {
  const straightHand = getStraightHand(hand);
  const flushHand = getFlushHand(hand);
  const pairHand = getPairs(hand);

  const combinations =
            [
              {
                  name: "Royal Flush",
                  is: !_.isEmpty(straightHand) && !_.isEmpty(flushHand) && hasAce(straightHand.cards),
                  handValue: 'J' + getHandValue(straightHand),
                  hand: straightHand
              },
              {
                  name: "Straight flush",
                  is: !_.isEmpty(straightHand) && !_.isEmpty(flushHand),
                  handValue: 'I' + getHandValue(straightHand),
                  hand: straightHand
              },
              {
                  name: "Four of a kind",
                  is: hasDuplicates(pairHand.cards, 4),
                  handValue: 'H' + getHandValue(pairHand),
                  hand: pairHand
              },
              {
                  name: "Full house",
                  is: hasDuplicates(pairHand.cards, 3) && hasPair(pairHand.cards, 1),
                  handValue: 'G' + getHandValue(pairHand),
                  hand: pairHand
              },
              {
                  name: "Flush",
                  is: !_.isEmpty(flushHand),
                  handValue: 'F' + getHandValue(flushHand),
                  hand: flushHand
              },
              {
                  name: "Straight",
                  is: !_.isEmpty(straightHand),
                  handValue: 'E' + getHandValue(straightHand),
                  hand: straightHand
              },
              {
                  name: "Three of a kind",
                  is: hasDuplicates(pairHand.cards, 3),
                  handValue: 'D' + getHandValue(pairHand),
                  hand: pairHand
              },
              {
                  name: "Two pair",
                  is: hasPair(pairHand.cards, 2),
                  handValue: 'C' + getHandValue(pairHand),
                  hand: pairHand
              },
              {
                  name: "One Pair",
                  is: hasPair(pairHand.cards, 1),
                  handValue: 'B' + getHandValue(pairHand),
                  hand: pairHand
              },
              {
                  name: "High Card",
                  is: hasNoCombinations(hand),
                  handValue: 'A' + getHandValue(pairHand),
                  hand: pairHand
              }
          ];

    return _.findWhere(combinations, { is: true });
}

const hasNoCombinations = (hand) => {
  return _.chain(hand)
          .uniq()
          .value()
          .length == hand.length;
}

const hasAce = (hand) => {
  return _.chain(hand)
          .pluck('weight')
          .contains(14)
          .value();
}

const hasPair = (hand, numberOfPairs) => {
  return _.chain(hand)
          .countBy('weight')
          .values()
          .filter((num) => num == 2)
          .value()
          .length == numberOfPairs;
}

const hasDuplicates = (hand, numberOfDuplicates) => {
  return _.chain(hand)
          .countBy('weight')
          .values()
          .contains(numberOfDuplicates)
          .value();
}

const getPairs = (hand) => {
  const cards =  _.chain(hand)
                  .groupBy('weight')
                  .sortBy((pair) => pair.length)
                  .flatten()
                  .sortBy('weight')
                  .last(5)
                  .value();
  const restCards = _.difference(hand, cards);
  return { cards, restCards };
}

const getFlushHand = (hand) => {
  const cards = _.chain(hand)
                 .groupBy('suit')
                 .values()
                 .filter((pairs) => pairs.length == 5)
                 .flatten()
                 .value();
  const restCards = _.difference(hand, cards);
  return cards.length == 5 ? { cards, restCards } : {};
}

const getStraightHand = (hand) => {
  let counter = 0;
  const cards = _.chain(hand)
  					  	 .uniq((card) => card.weight)
  					 	 	 .sortBy('weight')
  						   .groupBy((card, i, hand) =>
                		i ? counter+= (1 !== card.weight - hand[i-1].weight) : 0
                  )
                 .filter((sequence) => sequence.length >= 5)
                 .flatten()
                 .last(5)
                 .value();
  const restCards = _.difference(hand, cards);
  return cards.length == 5 ? { cards, restCards } : {};
}

const getHandValue = (hand) => getHandWeights(hand.cards) + getRestHandWeight(hand.restCards);

const getHandWeights = (hand) => {
  return _.chain(hand)
          .pluck('weight')
          .reverse()
          .join('')
          .value()
}

const getRestHandWeight = (restHand) => {
  const restHandPair = getHandWeights(restHand);
  const restHandUniq = _.chain(restHand)
                        .pluck('weight')
                        .reduce((firstWeight, nextWeight) => firstWeight + nextWeight, 0)
                        .value();
  return hasDuplicates(restHand) ? 'B' + restHandPair : 'A' + restHandUniq;
}

export const _getWinner = (players) => {
  const evalutedHands = _.chain(players)
                         .map((player) => evaluate(player.realHand))
                         .value();
                         console.log(evalutedHands)
  const handsValue = _.pluck(evalutedHands, 'handValue');
  const maxHandsValue = _.reduce(handsValue, function(a,b){ return a>b?a:b; });
  const indexOfMaxValue = _.indexOf(handsValue, maxHandsValue);
  return { id: players[indexOfMaxValue].handId, combination: evalutedHands[indexOfMaxValue].name };
}
