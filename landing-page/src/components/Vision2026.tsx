"use client";

import React, { useState } from "react";
import "./Vision2026.css";
import {
    Globe,
    Users,
    Zap,
    Calendar,
    ArrowUpRight,
    MessageSquare,
    Award,
    ChevronRight,
    TrendingUp,
    GanttChart,
    ShieldCheck,
    Star,
    Target,
} from "lucide-react";

const goldGradient = "linear-gradient(90deg, #B8860B 0%, #F9E498 50%, #9B7E3D 100%)";

const strategyPillars = [
    {
        icon: Users,
        title: "Chuyển sang Hiệp hội",
        desc: "Nâng tầm cấu trúc tổ chức chuyên nghiệp, gia tăng tối đa quyền lợi thành viên.",
        tag: "Cơ cấu",
    },
    {
        icon: MessageSquare,
        title: "Diễn đàn chính sách",
        desc: "Cầu nối trực tiếp giữa doanh nghiệp và các nhà hoạch định chính sách cấp cao.",
        tag: "Kết nối",
    },
    {
        icon: GanttChart,
        title: "Kết nối viện trường",
        desc: "Ứng dụng nghiên cứu khoa học vào thực tiễn sản xuất của doanh nghiệp Việt.",
        tag: "Đổi mới",
    },
    {
        icon: Globe,
        title: "Chuyển đổi xanh - Go Global",
        desc: "Chuẩn hóa quy trình bền vững để tự tin vươn tầm thị trường quốc tế.",
        tag: "Vươn xa",
    },
];

const quarters = [
    { q: "Q1", event: "Hội nghị Hiệp hội & Chiến lược 2026", theme: "Nền tảng" },
    { q: "Q2", event: "Diễn đàn Kinh tế xanh & Xuất khẩu", theme: "Tăng trưởng" },
    { q: "Q3", event: "Triển lãm Công nghệ & Viện trường", theme: "Đột phá" },
    { q: "Q4", event: "Grand Gala 30 năm HVNCLC", theme: "Thịnh vượng" },
];

export default function Vision2026() {
    const [hoveredQuarter, setHoveredQuarter] = useState<number | null>(null);

    return (
        <section className="vision2026" id="tam-nhin">
            <div className="vision2026-bg" aria-hidden="true">
                <div className="vision2026-texture" />
                <div className="vision2026-orb vision2026-orb--gold" />
                <div className="vision2026-orb vision2026-orb--wine" />
                <div className="vision2026-watermark-wrap">
                    <span className="vision2026-watermark">2026</span>
                </div>
            </div>

            <div className="vision2026-container">
                <header className="vision2026-header">
                    <div>
                        {/* <div className="vision2026-badge">
                            <Target className="vision2026-badge-icon" />
                            <span className="vision2026-badge-text">
                                Tầm nhìn Hiệp hội 2026
                            </span>
                        </div> */}

                        <h2
                            className="vision2026-title"
                        >
                            <span className="vision2026-title-2026">2026</span>
                            <br />
                            <span className="vision2026-title-line">KHỞI ĐẦU</span>
                            <br />
                            {/* <span className="vision2026-title-accent-wrap vision2026-title-outline-wrap"> */}
                            <span className="vision2026-title-outline vision2026-title-type-2">VẬN HỘI MỚI</span>
                                {/* <span className="vision2026-title-accent" /> */}
                            {/* </span> */}
                        </h2>
                    </div>

                    <div className="vision2026-header-note">
                        <div className="vision2026-note-top">
                            <TrendingUp className="vision2026-note-icon" />
                            <span className="vision2026-note-label">Innovation Era</span>
                        </div>
                        <p className="vision2026-note-title">
                            Tăng tốc - Chuẩn hóa - Toàn cầu
                        </p>
                        <p className="vision2026-note-desc">
                            Chuyển mình để dẫn đầu kỷ nguyên xanh và khẳng định vị thế bền vững.
                        </p>
                    </div>
                </header>

                <section className="vision2026-pillars">
                    {strategyPillars.map((pillar, idx) => (
                        <article
                            key={pillar.title}
                            className="vision2026-pillar"
                        >
                            <div className="vision2026-pillar-index">{idx + 1}</div>
                            <div className="vision2026-pillar-icon-wrap">
                                <pillar.icon className="vision2026-pillar-icon" />
                            </div>
                            <div className="vision2026-pillar-tag-wrap">
                                <span className="vision2026-pillar-tag">{pillar.tag}</span>
                            </div>
                            <h3 className="vision2026-pillar-title">{pillar.title}</h3>
                            <p className="vision2026-pillar-desc">{pillar.desc}</p>
                        </article>
                    ))}
                </section>

                <section className="vision2026-roadmap">
                    <div className="vision2026-roadmap-head">
                        <div className="vision2026-roadmap-title-wrap">
                            <div className="vision2026-roadmap-icon-wrap">
                                <Calendar className="vision2026-roadmap-icon" />
                            </div>
                            <div>
                                <h4 className="vision2026-roadmap-title">Roadmap 2026</h4>
                                <p className="vision2026-roadmap-subtitle">
                                    Chiến lược hành động theo quý
                                </p>
                            </div>
                        </div>

                        <div className="vision2026-standard-pill">
                            <ShieldCheck className="vision2026-standard-icon" />
                            <span className="vision2026-standard-text">Global Standard</span>
                        </div>
                    </div>

                    <div className="vision2026-quarters">
                        {quarters.map((q, idx) => {
                            const active = hoveredQuarter === idx;
                            return (
                                <article
                                    key={q.q}
                                    onMouseEnter={() => setHoveredQuarter(idx)}
                                    onMouseLeave={() => setHoveredQuarter(null)}
                                    className={`vision2026-quarter ${active ? "is-active" : ""}`}
                                >
                                    <div className="vision2026-quarter-q">
                                        {q.q}
                                    </div>
                                    <h5 className="vision2026-quarter-event">
                                        {q.event}
                                    </h5>
                                    <div className="vision2026-quarter-theme">
                                        <Star className="vision2026-quarter-star" />
                                        <span className="vision2026-quarter-theme-text">
                                            {q.theme}
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="vision2026-cta-shell">
                    <div className="vision2026-cta-card">
                        <div className="vision2026-cta-orb" />
                        <div className="vision2026-cta-grid">
                            <div>
                                <div className="vision2026-cta-tag">
                                    <Award className="vision2026-cta-tag-icon" />
                                    <span className="vision2026-cta-tag-text">
                                        Join the Future 2026
                                    </span>
                                </div>
                                <h4 className="vision2026-cta-title">
                                    KHƠI DẬY <br />
                                    <span className="vision2026-cta-title-red">TIỀM LỰC VIỆT</span>
                                </h4>
                                <p className="vision2026-cta-desc">
                                    Trở thành đối tác chiến lược để cùng kiến tạo chu kỳ phát triển bền vững.
                                </p>
                            </div>

                            <div className="vision2026-cta-actions">
                                <button
                                    className="vision2026-cta-primary"
                                    style={{ background: goldGradient }}
                                    type="button"
                                >
                                    <div className="vision2026-sweep" />
                                    <div className="vision2026-shimmer" />
                                    <Zap className="vision2026-cta-primary-icon" />
                                    <span className="vision2026-cta-primary-text">Đồng hành tài trợ</span>
                                    <ArrowUpRight className="vision2026-cta-primary-arrow" />
                                </button>

                                <button
                                    className="vision2026-cta-secondary"
                                    type="button"
                                >
                                    <span>Liên hệ Ban Tổ chức</span>
                                    <ChevronRight className="vision2026-cta-secondary-arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
