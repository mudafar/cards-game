import { CardSuit, CardValue } from '../../types/card';
import { renderWithProviders } from '../../utils/test-utils';
import Dashboard from './container';

// it should show correct cards left and aces left
test('Show correct cards left and aces left', () => {
  const { getByTestId } = renderWithProviders(<Dashboard />, {
    preloadedState: {
      deck: {
        shuffledCards: [
          { value: CardValue.Ace, suit: CardSuit.Clovers },
          { value: CardValue.Two, suit: CardSuit.Clovers },
        ],
        dealtCards: [
          { value: CardValue.Ace, suit: CardSuit.Clovers },

          { value: CardValue.Three, suit: CardSuit.Clovers },
          { value: CardValue.Four, suit: CardSuit.Clovers },
          { value: CardValue.Five, suit: CardSuit.Clovers },
        ],
      },
    },
  });

  expect(getByTestId('cards-left')).toHaveTextContent('2Cards Left');
  expect(getByTestId('aces-left')).toHaveTextContent('1Ace Left');
});
