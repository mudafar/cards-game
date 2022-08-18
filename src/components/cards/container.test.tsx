import { CardSuit, CardValue } from '../../types/card';
import { renderWithProviders } from '../../utils/test-utils';
import Cards from './container';

// it should show 5 cards in the deck
test('Show 5 cards in the deck', () => {
  const { getAllByTestId } = renderWithProviders(<Cards />, {
    preloadedState: {
      deck: {
        shuffledCards: [],
        dealtCards: [
          { value: CardValue.Ace, suit: CardSuit.Clovers },
          { value: CardValue.Two, suit: CardSuit.Clovers },
          { value: CardValue.Three, suit: CardSuit.Clovers },
          { value: CardValue.Four, suit: CardSuit.Clovers },
          { value: CardValue.Five, suit: CardSuit.Clovers },
        ],
      },
    },
  });

  expect(getAllByTestId('card')).toHaveLength(5);
});

// it should show no cards in the deck when there are no cards left
test('Show no cards in the deck when there are no cards left', () => {
  const { queryAllByTestId } = renderWithProviders(<Cards />, {
    preloadedState: {
      deck: {
        shuffledCards: [],
        dealtCards: [],
      },
    },
  });

  expect(queryAllByTestId('card')).toHaveLength(0);
});

// it should show two cards in the deck when there are two cards left
test('Show two cards in the deck when there are two cards left', () => {
  const { getAllByTestId } = renderWithProviders(<Cards />, {
    preloadedState: {
      deck: {
        shuffledCards: [],
        dealtCards: [
          { value: CardValue.Ace, suit: CardSuit.Clovers },
          { value: CardValue.Two, suit: CardSuit.Clovers },
        ],
      },
    },
  });

  expect(getAllByTestId('card')).toHaveLength(2);
});
