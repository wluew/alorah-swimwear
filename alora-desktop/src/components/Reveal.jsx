import React, { useEffect, useRef } from 'react';

const Reveal = ({ children, threshold = 0.1, duration = '1s', delay = '0s' }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={elementRef}
            className="reveal"
            style={{
                '--duration': duration,
                '--delay': delay
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;
