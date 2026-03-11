"use client";
import "./Statistics.css";
import { useEffect, useState, useRef } from "react";

export default function Statistics() {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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

    const stats = [
        { target: 30, label: "Năm bình chọn" },
        { target: 659, label: "Doanh nghiệp (2026)" },
        { target: 63, label: "Tỉnh thành khảo sát" },
        { target: 200, label: "Hội chợ & Phiên chợ" },
    ];

    return (
        <section className="section stats-section bg-dark text-center" ref={ref}>
            <div className="container">
                <h2 className="text-gold mb-xl">Dấu Ấn 30 Năm</h2>
                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <div className="stat-item" key={idx}>
                            <div className="stat-number text-red">
                                {inView ? <Counter target={stat.target} /> : "0"}
                                {stat.target > 100 ? "+" : ""}
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
