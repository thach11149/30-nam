import Link from "next/link";
import { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import "./page.css";

export const metadata: Metadata = {
    title: "Câu Chuyện Hình Ảnh | Hàng Việt Nam Chất Lượng Cao",
    description: "Trọn bộ kho lưu trữ hình ảnh lịch sử 30 năm phong trào Hàng Việt Nam Chất Lượng Cao.",
};

import { getDictionary } from '@/dictionaries/getDictionary'
import { getPhotoStories } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import type { PhotoStoryItem } from '@/components/PhotoGallery'

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);

    const sanityStories = await getPhotoStories().catch(() => []);

    const stories: PhotoStoryItem[] = sanityStories.map((p: any) => ({
        id: p._id,
        category: p.category || 'other',
        title: lang === 'en' && p.titleEn ? p.titleEn : p.title,
        year: p.year || '',
        location: lang === 'en' && p.locationEn ? p.locationEn : p.location || '',
        character: lang === 'en' && p.characterEn ? p.characterEn : p.character || '',
        image: p.image ? urlForImage(p.image).url() : '',
        caption: lang === 'en' && p.captionEn ? p.captionEn : p.caption || '',
    }));

    return (
        <div className="subpage-container pt-header">
            <div className="subpage-hero bg-dark text-center">
                <div className="container">
                    <h1 className="subpage-title text-gold">KHO LƯU TRỮ HÌNH ẢNH</h1>
                    <p className="subpage-subtitle">Hành trình 30 năm qua từng thước phim kỷ niệm</p>
                </div>
            </div>

            <div className="bg-light" style={{ paddingBottom: '3rem' }}>
                <PhotoGallery stories={stories} />
            </div>

            <div className="container section text-center">
                <div className="upload-box bg-card" style={{ padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    <h3 className="text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Góp thêm mảnh ghép 30 năm</h3>
                    <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
                        Nếu doanh nghiệp bạn có lưu giữ những hình ảnh thời kỳ đầu của chương trình, hãy đóng góp vào thư viện chung này nhé!
                    </p>
                    <button className="btn btn-primary w-100" style={{ cursor: 'not-allowed', opacity: 0.7 }}>+ Tải Ảnh Lên (Tính năng đang phát triển)</button>
                </div>
                <Link href={`/${resolvedParams.lang}#hinh-anh`} className="btn btn-outline-gold mt-md">← Trở Về Trang Chủ</Link>
            </div>
        </div>
    );
}
