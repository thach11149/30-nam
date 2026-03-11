import Link from "next/link";
import { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
    title: "Tài Liệu & Kỷ Yếu 30 Năm | Hàng Việt Nam Chất Lượng Cao",
    description: "Kho lưu trữ Ebook, kỷ yếu, số liệu và tài liệu tổng kết 30 năm Hàng Việt Nam Chất Lượng Cao.",
};

import { getDictionary } from '@/dictionaries/getDictionary'

export default async function EbookPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);
    return (
        <div className="subpage-container pt-header">
            <div className="subpage-hero bg-dark text-center" style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 className="subpage-title text-gold">KHO TƯ LIỆU 30 NĂM</h1>
                    <p className="subpage-subtitle">Nơi lưu giữ những giá trị tri thức và kinh nghiệm quý báu của cộng đồng doanh nghiệp Việt</p>
                </div>
            </div>

            <div className="container section">
                <div className="ebook-detail-layout">
                    <div className="ebook-sidebar">
                        <div className="ebook-mockup-large">
                            <div className="ebook-cover-large">
                                <h3 className="ebook-title-large">KỶ YẾU 30 NĂM</h3>
                                <div className="ebook-gold-line-large"></div>
                                <p className="ebook-subtitle-large">HÀNG VIỆT NAM CHẤT LƯỢNG CAO</p>
                                <div className="ebook-year-large">1996 - 2026</div>
                            </div>
                        </div>
                    </div>

                    <div className="ebook-main">
                        <h2 className="text-primary-dark section-heading">Kỷ yếu: 30 Năm Khẳng Định Vị Thế</h2>
                        <div className="ebook-meta-tags mb-md">
                            <span className="doc-tag bg-light text-secondary">PDF</span>
                            <span className="doc-tag bg-light text-secondary">250 Trang</span>
                            <span className="doc-tag bg-light text-secondary">Xuất bản: 03/2026</span>
                        </div>

                        <p className="ebook-desc">
                            Hành trình ba thập kỷ của chương trình Hàng Việt Nam Chất Lượng Cao là một biên niên sử sống động về sự trưởng thành của cộng đồng doanh nghiệp nội địa. Kỷ yếu tổng hợp 30 bài học lớn của 30 doanh nghiệp dẫn đầu như Vinamilk, Biti's, REE, Vinamit, Vifon... trong các biến cố lịch sử từ hội nhập AFTA, khủng hoảng 2008 cho đến đại dịch Covid-19.
                        </p>

                        <h4 className="mt-md mb-sm text-primary">Nội dung chính:</h4>
                        <ul className="ebook-toc">
                            <li>Lởi mở đầu: Ba mươi năm - Ba mươi mùa tin cậy (Bà Vũ Kim Hạnh)</li>
                            <li>Chương 1: Khởi sinh từ cuộc khảo sát bằng lá phiếu (1996 - 2005)</li>
                            <li>Chương 2: Hội nhập và Định hình chuẩn mực (2006 - 2018)</li>
                            <li>Chương 3: Sinh tồn trong kỷ nguyên số và đại dịch (2019 - 2023)</li>
                            <li>Chương 4: Kỷ nguyên mới - Chuyển đổi Xanh và Trách nhiệm xã hội (2024 - Hiện tại)</li>
                        </ul>

                        <div className="ebook-actions-large mt-lg">
                            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>📖 Đọc Online Ngay (Flipbook)</button>
                            <button className="btn btn-outline-gold" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>⬇️ Tải file PDF (25MB)</button>
                        </div>

                        <p className="mt-md text-secondary" style={{ fontSize: '0.9rem' }}>
                            *Tài liệu thuộc bản quyền Hiệp hội Doanh nghiệp HVNCLC. Vui lòng trích dẫn nguồn khi sử dụng.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-xl mb-xl">
                    <Link href={`/${resolvedParams.lang}#ebook`} className="btn btn-outline-gold">← Trở Về Trang Chủ</Link>
                </div>
            </div>
        </div>
    );
}
