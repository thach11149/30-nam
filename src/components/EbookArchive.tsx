"use client";

import { useEffect, useState } from "react";
import {
    ChevronRight,
    Download,
    Fingerprint,
    History,
    Maximize2,
    Play,
    Sparkles,
    Star,
    Zap,
} from "lucide-react";
import "./EbookArchive.css";

const chapters = [
    {
        id: "01",
        title: "Khởi nguồn 1996",
        tag: "Cốt lõi",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200",
        coverNote: "ARCHIVE 1996",
        description:
            "Hành trình bắt đầu từ những doanh nghiệp tiên phong dám cam kết chất lượng với người tiêu dùng Việt. Chương này mở ra nền tảng của một chuẩn mực bền bỉ suốt ba thập kỷ.",
    },
    {
        id: "02",
        title: "Vượt sóng toàn cầu",
        tag: "Bản lĩnh",
        cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200",
        coverNote: "ARCHIVE 2008",
        description:
            "Từ thị trường nội địa, thương hiệu Việt từng bước đi ra khu vực và quốc tế bằng năng lực quản trị, chuẩn hóa sản phẩm và bản lĩnh cạnh tranh trên sân chơi lớn.",
    },
    {
        id: "03",
        title: "Kỷ nguyên Xanh",
        tag: "Tầm nhìn",
        cover: "https://images.unsplash.com/photo-1497436072909-f5e4be5584d2?auto=format&fit=crop&q=80&w=1200",
        coverNote: "ARCHIVE 2020",
        description:
            "Chuyển đổi xanh không còn là lựa chọn mà là tiêu chuẩn sống còn. Chương này ghi lại những mô hình đổi mới sáng tạo gắn với tăng trưởng bền vững và trách nhiệm môi trường.",
    },
    {
        id: "04",
        title: "Cây đại thụ",
        tag: "Di sản",
        cover: "https://images.unsplash.com/photo-1455885666463-9b2f0ee0d0d1?auto=format&fit=crop&q=80&w=1200",
        coverNote: "ARCHIVE 2026",
        description:
            "Kết tinh kinh nghiệm của thế hệ đi trước và khát vọng của thế hệ kế thừa. Đây là chương của di sản thương hiệu Việt được hun đúc bằng niềm tin và sự tử tế.",
    },
];

export default function EbookArchive() {
    const [activeChapter, setActiveChapter] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 10,
                y: (e.clientY / window.innerHeight - 0.5) * 10,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const currentChapter = chapters[activeChapter] || chapters[0];

    return (
        <section className="section ebookx-section" id="ebook">
            <div className="ebookx-bg">
                <div className="ebookx-glow" />
                <div className="ebookx-grid" />
                <div className="ebookx-noise" />
                <div className="ebookx-big-30">30</div>
            </div>

            <div className="container ebookx-container">
                <header className="ebookx-head">
                    <div className="ebookx-kicker">
                        <Sparkles />
                        <span>ẤN PHẨM ĐẶC BIỆT KỶ NIỆM 30 NĂM</span>
                    </div>
                    <h2 className="ebookx-title">
                        DI SẢN
                        <br />
                        THƯỢNG HẠNG
                    </h2>
                    <p className="ebookx-subtitle">
                        Hành trình 3 thập kỷ bản sắc Việt, được gói gọn trong 218 trang tư liệu tinh hoa. Khám phá
                        những câu chuyện chưa từng kể về sức mạnh thương hiệu Việt.
                    </p>
                </header>

                <div className="ebookx-middle">
                    <aside className="ebookx-quote-card">
                        <Star className="ebookx-star" />
                        <p className="ebookx-card-label">{currentChapter.tag}</p>
                        <p className="ebookx-quote-text" key={currentChapter.id}>
                            "{currentChapter.description}"
                        </p>
                        <div className="ebookx-author">
                            <div className="ebookx-author-avatar">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                                    alt="Tac gia"
                                />
                            </div>
                            <div>
                                <p className="ebookx-author-name">Ba Vu Kim Hanh</p>
                                <p className="ebookx-author-role">Chu tich HVNCLC</p>
                            </div>
                        </div>
                    </aside>

                    <div className="ebookx-book-wrap">
                        <div
                            className="ebookx-book-tilt"
                            style={{
                                transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
                            }}
                        >
                            <div className="ebookx-book-glow" />
                            <div className="ebookx-book-3d">
                                <div className="ebookx-book-spine" />
                                <div className="ebookx-book-pages" aria-hidden="true">
                                    <span className="ebookx-page-layer l1" />
                                    <span className="ebookx-page-layer l2" />
                                    <span className="ebookx-page-layer l3" />
                                    <span className="ebookx-page-layer l4" />
                                </div>

                                <div className="ebookx-book">
                                    <img
                                        src={currentChapter.cover}
                                        className="ebookx-book-image"
                                        alt={currentChapter.title}
                                    />
                                    <div className="ebookx-book-overlay" />

                                    <div className="ebookx-book-top-tags">
                                        <div className="ebookx-tag">Premium Edition</div>
                                        <Fingerprint className="ebookx-fingerprint" />
                                    </div>

                                    <div className="ebookx-book-bottom" key={currentChapter.id}>
                                        <p>{currentChapter.coverNote}</p>
                                        <h4>{currentChapter.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="ebookx-chapters">
                        <p className="ebookx-chapter-head">
                            <History /> Danh muc chuong
                        </p>
                        <div className="ebookx-chapter-list">
                            {chapters.map((chap, idx) => (
                                <div
                                    key={chap.id}
                                    onMouseEnter={() => setActiveChapter(idx)}
                                    onClick={() => setActiveChapter(idx)}
                                    className={`ebookx-chapter-item ${activeChapter === idx ? "active" : ""}`}
                                >
                                    <div className="ebookx-chapter-left">
                                        <span className="ebookx-chapter-id">{chap.id}</span>
                                        <span className="ebookx-chapter-title">{chap.title}</span>
                                    </div>
                                    <div className="ebookx-chapter-right">
                                        <span className="ebookx-chapter-tag">{chap.tag}</span>
                                        <ChevronRight className="ebookx-chevron" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>

                <div className="ebookx-cta-row">
                    <button className="ebookx-cta-primary" type="button">
                        <span className="ebookx-shine" />
                        <Download />
                        <span>Bat dau tai len ky uc</span>
                    </button>

                    <button className="ebookx-cta-secondary" type="button">
                        <div className="ebookx-play-badge">
                            <Play />
                        </div>
                        <span>Trai nghiem Flipbook 3D</span>
                        <Maximize2 />
                    </button>
                </div>

                {/* <div className="ebookx-bottom-meta">
                    <Zap />
                    <p>Size: 45.8MB | Res: Ultra 4K | Format: Digital PDF</p>
                </div> */}
            </div>
        </section>
    );
}
