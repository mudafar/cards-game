type ErrorFallbackType = { error: Error; resetErrorBoundary: () => void };

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackType) {
  return (
    <div role="alert" className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-10">
      <p className="text-4xl">Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        type="button"
        className="my-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
