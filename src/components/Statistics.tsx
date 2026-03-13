"use client";
import "./Statistics.css";
import { useEffect, useState, useRef } from "react";

interface StatisticItem {
    target: number;
    label: string;
    suffix?: string;
}

interface StatisticsContent {
    sectionTitle?: string;
    items?: StatisticItem[];
}

const defaultContent: Required<StatisticsContent> = {
    sectionTitle: "Dấu Ấn 30 Năm",
    items: [
        { target: 30, label: "Năm bình chọn" },
        { target: 659, label: "Doanh nghiệp (2026)", suffix: "+" },
        { target: 63, label: "Tỉnh thành khảo sát" },
        { target: 200, label: "Hội chợ & Phiên chợ", suffix: "+" },
    ],
};

export default function Statistics({ content }: { content?: StatisticsContent }) {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const resolved = {
        ...defaultContent,
        ...content,
        items: content?.items?.length ? content.items : defaultContent.items,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section stats-section bg-dark text-center" ref={ref}>
            <div className="container">
                <h2 className="text-gold mb-xl">{resolved.sectionTitle}</h2>
                <div className="stats-grid">
                    {resolved.items.map((stat, idx) => (
                        <div className="stat-item" key={idx}>
                            <div className="stat-number text-red">
                                {inView ? <Counter target={stat.target} /> : "0"}
                                {stat.suffix ?? (stat.target > 100 ? "+" : "")}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ target }: { target: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}</span>;
}
