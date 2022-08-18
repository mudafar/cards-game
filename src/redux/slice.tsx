import { createSlice } from '@reduxjs/toolkit';
import { Deck } from '../types/deck';
import { extract5Cards, generateDeck, shuffleDeck } from './utils';

type SliceState = { shuffledCards: Deck; dealtCards: Deck };

export function generateInitialState(): SliceState {
  const deck: Deck = generateDeck();
  const shuffledCards = shuffleDeck(deck);
  const dealtCards = extract5Cards(shuffledCards);

  return { shuffledCards, dealtCards };
}

const deckSlice = createSlice({
  name: 'deck',
  initialState: generateInitialState(),
  reducers: {
    deal: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.dealtCards = extract5Cards(state.shuffledCards);
    },
    reset: () => {
      return generateInitialState();
    },
  },
});

export const { deal, reset } = deckSlice.actions;

export default deckSlice.reducer;
