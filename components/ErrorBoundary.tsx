'use client';

import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import './ErrorBoundary.css';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  sectionName?: string;
  silent?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary] Caught error in ${this.props.sectionName || 'Component'}:`, error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      if (this.props.silent) {
        return null;
      }

      // If it's a section-level boundary, render a compact graceful notice
      if (this.props.sectionName) {
        return (
          <div className="section-error-fallback" style={{
            padding: '2rem 1rem',
            textAlign: 'center',
            color: 'var(--text-muted, #94a3b8)',
            fontSize: '0.9rem',
          }}>
            <p>This interactive section is temporarily refreshing.</p>
            <button
              onClick={this.handleReset}
              style={{
                marginTop: '0.5rem',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              Retry
            </button>
          </div>
        );
      }

      return (
        <div className="error-boundary-container">
          <div className="error-boundary-card">
            <div className="error-icon-circle">
              <AlertTriangle size={36} />
            </div>
            <h2>Experience Restored</h2>
            <p>
              We encountered a temporary rendering condition. Our secure consultation desk remains fully available.
            </p>
            <button className="error-reload-btn" onClick={this.handleReset}>
              <RefreshCw size={16} /> Continue Browsing
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
