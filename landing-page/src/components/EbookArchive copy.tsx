import "./EbookArchive.css";

export default function EbookArchive() {
    return (
        <section className="section ebook-section" id="ebook">
            <div className="container">
                <div className="ebook-card">
                    <div className="ebook-image">
                        <div className="ebook-mockup">
                            <div className="ebook-cover">
                                <h3 className="ebook-title">KỶ YẾU 30 NĂM</h3>
                                <div className="ebook-gold-line"></div>
                                <p className="ebook-subtitle">HÀNG VIỆT NAM CHẤT LƯỢNG CAO</p>
                                <div className="ebook-year">1996 - 2026</div>
                            </div>
                        </div>
                    </div>
                    <div className="ebook-info">
                        <h2 className="text-primary-dark">Kho Tư Liệu 30 Năm</h2>
                        <p className="ebook-desc">
                            Tập hợp những câu chuyện, bài học kinh nghiệm và hình ảnh tư liệu vô giá của cộng đồng doanh nghiệp Việt Nam trong 3 thập kỷ qua. Kỷ yếu được thiết kế dưới dạng sách điện tử (Ebook) để dễ dàng đọc và lưu trữ.
                        </p>
                        <ul className="ebook-features">
                            <li>📄 Hơn 200 trang phân tích chuyên sâu</li>
                            <li>📸 Gần 500 bức ảnh tư liệu lịch sử quý giá</li>
                            <li>✒️ Lời mở đầu từ Chủ tịch Hiệp hội - Bà Vũ Kim Hạnh</li>
                        </ul>
                        <div className="ebook-actions">
                            <button className="btn btn-primary">📖 Đọc Online (Flipbook)</button>
                            <button className="btn btn-outline-gold">⬇️ Tải file PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
