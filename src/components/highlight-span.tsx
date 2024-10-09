"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HighlightSpan = ({ }) => {
    const router = useRouter();

    useEffect(() => {
        let cleanup: (() => void) | undefined;

        function handleRouteChange() {
            if (typeof window === 'undefined') {
                console.warn('No window found');
                return;
            }
    
            const hash = window.location.hash.substring(1);
            if (!hash) {
                return;
            }
    
            const spans = Array.from(document.querySelectorAll<HTMLSpanElement>('main span'))
                .filter((span) =>
                    (span.childNodes.length === 1) && (span?.textContent.trim() === hash)
                );
    
            if (spans.length === 0) {
                return;
            }

            spans.forEach((span) => {
                span.style.backgroundColor = 'yellow';
            });
            spans[0]?.scrollIntoView();

            return () => {
                spans.forEach((span) => {
                    span.style.backgroundColor = '';
                });
            }
        }

        router.events.on('routeChangeComplete', () => {
            if(cleanup) {
                cleanup();
            }
            cleanup = handleRouteChange();
        });

        cleanup = handleRouteChange();

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return null;
};

export default HighlightSpan;
