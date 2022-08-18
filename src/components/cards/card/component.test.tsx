import clover from '../../../assets/Clover.svg';
import { CardSuit, CardValue } from '../../../types/card';
import { renderWithProviders } from '../../../utils/test-utils';
import Card from './component';

// it should show correct card value
test('Show correct card value', () => {
  const { getByTestId } = renderWithProviders(
    <Card card={{ value: CardValue.Ace, suit: CardSuit.Clovers }} />
  );

  expect(getByTestId('card-value')).toHaveTextContent(CardValue.Ace);
});

// it should show correct card suit
test('Show correct card suit', () => {
  const { getByTestId } = renderWithProviders(
    <Card card={{ value: CardValue.Ace, suit: CardSuit.Clovers }} />
  );

  // expect image source to be same as suit
  expect(getByTestId('card-suit-image')).toHaveAttribute('src', clover);
  expect(getByTestId('card-small-suit-image')).toHaveAttribute('src', clover);
});

// todo: test other cases...
