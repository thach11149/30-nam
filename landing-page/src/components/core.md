import React, { useState, useEffect, useRef } from 'react';
import { Users, Handshake, Globe2, Sparkles } from 'lucide-react';

/**
 * Hiệu ứng đếm số chạy mượt mà
 */
const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const endValue = parseInt(end.replace(/\D/g, ''));
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endValue));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span ref={domRef}>{count}{suffix}</span>;
};

/**
 * Card với hiệu ứng Spotlight và 3D Tilt (Light Version)
 */
const CoreValueCard = ({ val, index }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12; // Độ nghiêng nhẹ hơn bản dark
    const rotateY = (centerX - x) / 12;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
    cardRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (cardRef.current) {
          cardRef.current.style.setProperty('--rotate-x', `0deg`);
          cardRef.current.style.setProperty('--rotate-y', `0deg`);
        }
      }}
      className="group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-500 ease-out animate-reveal"
      style={{ 
        animationDelay: `${index * 200}ms`,
        perspective: '1000px',
        transform: `rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))`,
        willChange: 'transform'
      }}
    >
      {/* Border Spotlight */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.2), transparent 40%)`
        }}
      />

      {/* Main Content Card */}
      <div className="relative bg-white border border-slate-100 rounded-[31px] p-8 h-full flex flex-col z-10 overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-red-500/5 transition-all duration-500">
        {/* Inner Spotlight Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.05), transparent 40%)`
          }}
        />

        {/* Icon Container */}
        <div className="relative w-14 h-14 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-red-50 blur-xl rounded-full group-hover:bg-red-100 transition-colors" />
          <div className="relative z-20 text-red-600 group-hover:scale-110 transition-transform duration-500">
            {val.icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
          {val.title}
        </h3>
        
        <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-grow">
          {val.desc}
        </p>

        <div className="relative mt-auto pt-6 border-t border-slate-50">
          <div className="text-6xl font-black italic tracking-tighter text-slate-50 absolute -top-2 -left-2 group-hover:text-red-500/5 transition-colors">
            {val.number}
          </div>
          <div className="relative z-10 flex flex-col">
            <span className="text-4xl font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
              <AnimatedCounter end={val.number} suffix={val.number.includes('+') ? '+' : ''} />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mt-1">
              {val.unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoreValues({ dict }) {
  const safeDict = dict || {
    core_values: {
      section_title: "GIÁ TRỊ CỐT LÕI",
      section_subtitle: "Minh bạch và đột phá thông qua những cam kết thực tế.",
      v1_title: "Đội ngũ chuyên gia",
      v1_desc: "Những bộ óc sáng tạo và dày dạn kinh nghiệm thực chiến trong nhiều dự án quy mô lớn.",
      v1_unit: "Chuyên gia nòng cốt",
      v2_title: "Đối tác tin cậy",
      v2_desc: "Xây dựng mối quan hệ bền vững dựa trên sự tin tưởng và hiệu quả kinh doanh tối ưu.",
      v2_unit: "Đối tác chiến lược",
      v3_title: "Thị trường toàn cầu",
      v3_desc: "Tầm nhìn vươn xa, kết nối giá trị Việt với tiêu chuẩn quốc tế khắt khe nhất.",
      v3_unit: "Thị trường hoạt động",
    }
  };

  const values = [
    { title: safeDict.core_values.v1_title, desc: safeDict.core_values.v1_desc, number: "30", unit: safeDict.core_values.v1_unit, icon: <Users size={32} strokeWidth={1.5} /> },
    { title: safeDict.core_values.v2_title, desc: safeDict.core_values.v2_desc, number: "200+", unit: safeDict.core_values.v2_unit, icon: <Handshake size={32} strokeWidth={1.5} /> },
    { title: safeDict.core_values.v3_title, desc: safeDict.core_values.v3_desc, number: "100+", unit: safeDict.core_values.v3_unit, icon: <Globe2 size={32} strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden font-sans">
      {/* Decorative Light Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-red-100/40 blur-[100px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-100/30 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-red-600 w-4 h-4" />
            <span className="text-red-600 font-bold tracking-[0.3em] text-[10px] uppercase">
              What we achieve
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-6 tracking-tight">
            {safeDict.core_values.section_title}
          </h2>
          
          <p className="max-w-xl text-center text-slate-600 text-lg leading-relaxed">
            {safeDict.core_values.section_subtitle}
          </p>

          <div className="mt-8 w-16 h-1 bg-red-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <CoreValueCard key={idx} val={val} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

---

### Tổng hợp các hiệu ứng đã sử dụng:

1. **Hiệu ứng đếm số chạy mượt mà (AnimatedCounter):**
   - Sử dụng Intersection Observer để kích hoạt khi phần tử xuất hiện trong viewport.
   - Hiệu ứng easing để tăng số mượt mà trong 2 giây.

2. **Hiệu ứng Spotlight và 3D Tilt (CoreValueCard):**
   - Hiệu ứng nghiêng 3D khi di chuột qua card.
   - Hiệu ứng spotlight (ánh sáng) theo vị trí chuột.
   - Hiệu ứng glow và shadow khi hover.

3. **Hiệu ứng xuất hiện (animate-reveal):**
   - Animation xuất hiện từ dưới lên với easing.
   - Thời gian: 0.8 giây.

4. **Hiệu ứng nhịp đập chậm (animate-pulse-slow):**
   - Hiệu ứng scale và thay đổi opacity tuần hoàn.
   - Thời gian: 6 giây, lặp vô hạn.

5. **Hiệu ứng nền ánh sáng mờ (Decorative Light Background):**
   - Gradient ánh sáng mờ ở góc trên trái và dưới phải.
   - Hiệu ứng nhịp đập chậm đồng bộ với `animate-pulse-slow`.