import { ErrorBoundary } from 'react-error-boundary';
import Layout from '../layout';
import ErrorFallback from './error-fallback';

type AppType = { onReset: () => void };

function App({ onReset }: AppType) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
