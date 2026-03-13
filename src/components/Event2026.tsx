import "./Event2026.css";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Award,
  Leaf,
  History,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface EventActivity {
  text: string;
  iconClass?: string;
}

interface Event2026Content {
  kicker?: string;
  subtitle?: string;
  titleLine1?: string;
  titleLine2?: string;
  venue?: string;
  schedule?: string;
  description?: string;
  activities?: EventActivity[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
}

const defaultContent: Required<Event2026Content> = {
  kicker: "Sự kiện đặc biệt 2026",
  subtitle: "Lễ Công Bố Hàng Việt Nam Chất Lượng Cao 2026",
  titleLine1: "30 NĂM TỰ HÀO",
  titleLine2: "VÀ TIẾP NỐI",
  venue: "Hội trường Thống Nhất, TP.HCM",
  schedule: "31/03/2026 | 08:00 - 18:00",
  description:
    "Hành trình ba thập kỷ kiến tạo giá trị Việt. Một cột mốc lịch sử đánh dấu sự chuyển mình từ Hội sang Hiệp hội, kiến tạo hệ sinh thái kinh tế xanh bền vững.",
  activities: [
    {
      text: "Triển lãm Hành trình 30 năm",
      iconClass: "event2026-card-icon--blue",
    },
    {
      text: "Vinh danh HVNCLC 2026",
      iconClass: "event2026-card-icon--gold",
    },
    {
      text: "Trưng bày Sản phẩm Xanh",
      iconClass: "event2026-card-icon--green",
    },
  ],
  ctaLabel: "Xem chi tiết chương trình",
  ctaHref: "/le-cong-bo-2026",
  secondaryCtaLabel: "Tải sơ đồ mặt bằng",
};

const activityIcons = [History, Award, Leaf];

export default function Event2026({ content }: { content?: Event2026Content }) {
  const resolved = {
    ...defaultContent,
    ...content,
    activities: content?.activities?.length ? content.activities : defaultContent.activities,
  };

  const activities = resolved.activities.map((item, index) => ({
    ...item,
    icon: activityIcons[index % activityIcons.length],
    iconClass: item.iconClass || defaultContent.activities[index % defaultContent.activities.length]?.iconClass || "event2026-card-icon--blue",
  }));

  return (
    <section className="section event2026-section" id="su-kien">
      <div className="container">
        <div className="event2026-shell">
          <div className="event2026-glow event2026-glow-top" />
          <div className="event2026-glow event2026-glow-bottom" />

          <div className="event2026-visual">
            <div className="event2026-visual-overlay" />
            <div className="event2026-image" />

            <div className="event2026-badge">
              <div className="event2026-badge-icon-wrap">
                <Sparkles className="event2026-badge-icon" />
              </div>
              <div>
                <p className="event2026-badge-label">Kỷ niệm</p>
                <p className="event2026-badge-value">30 Năm</p>
              </div>
            </div>
          </div>

          <div className="event2026-content">
            <div className="event2026-header">
              <div className="event2026-kicker">
                <div className="event2026-kicker-dot" />
                {resolved.kicker}
              </div>

              <h2 className="event2026-subtitle">
                {resolved.subtitle}
              </h2>

              <h1 className="event2026-title">
                {resolved.titleLine1} <br className="event2026-title-break" /> {resolved.titleLine2}
              </h1>
            </div>

            <div className="event2026-meta">
              <div className="event2026-meta-item">
                <MapPin className="event2026-meta-icon" />
                <span className="event2026-meta-text">{resolved.venue}</span>
              </div>
              <div className="event2026-meta-item">
                <CalendarDays className="event2026-meta-icon" />
                <span className="event2026-meta-text">{resolved.schedule}</span>
              </div>
            </div>

            <p className="event2026-desc">
              {resolved.description}
            </p>

            <div className="event2026-activities">
              {activities.map((item, index) => (
                <div key={index} className="event2026-card">
                  <div className={`event2026-card-icon ${item.iconClass}`}>
                    <item.icon />
                  </div>
                  <span className="event2026-card-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="event2026-actions">
              <Link
                href={resolved.ctaHref}
                className="event2026-cta"
              >
                <span className="event2026-cta-label">{resolved.ctaLabel}</span>
                <ArrowRight className="event2026-cta-icon" />
                <span className="event2026-cta-hover" />
              </Link>

              <button className="event2026-link-btn" type="button">
                {resolved.secondaryCtaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
