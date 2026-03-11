import "./page.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lễ Công Bố 2026 | Hàng Việt Nam Chất Lượng Cao",
    description: "Chi tiết sự kiện Lễ công bố Hàng Việt Nam Chất Lượng Cao năm 2026 tại Hội trường Thống Nhất. 30 năm Tự hào và Tiếp nối.",
};

import { getDictionary } from '@/dictionaries/getDictionary'

export default async function EventPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);
    return (
        <div className="subpage-container pt-header">
            <div className="event-hero">
                <div className="event-hero-overlay"></div>
                <div className="container event-hero-content text-center animate-fade-in">
                    <div className="event-badge text-gold">SỰ KIỆN NỔI BẬT</div>
                    <h1 className="subpage-title text-inverse">LỄ CÔNG BỐ HÀNG VIỆT NAM CHẤT LƯỢNG CAO 2026</h1>
                    <h2 className="event-hero-subtitle text-gold">30 NĂM TỰ HÀO VÀ TIẾP NỐI</h2>

                    <div className="event-hero-meta">
                        <div className="hero-meta-box">
                            <span className="meta-icon">🕒</span>
                            <div>
                                <strong>Thời gian</strong>
                                <p>08:00 - 18:00</p>
                                <p>31/03/2026</p>
                            </div>
                        </div>
                        <div className="hero-meta-box">
                            <span className="meta-icon">📍</span>
                            <div>
                                <strong>Địa điểm</strong>
                                <p>Hội trường Thống Nhất (Dinh Độc Lập)</p>
                                <p>135 Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="event-grid">
                    <div className="event-main-content">
                        <h3 className="section-heading text-primary-dark">Ý nghĩa sự kiện</h3>
                        <p className="event-paragraph">
                            Ba mươi năm trước, chương trình khởi đầu bằng một cuộc bình chọn giản dị biểu đạt tiếng nói của người tiêu dùng. Ba mươi năm sau, HVNCLC trở thành chuẩn mực thị trường với hệ sinh thái liên kết. Lễ công bố 2026 vì thế không chỉ là dịp vinh danh, mà còn là khởi điểm cho chặng đường tiếp theo.
                        </p>
                        <p className="event-paragraph">
                            Sự kiện đánh dấu bước chuyển mình mang tính lịch sử: <strong>Ban Chấp hành Hiệp hội Doanh nghiệp HVNCLC</strong> chính thức ra mắt, thay cho hình thức "Hội" trước đây. Đây là một mốc khởi động cho “Năm của HVNCLC” - Mở đầu vòng quay thập kỷ Go Global và Chuẩn Xanh.
                        </p>

                        <h3 className="section-heading text-primary-dark mt-lg">Nội dung chương trình</h3>
                        <ul className="agenda-list">
                            <li>
                                <div className="agenda-time">08:00 - 18:00</div>
                                <div className="agenda-desc">
                                    <strong>Triển lãm "Hành trình 30 năm tự hào hàng Việt"</strong>
                                    <p>Trưng bày tư liệu lịch sử, không gian giao thương và bộ sưu tập Sản phẩm Xanh - Đổi mới Sáng tạo.</p>
                                </div>
                            </li>
                            <li>
                                <div className="agenda-time">13:30 - 14:00</div>
                                <div className="agenda-desc">
                                    <strong>Đón khách VIP & Giao lưu báo chí</strong>
                                    <p>Sự hiện diện của các khối Lãnh đạo Trung ương, Thành phố và các chuyên gia Quốc tế hàng đầu.</p>
                                </div>
                            </li>
                            <li>
                                <div className="agenda-time">14:00 - 15:30</div>
                                <div className="agenda-desc">
                                    <strong>Sân khấu hóa "30 năm trong một ngày"</strong>
                                    <p>Trình diễn nghệ thuật kết hợp báo cáo tổng kết hành trình đồng hành cùng hệ sinh thái doanh nghiệp.</p>
                                </div>
                            </li>
                            <li>
                                <div className="agenda-time">15:30 - 18:00</div>
                                <div className="agenda-desc">
                                    <strong>Lễ vinh danh, trao chứng nhận HVNCLC 2026</strong>
                                    <p>Công bố và vinh danh hơn 600 doanh nghiệp đạt chuẩn năm 2026. Lễ ra mắt Ban Chấp hành Hiệp hội nhiệm kỳ mới.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="event-sidebar">
                        <div className="sidebar-widget bg-light">
                            <h4 className="widget-title">Đăng Ký Tham Dự</h4>
                            <p className="widget-desc">Sự kiện dành cho các doanh nghiệp đạt HVNCLC, khách mời VIP và đối tác báo chí truyền thông.</p>
                            <button className="btn btn-primary w-100 mb-sm">Gửi Thông Tin Đăng Ký</button>
                            <p className="text-center text-secondary" style={{ fontSize: '0.85rem' }}>Hạn chót: 25/03/2026</p>
                        </div>

                        <div className="sidebar-widget bg-dark text-inverse mt-md">
                            <h4 className="widget-title text-gold">Tài liệu Liên quan</h4>
                            <ul className="doc-list">
                                <li><a href="#">Sơ đồ triển lãm (PDF)</a></li>
                                <li><a href="#">Danh sách doanh nghiệp 2026</a></li>
                                <li><a href="#">Thư mời điện tử (Bản Mẫu)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-xl mb-xl">
                    <Link href={`/${resolvedParams.lang}#su-kien`} className="btn btn-outline-gold">← Trở Về Trang Chủ</Link>
                </div>
            </div>
        </div>
    );
}
