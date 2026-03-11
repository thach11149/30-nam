"use client";
import { useMemo, useState } from "react";
import {
    CheckCircle2,
    Play,
    Quote,
    Star,
    X,
} from "lucide-react";
import "./TestimonialGrid.css";

export interface TestimonialItem {
    id: string;
    name: string;
    role: string;
    quote: string;
    cat: string;
    avatarUrl?: string;
    videoUrl?: string;
}

export const demoTestimonials: TestimonialItem[] = [
    {
        id: "1",
        name: "Ông Nguyễn Văn A",
        role: "Chủ tịch HĐQT Tập đoàn Alpha",
        quote: "30 năm đồng hành cùng HVNCLC là hành trình tự hào của thương hiệu Việt vươn tầm quốc tế.",
        cat: "doanh-nghiep",
        avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: "2",
        name: "Bà Trần Thị B",
        role: "Chuyên gia Kinh tế cao cấp",
        quote: "Sự chuyển mình sang kinh tế xanh là bước đi chiến lược đúng đắn nhất trong giai đoạn này.",
        cat: "chuyen-gia",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: "3",
        name: "Lê Minh C",
        role: "Founder Start-up Công nghệ Xanh",
        quote: "Thế hệ trẻ chúng tôi tiếp nối ngọn đuốc từ các bậc tiền bối để tạo ra giá trị bền vững.",
        cat: "the-he-tre",
        avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: "4",
        name: "NSUT Xuan D",
        role: "Đại sứ Hàng Việt 2024",
        quote: "Dùng hàng Việt không chỉ là ủng hộ kinh tế mà còn là niềm tự hào về bản sắc dân tộc.",
        cat: "dai-su",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: "5",
        name: "Ông Đặng Văn E",
        role: "CEO Công ty Thực phẩm Sạch",
        quote: "Tiêu chuẩn HVNCLC là tấm hộ chiếu quan trọng để chúng tôi chinh phục các thị trường khó tính.",
        cat: "doanh-nghiep",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: "6",
        name: "GS.TS Nguyễn Văn F",
        role: "Viện trưởng Viện Nghiên cứu Chiến lược",
        quote: "Chúng ta đang xây dựng một cộng đồng doanh nghiệp có trách nhiệm hơn với môi trường.",
        cat: "chuyen-gia",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
];

interface Props {
    testimonials?: TestimonialItem[];
}

export default function TestimonialGrid({ testimonials }: Props) {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const data = testimonials && testimonials.length > 0 ? testimonials : demoTestimonials;

    const tabs = [
        { id: "all", label: "Tất cả" },
        { id: "doanh-nghiep", label: "Doanh nghiệp 30 năm" },
        { id: "chuyen-gia", label: "Chuyên gia" },
        { id: "the-he-tre", label: "Thế hệ trẻ" },
        { id: "dai-su", label: "Đại sứ hàng Việt" },
    ];

    const filtered = useMemo(
        () => (activeTab === "all" ? data : data.filter((t) => t.cat === activeTab)),
        [activeTab, data]
    );

    return (
        <section className="section testimonial-section" id="ho-da-noi">
            <div className="container">
                <div className="testimonial-header text-center section-header">
                    <div className="testimonial-kicker-wrap">
                        <div className="testimonial-kicker-line" />
                        <span className="testimonial-kicker">Chia sẻ từ cộng đồng</span>
                        <div className="testimonial-kicker-line" />
                    </div>
                    <h2 className="testimonial-title">
                        HỌ ĐÃ NÓI GÌ VỀ <span>30 NĂM</span>
                    </h2>
                    <p className="subtitle testimonial-subtitle">
                        Lắng nghe những câu chuyện truyền cảm hứng từ các nhà lãnh đạo, chuyên gia và thế hệ kế thừa hành trình hàng Việt.
                    </p>
                </div>

                <div className="testimonial-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                            type="button"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="testimonial-grid">
                    {filtered.map((t) => (
                        <article className="testimonial-card animate-fade-in" key={t.id}>
                            <div className="t-video-thumb">
                                <img
                                    src={t.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"}
                                    alt={t.name}
                                    className="t-thumb-image"
                                />
                                <div className="t-thumb-overlay" />

                                <button
                                    type="button"
                                    className="t-play-btn"
                                    onClick={() => setSelectedVideo(t.videoUrl || null)}
                                    aria-label={`Phát video của ${t.name}`}
                                >
                                    <Play className="t-play-icon" />
                                </button>

                                <div className="t-duration">0:45</div>
                            </div>

                            <div className="t-content">
                                <div className="t-quote-icon-wrap">
                                    <Quote className="t-quote-icon" />
                                </div>

                                <p className="t-quote">"{t.quote}"</p>

                                <div className="t-person">
                                    <div className="t-avatar-wrap">
                                        <img
                                            src={t.avatarUrl || "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"}
                                            className="t-avatar"
                                            alt={t.name}
                                        />
                                    </div>

                                    <div className="t-person-meta">
                                        <h4 className="t-name">
                                            {t.name}
                                            <CheckCircle2 className="t-verified" />
                                        </h4>
                                        <p className="t-role">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="testimonial-more-wrap">
                    <a href="/tat-ca-video" className="testimonial-more-link">
                        <span>XEM THÊM TẤT CẢ CÂU CHUYỆN</span>
                        <Star className="testimonial-more-star" />
                        <div className="testimonial-more-line" />
                    </a>
                </div>
            </div>

            {selectedVideo && (
                <div className="testimonial-modal" role="dialog" aria-modal="true">
                    <div
                        className="testimonial-modal-overlay"
                        onClick={() => setSelectedVideo(null)}
                    />

                    <div className="testimonial-modal-panel">
                        <button
                            type="button"
                            className="testimonial-modal-close"
                            onClick={() => setSelectedVideo(null)}
                            aria-label="Đóng video"
                        >
                            <X />
                        </button>

                        <iframe
                            src={selectedVideo}
                            className="testimonial-modal-iframe"
                            title="Video testimonial"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
