import React, { useState, useRef, useEffect } from 'react';
import CountUp from "react-countup";

export default function CounterUp({ count, time, suffix }) {
    const [counterOn, setCounterOn] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setCounterOn(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.5 }
            );

            if (counterRef.current) {
                observer.observe(counterRef.current);
            }

            return () => {
                if (counterRef.current) {
                    observer.unobserve(counterRef.current);
                }
            };
        } else {
            setCounterOn(true);
        }
    }, []);

    return (
        <div ref={counterRef}>
            {counterOn && (
                <CountUp end={count} duration={time} suffix={suffix} />
            )}
        </div>
    );
}
