import "./page.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lịch sử 30 Năm | Hàng Việt Nam Chất Lượng Cao",
    description: "Chi tiết hành trình 30 năm hình thành và phát triển của Hàng Việt Nam Chất Lượng Cao (1996 - 2026).",
};

import { getDictionary } from '@/dictionaries/getDictionary'

export default async function HistoryPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);
    const years = [
        {
            year: "1996-1997",
            title: "Khai sinh bằng lá phiếu",
            desc: "Khi thị trường mở cửa, hàng hóa nước ngoài tràn vào, doanh nghiệp Việt chưa được định vị rõ ràng. Từ sáng kiến của báo Sài Gòn Tiếp Thị, cuộc bình chọn đầu tiên ra đời. Người tiêu dùng sử dụng lá phiếu cắt từ báo để chọn ra các doanh nghiệp xứng đáng.",
            highlights: ["Ý tưởng đột phá từ báo Sài Gòn Tiếp Thị", "Trao quyền lựa chọn cho người tiêu dùng", "Xác lập uy tín doanh nghiệp Việt"],
            quote: "Quyền lực của thị trường nằm trong tay người tiêu dùng."
        },
        {
            year: "2000-2004",
            title: "Thương hiệu trở thành tài sản vô hình",
            desc: "Chương trình tổ chức điều tra toàn quốc về nhận thức và đầu tư cho thương hiệu, qua đó chính thức đưa khái niệm 'thương hiệu' đi sâu vào đời sống kinh doanh tại Việt Nam. Lễ hội 'Tôn vinh thương hiệu Việt' lần đầu được tổ chức vào năm 2004.",
            highlights: ["Khái niệm thương hiệu lan tỏa", "Lễ hội Tôn vinh thương hiệu Việt", "Doanh nghiệp ý thức đầu tư chất lượng"],
            quote: "Thương hiệu không chỉ là nhãn mác, mà là lời cam kết."
        },
        {
            year: "2010-2011",
            title: "Hình thành lực lượng thị trường",
            desc: "Ngày 14/4/2010, Hội Doanh nghiệp Hàng Việt Nam Chất Lượng Cao chính thức được thành lập. Chương trình chuyển mình từ một hoạt động báo chí thành một tổ chức xã hội - nghề nghiệp có tính pháp nhân mạnh mẽ, làm bệ phóng cho hàng Việt.",
            highlights: ["Hội DN HVNCLC thành lập", "Kết nối trực tiếp với nhà phân phối", "Mở rộng xúc tiến thương mại"],
            quote: "Chúng ta cần đi cùng nhau để tiến xa hơn."
        },
        {
            year: "2016-2017",
            title: "Chuẩn hội nhập",
            desc: "Để vươn ra thế giới, niềm tin là chưa đủ. Hội xây dựng bộ tiêu chí 'HVNCLC - Chuẩn hội nhập' dựa trên các quy định công nhận quốc tế (Global GAP, GFSI...), giúp doanh nghiệp vượt rào cản kỹ thuật vào EU, Mỹ, Nhật Bản.",
            highlights: ["Bộ tiêu chí Chuẩn hội nhập ra đời", "Hợp tác với các tổ chức tiêu chuẩn quốc tế", "Mở đường xuất khẩu nông sản"],
            quote: "Chất lượng là ngôn ngữ chung của thế giới."
        },
        {
            year: "2020-2023",
            title: "Giữ mạch niềm tin trong khủng hoảng",
            desc: "Đối mặt với đại dịch Covid-19 và thế giới VUCA, chương trình tập trung số hóa, kết nối online và xây dựng chuỗi cung ứng bền vững. Các doanh nghiệp chuyển mình với 3 từ khóa: Chuẩn hóa - Số hóa - Thương mại hóa.",
            highlights: ["Số hóa nền tảng bình chọn", "Hỗ trợ doanh nghiệp mùa dịch", "Duy trì chuỗi giá trị nông sản"],
            quote: "Khó khăn là phép thử cho bản lĩnh doanh nghiệp."
        },
        {
            year: "2025-2026",
            title: "Hiệp hội & Hệ sinh thái mới",
            desc: "Chuyển mô hình hoạt động từ Hội sang Hiệp hội nhằm liên kết rộng rãi hơn. Triển khai 'Chuẩn Xanh' làm mũi nhọn chiến lược, định hướng kinh tế tuần hoàn và phát triển bền vững cho thập kỷ tới.",
            highlights: ["Chuyển đổi thành Hiệp hội", "Áp dụng tiêu chí Chuẩn Xanh", "Phát triển bền vững Go Global"],
            quote: "Trách nhiệm với môi trường là trách nhiệm với thế hệ tương lai."
        }
    ];

    return (
        <div className="subpage-container pt-header">
            <div className="subpage-hero bg-dark text-center">
                <div className="container">
                    <h1 className="subpage-title text-gold">HÀNH TRÌNH 30 NĂM</h1>
                    <p className="subpage-subtitle">Biên niên sử của niềm tin và sự trỗi dậy của thương hiệu Việt</p>
                </div>
            </div>

            <div className="container section">
                <div className="history-detail-intro">
                    <p>
                        Ba thập kỷ của chương trình Hàng Việt Nam Chất Lượng Cao (1996 - 2026) là một biên niên sử sống động về sự trưởng thành của cộng đồng doanh nghiệp nội địa. Khởi nguồn từ một sáng kiến báo chí giữa thập niên 1990, chương trình đã tiến hóa mạnh mẽ thành hệ sinh thái hỗ trợ doanh nghiệp toàn diện. Đọc diễn trình lịch sử qua các cột mốc quan trọng nhất:
                    </p>
                </div>

                <div className="detailed-timeline">
                    {years.map((y, idx) => (
                        <div className="d-timeline-item" key={idx}>
                            <div className="d-timeline-year-col">
                                <span className="d-year-text text-red">{y.year}</span>
                            </div>
                            <div className="d-timeline-content-col">
                                <h2 className="d-title">{y.title}</h2>
                                <p className="d-desc">{y.desc}</p>
                                <ul className="d-highlights">
                                    {y.highlights.map((hl, i) => (
                                        <li key={i}>{hl}</li>
                                    ))}
                                </ul>
                                <div className="d-quote text-gold">
                                    "{y.quote}"
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-xl mb-xl">
                    <Link href={`/${resolvedParams.lang}`} className="btn btn-outline-gold">← Trở Về Trang Chủ</Link>
                </div>
            </div>
        </div>
    );
}
