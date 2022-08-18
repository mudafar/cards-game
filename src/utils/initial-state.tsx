import { CardSuit, CardValue } from '../types/card';

export const winInitialState = {
  deck: {
    shuffledCards: [],
    dealtCards: [
      { value: CardValue.Ace, suit: CardSuit.Clovers },
      { value: CardValue.Two, suit: CardSuit.Clovers },
    ],
  },
};

export const playingInitialState = {
  deck: {
    shuffledCards: [
      { value: CardValue.Ace, suit: CardSuit.Clovers },
      { value: CardValue.Two, suit: CardSuit.Clovers },
    ],
    dealtCards: [
      { value: CardValue.Two, suit: CardSuit.Clovers },
      { value: CardValue.Three, suit: CardSuit.Clovers },
    ],
  },
};

export const loseNoCardsLeftInitialState = {
  deck: {
    shuffledCards: [],
    dealtCards: [
      { value: CardValue.Two, suit: CardSuit.Clovers },
      { value: CardValue.Three, suit: CardSuit.Clovers },
    ],
  },
};

export const loseNoAcesLeftInitialState = {
  deck: {
    shuffledCards: [{ value: CardValue.Two, suit: CardSuit.Clovers }],
    dealtCards: [
      { value: CardValue.Two, suit: CardSuit.Clovers },
      { value: CardValue.Two, suit: CardSuit.Clovers },
    ],
  },
};
