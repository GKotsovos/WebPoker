import _ from 'underscore';

const evaluate = (hand) => {
  const straightFlushHand = getStraightFlushHand(hand);
  const straightHand = getStraightHand(hand);
  const smallStraightHand = getSmallStraightHand(hand);
  const flushHand = getFlushHand(hand);
  const pairHand = getPairs(hand);

  const combinations =
            [
              {
                  name: "Royal Flush",
                  is: !_.isEmpty(straightFlushHand) && hasAce(straightHand.cards),
                  handValue: 'J' + getHandValue(straightFlushHand),
                  cardsIds: straightFlushHand.cardsIds
              },
              {
                  name: "Straight flush",
                  is: !_.isEmpty(straightFlushHand),
                  handValue: 'I' + getHandValue(straightFlushHand),
                  cardsIds: straightFlushHand.cardsIds
              },
              {
                  name: "Four of a kind",
                  is: hasDuplicates(pairHand.cards, 4),
                  handValue: 'H' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
              },
              {
                  name: "Full house",
                  is: hasDuplicates(pairHand.cards, 3) && hasPair(pairHand.cards, 1),
                  handValue: 'G' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
              },
              {
                  name: "Flush",
                  is: !_.isEmpty(flushHand),
                  handValue: 'F' + getHandValue(flushHand),
                  cardsIds: flushHand.cardsIds
              },
              {
                  name: "Straight",
                  is: (!_.isEmpty(straightHand) || !_.isEmpty(smallStraightHand)),
                  handValue: 'E' + getHandValue(straightHand),
                  cardsIds: straightHand.cardsIds
              },
              {
                  name: "Three of a kind",
                  is: hasDuplicates(pairHand.cards, 3),
                  handValue: 'D' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
              },
              {
                  name: "Two pair",
                  is: hasPair(pairHand.cards, 2),
                  handValue: 'C' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
              },
              {
                  name: "One Pair",
                  is: hasPair(pairHand.cards, 1),
                  handValue: 'B' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
              },
              {
                  name: "High Card",
                  is: hasNoCombinations(hand),
                  handValue: 'A' + getHandValue(pairHand),
                  cardsIds: pairHand.cardsIds
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
                  .last(5)
                  .value();
  const cardsIds = getCardsIds(cards);
  const restCards = _.difference(hand, cards);
  return { cards, restCards, cardsIds };
}

const getFlushHand = (hand) => {
  const cards = _.chain(hand)
                 .groupBy('suit')
                 .values()
                 .filter((pairs) => pairs.length == 5)
                 .flatten()
                 .value();
  const cardsIds = getCardsIds(cards);
  const restCards = _.difference(hand, cards);
  return cards.length == 5 ? { cards, restCards, cardsIds } : {};
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
  const cardsIds = getCardsIds(cards);
  const restCards = _.difference(hand, cards);
  return cards.length == 5 ? { cards, restCards, cardsIds } : {};
}

const getSmallStraightHand = (hand) => {
  const smallStraight = [2, 3, 4, 5, 14];
  const isSmall =  _.every(hand, (card) => _.contains(smallStraight, card.weight));
  const restCards = _.difference(hand, smallStraight);
  const cards = _.difference(hand, restCards);
  const cardsIds = getCardsIds(cards);
  return isSmall ? { cards, restCards, cardsIds } : {};
}

const getStraightFlushHand = (hand) => {
  let straightHand = getStraightHand(hand);
  let smallStraightHand = getSmallStraightHand(hand);
  let cards;

  if(!_.isEmpty(straightHand)){
    cards = getFlushHand(straightHand.cards);
  }else if(!_.isEmpty(smallStraightHand)){
    cards = getFlushHand(smallStraightHand.cards);
  }else{
    return {};
  }
  
  const cardsIds = getCardsIds(cards);
  const restCards = _.difference(hand, cards);
  return cards.length == 5 ? { cards, restCards, cardsIds } : {};
}

const getHandValue = (hand) => getHandWeights(hand.cards) + getRestHandWeight(hand.restCards);

const getHandWeights = (hand) => {
  let handWeights =  _.chain(hand)
                      .pluck('weight')
                      .reverse()
                      .join('')
                      .value()
  return transformWeight(handWeights)
}

const getRestHandWeight = (restHand) => {
  const restHandPair = getHandWeights(restHand);
  const restHandUniq = _.chain(restHand)
                        .pluck('weight')
                        .reduce((firstWeight, nextWeight) => firstWeight + nextWeight, 0)
                        .value();
  return hasDuplicates(restHand) ? 'B' + restHandPair : 'A' + restHandUniq;
}

const getCardsIds = (hand) => {
  return _.map(hand, (card) => card.id)
}

const transformWeight = (weights) => {
  return weights.split('10').join('A')
                .split('11').join('B')
							  .split('12').join('C')
                .split('13').join('D')
                .split('14').join('E')
}

export const _getWinner = (players) => {
  const evalutedHands = _.map(players, (player) => evaluate(player.realHand));

  let handsValue = _.pluck(evalutedHands, 'handValue');
  const maxHandsValue = _.reduce(handsValue,(firstHandValue, nextHandValue) =>
                                firstHandValue > nextHandValue? firstHandValue : nextHandValue
  );
  const indexOfMaxValue = _.reduce(handsValue, (indexOfMaxValue, currentValue, index) =>  {
      if (currentValue === maxHandsValue){
        indexOfMaxValue.push(index);
      }
      return indexOfMaxValue;
    }, []
  );

  const cardsIds = _.chain(indexOfMaxValue)
                    .map((index) => evalutedHands[index].cardsIds)
                    .flatten()
                    .uniq()
                    .value()

  return {
           id: _.map(indexOfMaxValue, (index) => players[index].id),
           combination: evalutedHands[indexOfMaxValue[0]].name,
           cardsIds: cardsIds
         };
}

export const winningMessage = (winners) => {
  let message = '';
  if(winners.id.length == 1){
    message = `The winner is... Player ${_.map(winners.id, (id) => id + ' ')} with a ${winners.combination} combination!`;

  }else{
    message = `We have a tie! The winners are... Players ${_.map(winners.id, (id) => id )} with a ${winners.combination} combination!`;
  }
  return message;
}
