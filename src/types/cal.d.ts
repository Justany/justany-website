// Type declaration for Cal.com integration
interface Window {
  Cal?: {
    q?: any[];
    ns?: Record<string, any>;
    loaded?: boolean;
    (...args: any[]): void;
  }
}
