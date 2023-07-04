import React from 'react';
import { useSelector } from 'react-redux';
import ErrorFallback from './ErrorFallBack'
import { ErrorBoundary } from 'react-error-boundary';

const Previewer = () => {
    const text = useSelector((state) => state.text);
    console.log(text);
return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div id='preview'>
        <h2>Previewer</h2>
        <p>{text}</p>
      </div>
    </ErrorBoundary>
  );
};

export default Previewer;
