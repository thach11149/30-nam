"use client";

import { useState } from "react";
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
} from "lucide-react";

const goldGradient = "linear-gradient(90deg, #B8860B 0%, #F9E498 50%, #9B7E3D 100%)";

interface VisionPillar {
    title: string;
    desc: string;
    tag: string;
}

interface VisionQuarter {
    q: string;
    event: string;
    theme: string;
}

interface VisionContent {
    titleYear?: string;
    titleLine1?: string;
    titleLine2?: string;
    noteLabel?: string;
    noteTitle?: string;
    noteDesc?: string;
    pillars?: VisionPillar[];
    roadmapTitle?: string;
    roadmapSubtitle?: string;
    standardLabel?: string;
    quarters?: VisionQuarter[];
    ctaTag?: string;
    ctaTitleLine1?: string;
    ctaTitleLine2?: string;
    ctaDesc?: string;
    ctaPrimaryLabel?: string;
    ctaSecondaryLabel?: string;
}

const strategyPillars = [
    {
        title: "Chuyển sang Hiệp hội",
        desc: "Nâng tầm cấu trúc tổ chức chuyên nghiệp, gia tăng tối đa quyền lợi thành viên.",
        tag: "Cơ cấu",
    },
    {
        title: "Diễn đàn chính sách",
        desc: "Cầu nối trực tiếp giữa doanh nghiệp và các nhà hoạch định chính sách cấp cao.",
        tag: "Kết nối",
    },
    {
        title: "Kết nối viện trường",
        desc: "Ứng dụng nghiên cứu khoa học vào thực tiễn sản xuất của doanh nghiệp Việt.",
        tag: "Đổi mới",
    },
    {
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

const defaultContent: Required<VisionContent> = {
    titleYear: "2026",
    titleLine1: "KHỞI ĐẦU",
    titleLine2: "VẬN HỘI MỚI",
    noteLabel: "Innovation Era",
    noteTitle: "Tăng tốc - Chuẩn hóa - Toàn cầu",
    noteDesc: "Chuyển mình để dẫn đầu kỷ nguyên xanh và khẳng định vị thế bền vững.",
    pillars: strategyPillars,
    roadmapTitle: "Roadmap 2026",
    roadmapSubtitle: "Chiến lược hành động theo quý",
    standardLabel: "Global Standard",
    quarters,
    ctaTag: "Join the Future 2026",
    ctaTitleLine1: "KHƠI DẬY",
    ctaTitleLine2: "TIỀM LỰC VIỆT",
    ctaDesc: "Trở thành đối tác chiến lược để cùng kiến tạo chu kỳ phát triển bền vững.",
    ctaPrimaryLabel: "Đồng hành tài trợ",
    ctaSecondaryLabel: "Liên hệ Ban Tổ chức",
};

const pillarIcons = [Users, MessageSquare, GanttChart, Globe];

export default function Vision2026({ content }: { content?: VisionContent }) {
    const [hoveredQuarter, setHoveredQuarter] = useState<number | null>(null);

    const resolved = {
        ...defaultContent,
        ...content,
        pillars: content?.pillars?.length ? content.pillars : defaultContent.pillars,
        quarters: content?.quarters?.length ? content.quarters : defaultContent.quarters,
    };

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
                            <span className="vision2026-title-2026">{resolved.titleYear}</span>
                            <br />
                            <span className="vision2026-title-line">{resolved.titleLine1}</span>
                            <br />
                            {/* <span className="vision2026-title-accent-wrap vision2026-title-outline-wrap"> */}
                            <span className="vision2026-title-outline vision2026-title-type-2">{resolved.titleLine2}</span>
                                {/* <span className="vision2026-title-accent" /> */}
                            {/* </span> */}
                        </h2>
                    </div>

                    <div className="vision2026-header-note">
                        <div className="vision2026-note-top">
                            <TrendingUp className="vision2026-note-icon" />
                            <span className="vision2026-note-label">{resolved.noteLabel}</span>
                        </div>
                        <p className="vision2026-note-title">
                            {resolved.noteTitle}
                        </p>
                        <p className="vision2026-note-desc">
                            {resolved.noteDesc}
                        </p>
                    </div>
                </header>

                <section className="vision2026-pillars">
                    {resolved.pillars.map((pillar, idx) => {
                        const PillarIcon = pillarIcons[idx % pillarIcons.length];
                        return (
                        <article
                            key={pillar.title}
                            className="vision2026-pillar"
                        >
                            <div className="vision2026-pillar-index">{idx + 1}</div>
                            <div className="vision2026-pillar-icon-wrap">
                                <PillarIcon className="vision2026-pillar-icon" />
                            </div>
                            <div className="vision2026-pillar-tag-wrap">
                                <span className="vision2026-pillar-tag">{pillar.tag}</span>
                            </div>
                            <h3 className="vision2026-pillar-title">{pillar.title}</h3>
                            <p className="vision2026-pillar-desc">{pillar.desc}</p>
                        </article>
                    )})}
                </section>

                <section className="vision2026-roadmap">
                    <div className="vision2026-roadmap-head">
                        <div className="vision2026-roadmap-title-wrap">
                            <div className="vision2026-roadmap-icon-wrap">
                                <Calendar className="vision2026-roadmap-icon" />
                            </div>
                            <div>
                                <h4 className="vision2026-roadmap-title">{resolved.roadmapTitle}</h4>
                                <p className="vision2026-roadmap-subtitle">
                                    {resolved.roadmapSubtitle}
                                </p>
                            </div>
                        </div>

                        <div className="vision2026-standard-pill">
                            <ShieldCheck className="vision2026-standard-icon" />
                            <span className="vision2026-standard-text">{resolved.standardLabel}</span>
                        </div>
                    </div>

                    <div className="vision2026-quarters">
                        {resolved.quarters.map((q, idx) => {
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
                                        {resolved.ctaTag}
                                    </span>
                                </div>
                                <h4 className="vision2026-cta-title">
                                    {resolved.ctaTitleLine1} <br />
                                    <span className="vision2026-cta-title-red">{resolved.ctaTitleLine2}</span>
                                </h4>
                                <p className="vision2026-cta-desc">
                                    {resolved.ctaDesc}
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
                                    <span className="vision2026-cta-primary-text">{resolved.ctaPrimaryLabel}</span>
                                    <ArrowUpRight className="vision2026-cta-primary-arrow" />
                                </button>

                                <button
                                    className="vision2026-cta-secondary"
                                    type="button"
                                >
                                    <span>{resolved.ctaSecondaryLabel}</span>
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
