// Type declaration for Cal.com integration
interface Window {
  Cal?: {
    q?: unknown[];
    ns?: Record<string, unknown>;
    loaded?: boolean;
    (...args: unknown[]): void;
  }
}
