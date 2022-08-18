import App from './components/app';
import { playingInitialState } from './utils/initial-state';
import { renderWithProviders } from './utils/test-utils';

test('renders ', () => {
  renderWithProviders(<App />, {
    preloadedState: playingInitialState,
  });
});
