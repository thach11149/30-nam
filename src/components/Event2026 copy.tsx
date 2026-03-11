import "./Event2026.css";
import Link from "next/link";

export default function Event2026() {
    return (
        <section className="section event-section" id="su-kien">
            <div className="container">
                <div className="event-banner">
                    <div className="event-bg-image"></div>
                    <div className="event-content">
                        <h2 className="event-subtitle">Lễ Công Bố Hàng Việt Nam Chất Lượng Cao 2026</h2>
                        <h1 className="event-title text-gold">30 NĂM TỰ HÀO VÀ TIẾP NỐI</h1>
                        <div className="event-meta">
                            <span className="meta-item">📍 Hội trường Thống Nhất (Dinh Độc Lập) - TP.HCM</span>
                            <span className="meta-item">🗓️ 31/03/2026 | 08:00 - 18:00</span>
                        </div>
                        <p className="event-desc">
                            Một ngày hội lớn của cộng đồng doanh nghiệp, điểm lại hành trình 3 thập kỷ và mở ra chu kỳ phát triển mới: Chuyển đổi từ Hội sang Hiệp hội, định hình kinh tế xanh.
                        </p>

                        <div className="event-activities">
                            <div className="activity-item">
                                <div className="act-icon">📌</div>
                                <div className="act-text">Triển lãm Hành trình 30 năm tự hào hàng Việt</div>
                            </div>
                            <div className="activity-item">
                                <div className="act-icon">🏆</div>
                                <div className="act-text">Lễ vinh danh, trao chứng nhận HVNCLC 2026</div>
                            </div>
                            <div className="activity-item">
                                <div className="act-icon">🌱</div>
                                <div className="act-text">Trưng bày bộ sưu tập Sản phẩm Xanh</div>
                            </div>
                        </div>

                        <div className="event-actions">
                            <Link href="/le-cong-bo-2026" className="btn btn-outline-gold">Xem chi tiết chương trình</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
