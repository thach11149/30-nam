"use client";
import React from "react";

export default function BlinkingStars() {
    const STAR_COUNT = 18;

    type Star = {
        id: number;
        top: number;
        left: number;
        size: number;
        duration: number;
        delay: number;
        generation: number;
    };

    const seededUnit = (seed: number): number => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    const createStar = (id: number, generation: number, withDelay: boolean): Star => {
        const base = id * 97 + generation * 389;
        return {
            id,
            top: seededUnit(base + 1) * 92 + 2,
            left: seededUnit(base + 2) * 96 + 2,
            size: seededUnit(base + 3) * 5.2 + 3.2,
            duration: seededUnit(base + 4) * 1.9 + 1.4,
            delay: withDelay ? seededUnit(base + 5) * 3 : 0,
            generation,
        };
    };

    const [stars, setStars] = React.useState<Star[]>([]);

    React.useEffect(() => {
        setStars(Array.from({ length: STAR_COUNT }, (_, i) => createStar(i, 0, true)));
    }, []);

    const handleBlinkIteration = React.useCallback((index: number, animationName: string) => {
        if (animationName !== "hero-blink") return;
        setStars((prev) => {
            const next = [...prev];
            const current = prev[index];
            next[index] = createStar(current.id, current.generation + 1, false);
            return next;
        });
    }, []);

    function StarSVG({ size }: { size: number }) {
        return (
            <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <polygon
                    points="6,1 7.6,4.5 11,5 8.2,7.3 9,11 6,9 3,11 3.8,7.3 1,5 4.4,4.5"
                    fill="#f4fbff"
                    stroke="#e9f3ff"
                    strokeWidth="0.5"
                />
            </svg>
        );
    }

    return (
        <div className="hero-blinking-stars" aria-hidden="true">
            {stars.map((star, index) => (
                <span
                    key={star.id}
                    className="hero-blink-star"
                    onAnimationIteration={(event) => handleBlinkIteration(index, event.animationName)}
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                >
                    <StarSVG size={star.size} />
                </span>
            ))}
        </div>
    );
}