export const GA_TRACKING_ID = "G-KQVFN9NKHL";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Pageview Tracking
export const pageview = (url: string, title?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: title || document.title,
    });
  }
};

// Event Tracking
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...params,
      page_location: window.location.href,
    });
  }
};
