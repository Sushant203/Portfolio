import React, { Suspense, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./Loader.css";

// Error Fallback Component
const ErrorFallback = ({ error }) => {
  return (
    <div className="error-container">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

// Loading Fallback Component
const LoadingFallback = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default Loader;
