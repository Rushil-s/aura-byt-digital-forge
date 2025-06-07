import React, { Component, ErrorInfo, ReactNode } from 'react';
import { HoverButton } from '@/components/ui/hover-glow-button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertTriangle size={40} className="text-red-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
              <p className="text-muted-foreground mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverButton
                onClick={this.handleReload}
                variant="primary"
                glowColor="hsl(217, 91%, 60%)"
                className="shadow-lg"
              >
                <RefreshCw size={20} className="mr-3" />
                Refresh Page
              </HoverButton>
              
              <HoverButton
                href="/"
                variant="secondary"
                glowColor="hsl(217, 91%, 60%)"
                className="shadow-lg"
              >
                <Home size={20} className="mr-3" />
                Go Home
              </HoverButton>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground">
                  Error Details (Development)
                </summary>
                <pre className="mt-4 p-4 bg-muted/20 rounded text-xs overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;