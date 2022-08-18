import winner from '../../assets/winner.svg';
import {
  loseNoAcesLeftInitialState,
  loseNoCardsLeftInitialState,
  playingInitialState,
  winInitialState,
} from '../../utils/initial-state';
import { renderWithProviders } from '../../utils/test-utils';
import Banner from './container';

test('Show winner banner when there is an Ace in the last dealt cards', () => {
  const { getByTestId } = renderWithProviders(<Banner />, {
    preloadedState: winInitialState,
  });

  expect(getByTestId('winner-banner-image')).toBeInTheDocument();
  expect(getByTestId('winner-banner-image')).toHaveAttribute('src', winner);
});

// test no winner banner when is playing
test('No winner banner when is playing', () => {
  const { queryByTestId } = renderWithProviders(<Banner />, {
    preloadedState: playingInitialState,
  });

  expect(queryByTestId('winner-banner-image')).not.toBeInTheDocument();
});

test('No winner banner in game over - no aces left', () => {
  const { queryByTestId } = renderWithProviders(<Banner />, {
    preloadedState: loseNoAcesLeftInitialState,
  });

  expect(queryByTestId('winner-banner-image')).not.toBeInTheDocument();
});

test('No winner banner in game over -  no cards left', () => {
  const { queryByTestId } = renderWithProviders(<Banner />, {
    preloadedState: loseNoCardsLeftInitialState,
  });

  expect(queryByTestId('winner-banner-image')).not.toBeInTheDocument();
});
