import { renderWithProviders } from '../../../utils/test-utils';
import CardCounter from './component';

// it should show correct card counter value
test('Show correct card counter value', () => {
  const { getByTestId } = renderWithProviders(<CardCounter value={1} title="Card" />);

  expect(getByTestId('card-counter-value')).toHaveTextContent('1');
});

// it should show correct card counter title
test('Show correct card counter title', () => {
  const { getByTestId } = renderWithProviders(<CardCounter value={1} title="Card" />);

  expect(getByTestId('card-counter-title')).toHaveTextContent('Card');
});

// it should capitalize card counter title if value is greater than 1
test('Capitalize card counter title if value is greater than 1', () => {
  const { getByTestId } = renderWithProviders(<CardCounter value={2} title="Ace" />);

  expect(getByTestId('card-counter-title')).toHaveTextContent('Aces Left');
});
