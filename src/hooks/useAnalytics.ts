import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
    interface ImportMeta {
        env: { VITE_GA_ID?: string };
    }
}

const getGaId = () => {
    // Prefer Vite runtime env when available, fall back to process env for server-side runs
    const fromImportMeta = typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_GA_ID : undefined;
    const fromProcess = (process.env as any)?.VITE_GA_ID;
    const fromWindow = typeof window !== 'undefined' ? (window as any).__VITE_GA_ID__ : undefined;
    return fromImportMeta || fromProcess || fromWindow;
};

export function initGA(id?: string) {
    if (!id) return;

    // If gtag is already present (e.g., included in index.html), don't re-initialize.
    if (window.gtag) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
        window.dataLayer!.push(args);
    } as any;

    window.gtag?.('js', new Date());
    // disable automatic page_view so we can control when pageviews are sent
    window.gtag?.('config', id, { send_page_view: false });
}

export function trackPageview(id?: string, path?: string) {
    const measurementId = id || getGaId();
    if (!measurementId) return;
    const page_path = path ?? window.location.pathname + window.location.search + window.location.hash;
    window.gtag?.('config', measurementId, { page_path });
}

export function trackEvent(action: string, params?: Record<string, any>) {
    window.gtag?.('event', action, params);
}

export default function useAnalytics() {
    useEffect(() => {
        const id = getGaId();
        if (!id) return;

        initGA(id);
        trackPageview(id);

        const handler = () => trackPageview(id);
        window.addEventListener('popstate', handler);
        window.addEventListener('hashchange', handler);

        return () => {
            window.removeEventListener('popstate', handler);
            window.removeEventListener('hashchange', handler);
        };
    }, []);
}