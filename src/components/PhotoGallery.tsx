"use client";
import { useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Camera,
    Facebook,
    Info,
    Link as LinkIcon,
    MapPin,
    Scan,
    Twitter,
    User2,
    X,
} from "lucide-react";
import "./PhotoGallery.css";

export interface GalleryPhoto {
    id: string;
    type: string;
    src: string;
    caption: string;
    year?: string;
}

interface PhotoStory {
    id: string;
    category: string;
    title: string;
    year: string;
    location: string;
    character: string;
    image: string;
    caption: string;
}

export interface PhotoStoryItem {
    id: string;
    category: string;
    title: string;
    year: string;
    location: string;
    character: string;
    image: string;
    caption: string;
}

const FILTERS = [
    { id: "all", label: "Tất cả" },
    { id: "ceremony", label: "Lễ công bố" },
    { id: "domestic", label: "Hội chợ trong nước" },
    { id: "international", label: "Hội chợ quốc tế" },
    { id: "rural", label: "Về nông thôn" },
];

const DEFAULT_STORIES: PhotoStory[] = [
    {
        id: "1",
        category: "ceremony",
        title: "Đêm vinh danh đầu tiên 1996",
        year: "1996",
        location: "TP. Hồ Chí Minh",
        character: "Đội ngũ sáng lập Hội",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Bức ảnh ghi lại khoảnh khắc xúc động khi những chứng nhận Hàng Việt Nam Chất Lượng Cao đầu tiên được trao tay doanh nghiệp. Đây không chỉ là một tấm bằng khen, mà là lời cam kết của cộng đồng doanh nghiệp Việt về chất lượng và sự tử tế với người tiêu dùng.",
    },
    {
        id: "2",
        category: "international",
        title: "Cờ Việt giữa lòng Paris",
        year: "2012",
        location: "Paris, Pháp",
        character: "Đoàn doanh nghiệp HVNCLC",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Chuyến xúc tiến thương mại tại châu Âu đánh dấu bước ngoặt quan trọng khi sản phẩm Việt bắt đầu tiếp cận các tiêu chuẩn khắt khe nhất thế giới. Hình ảnh các gian hàng Việt đã chứng minh rằng hàng Việt hoàn toàn có thể tự tin đứng cạnh những thương hiệu toàn cầu.",
    },
    {
        id: "3",
        category: "rural",
        title: "Chuyến xe ngược ngàn đến Bản em",
        year: "2018",
        location: "Vùng cao Hà Giang",
        character: "Đội ngũ điều phối viên",
        image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Chương trình đưa hàng Việt về nông thôn không chỉ là hoạt động bán lẻ, mà là hành trình mang văn hóa tiêu dùng văn minh đến vùng sâu vùng xa. Những nụ cười của bà con khi tiếp cận hàng hóa đúng chất lượng là động lực lớn nhất cho đội ngũ.",
    },
    {
        id: "4",
        category: "domestic",
        title: "Sức sống mới tại Hội chợ Expo",
        year: "2023",
        location: "SECC, TP.HCM",
        character: "Doanh nghiệp khởi nghiệp xanh",
        image: "https://images.unsplash.com/photo-1531058288890-267448539a39?auto=format&fit=crop&q=80&w=1200",
        caption:
            "Hội chợ là nơi giao thoa giữa kinh nghiệm của các doanh nghiệp kỳ cựu và sức bật của thế hệ kế thừa. Nhiều sản phẩm thân thiện môi trường, ứng dụng công nghệ cao xuất hiện ngày càng nhiều, phản ánh rõ xu hướng kinh tế tuần hoàn.",
    },
];

interface Props {
    photos?: GalleryPhoto[];
    stories?: PhotoStoryItem[];
    content?: {
        titlePrimary?: string;
        titleMuted?: string;
        brandLabel?: string;
        filters?: Array<{ id: string; label: string }>;
        infoTitle?: string;
        locationLabel?: string;
        characterLabel?: string;
        expandLabel?: string;
        reelTitle?: string;
        closeLensLabel?: string;
    };
}

const defaultContent = {
    titlePrimary: "ỐNG KÍNH",
    titleMuted: "DI SẢN",
    brandLabel: "Visual Documentation",
    filters: FILTERS,
    infoTitle: "Thông tin hình ảnh",
    locationLabel: "Vị trí",
    characterLabel: "Nhân vật",
    expandLabel: "Mở rộng tư liệu",
    reelTitle: "Cuộn phim di sản",
    closeLensLabel: "Đóng ống kính",
};

