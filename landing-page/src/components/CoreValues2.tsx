"use client";
import { useEffect, useRef, useState } from "react";
import "./CoreValues.css";

function useCountUp(target: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return count;
}

function StatNumber({ raw, started }: { raw: string; started: boolean }) {
    const hasPlus = raw.includes("+");
    const numeric = parseInt(raw.replace(/\D/g, ""), 10);
    const count = useCountUp(numeric, 1800, started);
    return (
        <span className="stat-num">
            {count}
            {hasPlus ? "+" : ""}
        </span>
    );
}

export default function CoreValues({ dict }: { dict: any }) {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const values = [
        {
            title: dict.core_values.v1_title,
            desc: dict.core_values.v1_desc,
            number: "30",
            unit: dict.core_values.v1_unit,
            icon: "👥",
            accent: "#e63946",
        },
        {
            title: dict.core_values.v2_title,
            desc: dict.core_values.v2_desc,
            number: "200+",
            unit: dict.core_values.v2_unit,
            icon: "🤝",
            accent: "#c1121f",
        },
        {
            title: dict.core_values.v3_title,
            desc: dict.core_values.v3_desc,
            number: "100+",
            unit: dict.core_values.v3_unit,
            icon: "🌍",
            accent: "#a4161a",
        },
    ];

    return (
        <section className="section core-values-section" id="gia-tri" ref={sectionRef}>
            {/* Ambient background orbs */}
            <div className="cv-orb cv-orb-1" />
            <div className="cv-orb cv-orb-2" />
            <div className="cv-orb cv-orb-3" />

            <div className="container">
                <div className={`text-center section-header ${visible ? "header-visible" : ""}`}>
                    <span className="section-label">— {dict.core_values.section_label ?? "Core Values"} —</span>
                    <h2 className="text-red">{dict.core_values.section_title}</h2>
                    <p className="subtitle">{dict.core_values.section_subtitle}</p>
                    <div className="header-line" />
                </div>

                <div className="core-values-grid">
                    {values.map((val, idx) => (
                        <div
                            className={`value-card ${visible ? "card-visible" : ""}`}
                            key={idx}
                            style={{
                                "--accent": val.accent,
                                "--delay": `${idx * 0.18}s`,
                                animationDelay: `${idx * 0.18}s`,
                            } as React.CSSProperties}
                        >
                            {/* Glowing top border */}
                            <div className="card-glow-bar" />

                            {/* Icon ring */}
                            <div className="value-icon-wrap">
                                <div className="value-icon-ring" />
                                <span className="value-icon">{val.icon}</span>
                            </div>

                            <h3 className="value-title">{val.title}</h3>
                            <p className="value-desc">{val.desc}</p>

                            <div className="value-stat">
                                <div className="stat-track">
                                    <StatNumber raw={val.number} started={visible} />
                                    <span className="stat-unit">{val.unit}</span>
                                </div>
                                <div className="stat-bar-wrap">
                                    <div
                                        className={`stat-bar ${visible ? "stat-bar-fill" : ""}`}
                                        style={{ transitionDelay: `${idx * 0.18 + 0.6}s` }}
                                    />
                                </div>
                            </div>

                            {/* Hover shimmer */}
                            <div className="card-shimmer" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
