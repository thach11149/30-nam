import HeroSection from "@/components/HeroSection";
import { getAssetImages, getBackgroundSectionHeroImage } from '@/sanity/lib/assetImage';
import CoreValues from "@/components/CoreValues";
import HistoryTimeline from "@/components/HistoryTimeline";
import Event2026 from "@/components/Event2026";
import TestimonialGrid from "@/components/TestimonialGrid";
import PhotoGallery from "@/components/PhotoGallery";
import EbookArchive from "@/components/EbookArchive";
import Vision2026 from "@/components/Vision2026";
import Statistics from "@/components/Statistics";

import { getDictionary } from '@/dictionaries/getDictionary'
import { getHomeContent, getPhotoStories, getTimelineEvents, getTestimonials } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import type { PhotoStoryItem } from '@/components/PhotoGallery'
import type { Milestone } from '@/components/HistoryTimeline'
import type { TestimonialItem } from '@/components/TestimonialGrid'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const dict = await getDictionary(lang);

  // Fetch Sanity data (server-side with tag-based caching)
  const [sanityStories, sanityTimeline, sanityTestimonials, assetImages, heroBgSanity, homeContent] = await Promise.all([
    getPhotoStories().catch(() => []),
    getTimelineEvents().catch(() => []),
    getTestimonials().catch(() => []),
    getAssetImages().catch(() => []),
    getBackgroundSectionHeroImage().catch(() => null),
    getHomeContent().catch(() => null),
  ]);

  // Map Sanity data to component interfaces (i18n-aware)
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

  const milestones: Milestone[] = sanityTimeline.map((t: any) => ({
    year: t.year,
    title: lang === 'en' && t.titleEn ? t.titleEn : t.title,
    desc: lang === 'en' && t.descriptionEn ? t.descriptionEn : t.description,
    imageUrl: t.imageUrl,
  }));

  const testimonials: TestimonialItem[] = sanityTestimonials.map((t: any) => {
    const safeCategory = ['doanh-nghiep', 'chuyen-gia', 'the-he-tre', 'dai-su'].includes(t.category)
      ? t.category
      : 'doanh-nghiep';

    return {
      id: t._id,
      name: t.author,
      role: lang === 'en' && t.roleEn ? t.roleEn : t.role || '',
      quote: lang === 'en' && t.quoteEn ? t.quoteEn : t.quote,
      cat: safeCategory,
      avatarUrl: t.avatarUrl,
      videoUrl: t.videoUrl,
    }
  });

  // Lấy hình có title là 'Banner 30 năm' từ Asset Image
  const bannerImage = assetImages.find((img: any) => img.title === 'Banner 30 năm');
  const heroImageUrl = bannerImage && bannerImage.image ? urlForImage(bannerImage.image).url() : '';

  return (
    <>
      <HeroSection dict={dict} heroImageUrl={heroImageUrl} heroBgSanity={heroBgSanity} />
      <CoreValues dict={dict} />
      <HistoryTimeline milestones={milestones} lang={lang} content={homeContent?.historyTimelineSection} />
      <Event2026 content={homeContent?.event2026} />
      <TestimonialGrid testimonials={testimonials} content={homeContent?.testimonialSection} />
      <PhotoGallery stories={stories} content={homeContent?.photoGallerySection} />
      <EbookArchive content={homeContent?.ebookArchive} />
      <Vision2026 content={homeContent?.vision2026} />
      <Statistics content={homeContent?.statistics} />
    </>
  );
}
