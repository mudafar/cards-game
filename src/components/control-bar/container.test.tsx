import { playingInitialState, winInitialState } from '../../utils/initial-state';
import { renderWithProviders } from '../../utils/test-utils';
import ControlBar from './container';

// show deal and reset buttons when is playing
test('Show only deal and reset buttons when is playing', () => {
  const { getByTestId, queryByTestId } = renderWithProviders(<ControlBar />, {
    preloadedState: playingInitialState,
  });

  expect(getByTestId('deal-button')).toBeInTheDocument();
  expect(getByTestId('deal-button')).toContainHTML('DEAL');
  expect(getByTestId('reset-button')).toBeInTheDocument();
  expect(getByTestId('reset-button')).toContainHTML('Reset');
  expect(queryByTestId('play-button')).toBeNull();
});

// show play again button when is not playing
test('Show play again button when is not playing', () => {
  const { getByTestId, queryByTestId } = renderWithProviders(<ControlBar />, {
    preloadedState: winInitialState,
  });

  expect(getByTestId('play-button')).toBeInTheDocument();
  expect(getByTestId('play-button')).toContainHTML('Play Again');
  expect(queryByTestId('deal-button')).toBeNull();
  expect(queryByTestId('reset-button')).toBeNull();
});
