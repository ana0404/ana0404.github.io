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
    return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_ID) || (process.env as any)?.VITE_GA_ID;
};

export function initGA(id?: string) {
    if (!id) return;
    if (window.gtag) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function _gtag(...args: any[]) {
        window.dataLayer!.push(arguments);
    }
    window.gtag = (...args: any[]) => {
        window.dataLayer!.push(args);
    };

    window.gtag('js', new Date());
    // disable automatic page_view so we can control when pageviews are sent
    window.gtag('config', id, { send_page_view: false });
}

export function trackPageview(id?: string, path?: string) {
    const measurementId = id || getGaId();
    if (!measurementId || !window.gtag) return;
    const page_path = path ?? window.location.pathname + window.location.search + window.location.hash;
    window.gtag('config', measurementId, { page_path });
}

export function trackEvent(action: string, params?: Record<string, any>) {
    if (!window.gtag) return;
    window.gtag('event', action, params);
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