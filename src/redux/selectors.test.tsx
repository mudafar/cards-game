import { CardSuit, CardValue } from '../types/card';
import {
  selectAcesLeftCounter,
  selectCardsLeftCounter,
  selectDealtCards,
  selectIsGameOver,
  selectIsLastDraw,
  selectIsPlaying,
  selectIsWin,
  selectShuffledCards,
} from './selectors';
import { setupStore } from './store';

const state = setupStore().getState();

test('should select shuffled cards from the state', () => {
  expect(selectShuffledCards(state)).toEqual(state.deck.shuffledCards);
});

// it should select dealt cards from the state
test('should select dealt cards from the state', () => {
  expect(selectDealtCards(state)).toEqual(state.deck.dealtCards);
});

test('should select is last draw false', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [{ value: CardValue.Ace, suit: CardSuit.Clovers }],
    },
  }).getState();
  expect(selectIsLastDraw(tempState)).toBeFalsy();
});

test('should select is last draw true', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [],
    },
  }).getState();
  expect(selectIsLastDraw(tempState)).toBeTruthy();
});

test('should select correct aces left counter', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [{ value: CardValue.Ace, suit: CardSuit.Clovers }],
    },
  }).getState();
  expect(selectAcesLeftCounter(tempState)).toBe(1);
});

test('should select correct cards left counter', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [
        { value: CardValue.Ace, suit: CardSuit.Clovers },
        { value: CardValue.Two, suit: CardSuit.Clovers },
      ],
    },
  }).getState();
  expect(selectCardsLeftCounter(tempState)).toBe(2);
});

test('should select is win false', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [{ value: CardValue.Two, suit: CardSuit.Clovers }],
      shuffledCards: [],
    },
  }).getState();
  expect(selectIsWin(tempState)).toBeFalsy();
});

test('should select is win true', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [{ value: CardValue.Ace, suit: CardSuit.Clovers }],
      shuffledCards: [],
    },
  }).getState();
  expect(selectIsWin(tempState)).toBeTruthy();
});

test('should select is game over true', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [{ value: CardValue.Two, suit: CardSuit.Clovers }],
      shuffledCards: [],
    },
  }).getState();
  expect(selectIsGameOver(tempState)).toBeTruthy();
});

test('should select is game over false', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [{ value: CardValue.Ace, suit: CardSuit.Clovers }],
    },
  }).getState();
  expect(selectIsGameOver(tempState)).toBeFalsy();
});

test('should select is playing true', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [{ value: CardValue.Three, suit: CardSuit.Clovers }],
      shuffledCards: [{ value: CardValue.Ace, suit: CardSuit.Clovers }],
    },
  }).getState();
  expect(selectIsPlaying(tempState)).toBeTruthy();
});

test('should select is playing false', () => {
  const tempState = setupStore({
    deck: {
      dealtCards: [],
      shuffledCards: [{ value: CardValue.Three, suit: CardSuit.Clovers }],
    },
  }).getState();
  expect(selectIsPlaying(tempState)).toBeFalsy();
});