export default function PhotoGallery({ photos, stories: incomingStories, content }: Props) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanding, setIsExpanding] = useState(false);

    const resolved = {
        ...defaultContent,
        ...content,
        filters: content?.filters?.length ? content.filters : defaultContent.filters,
    };

    const stories = useMemo<PhotoStory[]>(() => {
        if (incomingStories && incomingStories.length > 0) {
            return incomingStories;
        }

        if (photos && photos.length > 0) {
            return photos.map((p, idx) => ({
                id: p.id,
                category:
                    p.type === "le-cong-bo"
                        ? "ceremony"
                        : p.type === "hoi-cho"
                            ? "domestic"
                            : p.type === "nong-thon"
                                ? "rural"
                                : "all",
                title: p.caption,
                year: p.year || "N/A",
                location: "Việt Nam",
                character: "Tư liệu HVNCLC",
                image: p.src,
                caption: p.caption,
            }));
        }

        return DEFAULT_STORIES;
    }, [incomingStories, photos]);

    const filteredStories = useMemo(
        () =>
            activeFilter === "all"
                ? stories
                : stories.filter((story) => story.category === activeFilter),
        [activeFilter, stories]
    );

    const safeIndex = Math.min(currentIndex, Math.max(0, filteredStories.length - 1));
    const currentStory = filteredStories[safeIndex] || stories[0];

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(filteredStories.length - 1, prev + 1));
    };

    return (
        <section className="section gallery-section" id="hinh-anh">
            <div
                className="gallery-bg-blur"
                style={{
                    backgroundImage: `url(${currentStory?.image || ""})`,
                }}
            />

            <div className="container gallery-container">
                <div className="gallery-head">
                    <div className="gallery-title-block">
                        {/* <div className="gallery-brand-row">
                            <div className="gallery-camera-badge">
                                <Camera />
                            </div>
                            <span className="gallery-brand-text">{resolved.brandLabel}</span>
                        </div> */}
                        <h2 className="gallery-main-title">
                            <span className="gallery-main-title-primary">{resolved.titlePrimary}</span>{" "}
                            <br />
                            <span className="gallery-main-title-muted">{resolved.titleMuted}</span>
                        </h2>
                    </div>

                    
                    <div className="gallery-filter-wrap">
                        <div className="gallery-brand-row">
                            <div className="gallery-camera-badge">
                                <Camera />
                            </div>
                            <span className="gallery-brand-text">{resolved.brandLabel}</span>
                        </div>
                        {resolved.filters.map((filter) => (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() => {
                                    setActiveFilter(filter.id);
                                    setCurrentIndex(0);
                                }}
                                className={`gallery-filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gallery-layout">
                    <div className="gallery-lens-wrap">
                        <div className="gallery-lens-frame">
                            <div className="gallery-ui-overlay">
                                <div className="gallery-ui-top">
                                    <div>
                                        <span>REC ● 4K</span>
                                        <span>{`IMG-30Y-${currentStory?.id || "00"}`}</span>
                                    </div>
                                    <Scan />
                                </div>

                                <div className="gallery-ui-center">
                                    <div className="gallery-focus-dot" />
                                </div>

                                <div className="gallery-ui-bottom">
                                    <span>ISO 100 | f/2.8 | 1/250s</span>
                                    <span>HERITAGE_ARCHIVE</span>
                                </div>
                            </div>

                            <img
                                key={currentStory?.id}
                                src={currentStory?.image}
                                className="gallery-main-image"
                                alt={currentStory?.title}
                            />
                            <div className="gallery-texture" />
                            <div className="gallery-vignette" />

                            <div className="gallery-image-caption">
                                <div className="gallery-year-row">
                                    <span>{currentStory?.year}</span>
                                    <div />
                                </div>
                                <h3>{currentStory?.title}</h3>
                            </div>
                        </div>

                        <div className="gallery-nav">
                            <button type="button" onClick={handlePrev} className="gallery-nav-btn">
                                <ArrowLeft />
                            </button>
                            <button type="button" onClick={handleNext} className="gallery-nav-btn active">
                                <ArrowRight />
                            </button>
                        </div>
                    </div>

                    <aside className="gallery-side">
                        <div className="gallery-metadata-head">
                            <Info />
                            <span>{resolved.infoTitle}</span>
                        </div>

                        <div className="gallery-meta-grid">
                            <div className="gallery-meta-card">
                                <p>{resolved.locationLabel}</p>
                                <div>
                                    <MapPin />
                                    <span>{currentStory?.location}</span>
                                </div>
                            </div>

                            <div className="gallery-meta-card">
                                <p>{resolved.characterLabel}</p>
                                <div>
                                    <User2 />
                                    <span>{currentStory?.character}</span>
                                </div>
                            </div>
                        </div>

                        <p className="gallery-story-caption">"{currentStory?.caption}"</p>

                        <div className="gallery-share-row">
                            <div className="gallery-share-icons">
                                <Facebook />
                                <Twitter />
                                <LinkIcon />
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsExpanding(true)}
                                className="gallery-expand-btn"
                            >
                                {resolved.expandLabel} <ArrowRight />
                            </button>
                        </div>

                        <div className="gallery-reel-wrap">
                            <p>{resolved.reelTitle}</p>
                            <div className="gallery-reel">
                                {filteredStories.map((story, idx) => (
                                    <button
                                        key={story.id}
                                        type="button"
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`gallery-reel-item ${safeIndex === idx ? "active" : ""}`}
                                    >
                                        <img src={story.image} alt={story.title} />
                                        <div>
                                            <span>{story.year}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {isExpanding && (
                <div className="gallery-modal">
                    <div className="gallery-modal-overlay" onClick={() => setIsExpanding(false)} />

                    <button
                        type="button"
                        onClick={() => setIsExpanding(false)}
                        className="gallery-modal-close"
                    >
                        {resolved.closeLensLabel} <X />
                    </button>

                    <div className="gallery-modal-content">
                        <div className="gallery-modal-image-wrap">
                            <img src={currentStory?.image} alt={currentStory?.title} />
                        </div>

                        <div className="gallery-modal-text">
                            <div className="gallery-modal-year-row">
                                <span>{currentStory?.year}</span>
                                <div />
                            </div>
                            <h3>{currentStory?.title}</h3>
                            <p>{currentStory?.caption}</p>

                            <div className="gallery-modal-meta-row">
                                <div>
                                    <MapPin />
                                    <span>{currentStory?.location}</span>
                                </div>
                                <div>
                                    <User2 />
                                    <span>{currentStory?.character}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
