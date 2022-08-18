import { CardSuit, CardValue } from '../types/card';
import reducer, { deal, reset } from './slice';

// should handle deal action
test('should handle deal action', () => {
  const state = {
    shuffledCards: [
      { value: CardValue.Five, suit: CardSuit.Clovers },
      { value: CardValue.Six, suit: CardSuit.Clovers },
      { value: CardValue.Three, suit: CardSuit.Hearts },
      { value: CardValue.Ace, suit: CardSuit.Spades },
      { value: CardValue.Two, suit: CardSuit.Clovers },
      { value: CardValue.Four, suit: CardSuit.Diamonds },
    ],
    dealtCards: [],
  };
  const expectedState = {
    shuffledCards: [{ value: CardValue.Four, suit: CardSuit.Diamonds }],
    dealtCards: [
      { value: CardValue.Five, suit: CardSuit.Clovers },
      { value: CardValue.Six, suit: CardSuit.Clovers },
      { value: CardValue.Three, suit: CardSuit.Hearts },
      { value: CardValue.Ace, suit: CardSuit.Spades },
      { value: CardValue.Two, suit: CardSuit.Clovers },
    ],
  };
  expect(reducer(state, deal())).toEqual(expectedState);
});

// should handle reset action
test('should handle reset action', () => {
  const state = {
    shuffledCards: [
      { value: CardValue.Five, suit: CardSuit.Clovers },
      { value: CardValue.Six, suit: CardSuit.Clovers },
      { value: CardValue.Three, suit: CardSuit.Hearts },
    ],
    dealtCards: [
      { value: CardValue.Ace, suit: CardSuit.Spades },
      { value: CardValue.Two, suit: CardSuit.Clovers },
      { value: CardValue.Four, suit: CardSuit.Diamonds },
    ],
  };

  const nextState = reducer(state, reset());
  expect(nextState.shuffledCards.length).toEqual(47);
  expect(nextState.dealtCards.length).toEqual(5);
});
