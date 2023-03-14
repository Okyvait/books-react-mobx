import React, { ErrorInfo } from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };
  props: React.PropsWithChildren;

  constructor(props: React.PropsWithChildren) {
    super(props);
  }

  private promiseRejectionHandler = (event: PromiseRejectionEvent) => {
    ErrorBoundary.logError(event);
  };

  private errorHandler = (event: PromiseRejectionEvent) => {
    ErrorBoundary.logError(event);
  };

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.promiseRejectionHandler);
    window.addEventListener('error', this.errorHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.promiseRejectionHandler);
    window.removeEventListener('error', this.errorHandler);
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  static logError(e: Error | PromiseRejectionEvent, errorInfo?: ErrorInfo) {
    console.error(e, errorInfo);
  }

  componentDidCatch(error, errorInfo) {
    // log to sentry
    ErrorBoundary.logError(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>Please, try again later, or contact us</p>
        </div>
      );
    }

    return this.props.children;
  }
}
