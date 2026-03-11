"use client";

import React, { useRef } from "react";
import "./CoreValues.css";

export default function CoreValues({ dict }: { dict: any }) {
    const values = [
        {
            title: dict.core_values.v1_title,
            desc: dict.core_values.v1_desc,
            number: "30",
            unit: dict.core_values.v1_unit,
            icon: "👥",
        },
        {
            title: dict.core_values.v2_title,
            desc: dict.core_values.v2_desc,
            number: "200+",
            unit: dict.core_values.v2_unit,
            icon: "🤝",
        },
        {
            title: dict.core_values.v3_title,
            desc: dict.core_values.v3_desc,
            number: "100+",
            unit: dict.core_values.v3_unit,
            icon: "🌍",
        },
    ];

    const handleMouseMove = (
        e: React.MouseEvent,
        cardRef: React.RefObject<HTMLDivElement | null>
    ) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;

        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
        cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
        cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    return (
        <section className="section core-values-section bg-dark relative" id="gia-tri">
            {/* Decorative Lights */}
            <div className="decorative-light red" style={{ top: "-10%", left: "-10%", width: "300px", height: "300px" }}></div>
            <div className="decorative-light blue" style={{ bottom: "-10%", right: "-10%", width: "300px", height: "300px" }}></div>

            <div className="container">
                <div className="text-center section-header">
                    <h2 className="text-red animate-reveal">{dict.core_values.section_title}</h2>
                    <p className="subtitle animate-reveal" style={{ animationDelay: "0.2s" }}>{dict.core_values.section_subtitle}</p>
                </div>

                <div className="core-values-grid">
                    {values.map((val, idx) => {
                        const cardRef = useRef<HTMLDivElement>(null);
                        return (
                            <div
                                className="value-card animate-reveal"
                                key={idx}
                                ref={cardRef}
                                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                                onMouseLeave={() => {
                                    if (cardRef.current) {
                                        cardRef.current.style.setProperty("--rotate-x", `0deg`);
                                        cardRef.current.style.setProperty("--rotate-y", `0deg`);
                                    }
                                }}
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <div className="spotlight"></div>
                                <div className="value-icon">{val.icon}</div>
                                <h3 className="value-title">{val.title}</h3>
                                <p className="value-desc">{val.desc}</p>
                                <div className="value-stat">
                                    <span className="stat-num text-red">{val.number}</span>
                                    <span className="stat-unit">{val.unit}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
