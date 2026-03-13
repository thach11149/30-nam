"use client";
import "./HistoryTimeline.css";
import Link from "next/link";

export interface Milestone {
    year: string;
    title: string;
    desc: string;
    imageUrl?: string;
}

const defaultMilestones: Milestone[] = [
    { year: "1996", title: "Khởi sinh bằng lá phiếu", desc: "Từ cuộc khảo sát do báo Sài Gòn Tiếp Thị khởi xướng, người tiêu dùng Việt bắt đầu có quyền bình chọn trực tiếp doanh nghiệp xuất sắc." },
    { year: "2000", title: "Thương hiệu tài sản vô hình", desc: "Đưa khái niệm thương hiệu vào đời sống kinh doanh, biến nó thành tài sản vô hình quan trọng nhất của doanh nghiệp." },
    { year: "2010", title: "Hình thành lực lượng thị trường", desc: "Hội Doanh nghiệp Hàng Việt Nam Chất Lượng Cao chính thức ra đời, tạo bệ phóng quy mô lớn đồng hành cùng DN." },
    { year: "2016", title: "Chuẩn hội nhập", desc: "Xây dựng hệ tiêu chí kỹ thuật chuẩn toàn cầu, giúp doanh nghiệp vượt các rào cản quốc tế, xuất khẩu tới EU và Mỹ." },
    { year: "2020", title: "Vững vàng qua đại dịch", desc: "Đẩy mạnh số hoá, kết nối nông sản, giữ mạch niềm tin trong giai đoạn đứt gãy do khủng hoảng kinh tế toàn cầu." },
    { year: "2026", title: "Hiệp hội & Hệ sinh thái mới", desc: "Khởi đầu chu kỳ phát triển mới, chuyển đổi thành Hiệp hội, định hình chuẩn xanh và kinh tế tuần hoàn." },
];

interface Props {
    milestones?: Milestone[];
    lang?: string;
    content?: {
        sectionTitle?: string;
        sectionSubtitle?: string;
        detailCtaLabel?: string;
        detailCtaPath?: string;
    };
}

const defaultContent = {
    sectionTitle: "Hành Trình 30 Năm",
    sectionSubtitle: "Những cột mốc lịch sử",
    detailCtaLabel: "Xem câu chuyện chi tiết",
    detailCtaPath: "lich-su-30-nam",
};

export default function HistoryTimeline({ milestones, lang = 'vi', content }: Props) {
    const data = milestones && milestones.length > 0 ? milestones : defaultMilestones;
    const resolved = { ...defaultContent, ...content };
    const safePath = (resolved.detailCtaPath || defaultContent.detailCtaPath).replace(/^\/+|\/+$/g, '');

    return (
        <section className="section timeline-section" id="hanh-trinh">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="text-red">{resolved.sectionTitle}</h2>
                    <p className="subtitle">{resolved.sectionSubtitle}</p>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>
                    {data.map((m, idx) => (
                        <div className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`} key={m.year}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content-wrapper">
                                {idx % 2 === 0 ? (
                                    <>
                                        <div className="timeline-content">
                                            <div className="timeline-year text-gold">{m.year}</div>
                                            <h3 className="timeline-title">{m.title}</h3>
                                            <p className="timeline-desc">{m.desc}</p>
                                        </div>
                                        {m.imageUrl && <img src={m.imageUrl} alt={m.title} className="timeline-image" />}
                                    </>
                                ) : (
                                    <>
                                        {m.imageUrl && <img src={m.imageUrl} alt={m.title} className="timeline-image" />}
                                        <div className="timeline-content">
                                            <div className="timeline-year text-gold">{m.year}</div>
                                            <h3 className="timeline-title">{m.title}</h3>
                                            <p className="timeline-desc">{m.desc}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-xl">
                    <Link href={`/${lang}/${safePath}`} className="btn btn-primary">{resolved.detailCtaLabel}</Link>
                </div>
            </div>
        </section>
    );
}
