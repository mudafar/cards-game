import { Card, CardValue } from '../types/card';
import { Deck } from '../types/deck';
import { RootState } from './store';

const selectShuffledCards = (state: RootState): Deck => state.deck.shuffledCards;
const selectDealtCards = (state: RootState): Deck => state.deck.dealtCards;

function selectIsLastDraw(state: RootState): boolean {
  return selectShuffledCards(state).length === 0;
}

// get aces left counter
function selectAcesLeftCounter(state: RootState): number {
  return selectShuffledCards(state).filter((card: Card) => card.value === CardValue.Ace).length;
}

// get cards left counter
function selectCardsLeftCounter(state: RootState): number {
  return selectShuffledCards(state).length;
}

// win if there is an ace in last draw
function selectIsWin(state: RootState): boolean {
  return (
    selectIsLastDraw(state) &&
    selectDealtCards(state).filter((card: Card) => card.value === CardValue.Ace).length > 0
  );
}

// todo: check is final round
// no aces left or cards left - game over
function selectIsGameOver(state: RootState): boolean {
  return (
    !selectIsWin(state) &&
    (selectAcesLeftCounter(state) === 0 || selectCardsLeftCounter(state) === 0)
  );
}

// is game over or win
function selectIsPlaying(state: RootState): boolean {
  return !selectIsGameOver(state) && !selectIsWin(state);
}

export {
  selectShuffledCards,
  selectDealtCards,
  selectIsLastDraw,
  selectAcesLeftCounter,
  selectCardsLeftCounter,
  selectIsGameOver,
  selectIsWin,
  selectIsPlaying,
};
