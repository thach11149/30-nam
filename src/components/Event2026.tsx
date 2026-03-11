import "./Event2026.css";
import React from "react";
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

export default function Event2026() {
  const activities = [
    {
      icon: History,
      text: "Triển lãm Hành trình 30 năm",
      iconClass: "event2026-card-icon--blue",
    },
    {
      icon: Award,
      text: "Vinh danh HVNCLC 2026",
      iconClass: "event2026-card-icon--gold",
    },
    {
      icon: Leaf,
      text: "Trưng bày Sản phẩm Xanh",
      iconClass: "event2026-card-icon--green",
    },
  ];

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
                Sự kiện đặc biệt 2026
              </div>

              <h2 className="event2026-subtitle">
                Lễ Công Bố Hàng Việt Nam Chất Lượng Cao 2026
              </h2>

              <h1 className="event2026-title">
                30 NĂM TỰ HÀO <br className="event2026-title-break" /> VÀ TIẾP NỐI
              </h1>
            </div>

            <div className="event2026-meta">
              <div className="event2026-meta-item">
                <MapPin className="event2026-meta-icon" />
                <span className="event2026-meta-text">Hội trường Thống Nhất, TP.HCM</span>
              </div>
              <div className="event2026-meta-item">
                <CalendarDays className="event2026-meta-icon" />
                <span className="event2026-meta-text">31/03/2026 | 08:00 - 18:00</span>
              </div>
            </div>

            <p className="event2026-desc">
              Hành trình ba thập kỷ kiến tạo giá trị Việt. Một cột mốc lịch sử đánh dấu sự chuyển mình từ Hội sang
              <span className="event2026-desc-strong"> Hiệp hội</span>, kiến tạo hệ sinh thái kinh tế xanh bền vững.
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
                href="/le-cong-bo-2026"
                className="event2026-cta"
              >
                <span className="event2026-cta-label">Xem chi tiết chương trình</span>
                <ArrowRight className="event2026-cta-icon" />
                <span className="event2026-cta-hover" />
              </Link>

              <button className="event2026-link-btn" type="button">
                Tải sơ đồ mặt bằng
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
