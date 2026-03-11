import Link from "next/link";
import { Metadata } from "next";
import TestimonialGrid from "@/components/TestimonialGrid";
import "./page.css";

export const metadata: Metadata = {
    title: "Họ Đã Nói | Hàng Việt Nam Chất Lượng Cao",
    description: "Cảm nhận và chia sẻ từ các chuyên gia, đại diện doanh nghiệp và người tiêu dùng về hành trình 30 năm Hàng Việt Nam Chất Lượng Cao.",
};

import { getDictionary } from '@/dictionaries/getDictionary'

export default async function TestimonialPage({
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
                    <h1 className="subpage-title text-gold">HỌ ĐÃ NÓI VỀ CHÚNG TÔI</h1>
                    <p className="subpage-subtitle">Niềm tin được khẳng định qua những câu chuyện thật của 3 thập kỷ</p>
                </div>
            </div>

            <div className="bg-light" style={{ paddingBottom: '3rem' }}>
                <TestimonialGrid />
            </div>

            <div className="container section text-center">
                <h3 className="text-primary-dark" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Gửi câu chuyện của bạn</h3>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Bạn có kỷ niệm hoặc lời nhắn nhủ dành cho chương trình Hàng Việt Nam Chất Lượng Cao? Hãy để lại lời nhắn để cùng chúc mừng cột mốc 30 năm.
                </p>
                <button className="btn btn-primary" style={{ marginRight: '1rem' }}>Gửi Video/Câu Chuyện</button>
                <Link href={`/${resolvedParams.lang}#ho-da-noi`} className="btn btn-outline-gold">← Trở Về Trang Chủ</Link>
            </div>
        </div>
    );
}
