import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/layout/Layout";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred while rendering the page.
      </p>
      <code className="rounded-md bg-zinc-100 px-3 py-2 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
        {error.message}
      </code>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Try again
      </button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
