"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./HeroSection.css";
import dynamic from "next/dynamic";
import { getAssetImages } from "../sanity/lib/assetImage";
import { urlForImage } from "../sanity/lib/image";

const BlinkingStars = dynamic(() => import("./BlinkingStars"), { ssr: false });

function MeteorShowerCanvas() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId = 0;
        let running = true;

        const resize = () => {
            width = canvas.clientWidth || window.innerWidth;
            height = canvas.clientHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resize();
        window.addEventListener("resize", resize);

        class Meteor {
            x = 0;
            y = 0;
            speed = 0;
            angle = 0;
            alpha = 0;
            strokeWidth = 0;
            color = "255,255,255";
            trail: Array<{ x: number; y: number }> = [];

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width * 0.85 - width * 0.25;
                this.y = Math.random() * height * 0.45 + height * 0.65;
                this.speed = Math.random() * 2.4 + 2.6;
                this.angle = (Math.random() * 30 - 60) * (Math.PI / 180);
                this.alpha = Math.random() * 0.45 + 0.28;
                this.strokeWidth = Math.random() * 2.8 + 2;
                this.trail = [];
                const colors = ["255,255,255", "228,240,255", "210,232,255", "245,250,255"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.trail.push({ x: this.x, y: this.y });
                if (this.trail.length > 18) this.trail.shift();
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (this.x > width + 220 || this.y < -220) {
                    this.reset();
                }
            }

            draw(context: CanvasRenderingContext2D) {
                if (this.trail.length < 2) return;

                context.save();
                context.lineCap = "round";

                const tail = this.trail[0];
                const head = this.trail[this.trail.length - 1];
                const gradient = context.createLinearGradient(tail.x, tail.y, head.x, head.y);
                gradient.addColorStop(0, `rgba(${this.color},0)`);
                gradient.addColorStop(0.55, `rgba(${this.color},${this.alpha * 0.35})`);
                gradient.addColorStop(1, `rgba(${this.color},${this.alpha})`);

                context.beginPath();
                context.moveTo(tail.x, tail.y);
                for (let i = 1; i < this.trail.length; i += 1) {
                    context.lineTo(this.trail[i].x, this.trail[i].y);
                }
                context.strokeStyle = gradient;
                context.lineWidth = this.strokeWidth;
                context.stroke();

                const glow = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.strokeWidth * 6);
                glow.addColorStop(0, `rgba(${this.color},${this.alpha})`);
                glow.addColorStop(1, `rgba(${this.color},0)`);
                context.fillStyle = glow;
                context.beginPath();
                context.arc(this.x, this.y, this.strokeWidth * 5.5, 0, Math.PI * 2);
                context.fill();

                context.restore();
            }
        }

        const meteors: Meteor[] = [];
        const maxMeteors = 7;
        let spawnTick = 0;
        const spawnInterval = 18;

        const animate = () => {
            if (!running) return;

            ctx.clearRect(0, 0, width, height);

            spawnTick += 1;
            if (spawnTick >= spawnInterval && meteors.length < maxMeteors) {
                meteors.push(new Meteor());
                spawnTick = 0;
            }

            meteors.forEach((meteor) => {
                meteor.update();
                meteor.draw(ctx);
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            running = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-meteor-canvas" aria-hidden="true" />;
}

interface HeroSectionProps {
    dict: any;
    heroImageUrl?: string;
    heroBgSanity?: any;
}

interface AudioToggleButtonProps {
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

function AudioToggleButton({ muted, setMuted }: AudioToggleButtonProps) {
    return (
        <button
            className={`hero-audio-toggle${muted ? "" : " unmuted"}`}
            style={{ opacity: 0.5 }}
            aria-label={muted ? "Bat am thanh" : "Tat am thanh"}
            onClick={() => setMuted((m) => !m)}
            type="button"
        >
            {muted ? (
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11H3.5C2.67 11 2 11.67 2 12.5V15.5C2 16.33 2.67 17 3.5 17H6V11Z" fill="#fff" fillOpacity="0.8" />
                    <path d="M8 9V19L15 24V4L8 9Z" fill="#fff" fillOpacity="0.8" />
                    <line x1="20" y1="8" x2="26" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                </svg>
            ) : (
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11H3.5C2.67 11 2 11.67 2 12.5V15.5C2 16.33 2.67 17 3.5 17H6V11Z" fill="#fff" fillOpacity="0.95" />
                    <path d="M8 9V19L15 24V4L8 9Z" fill="#fff" fillOpacity="0.95" />
                    <path d="M20 14C20 11.24 18.12 8.98 15.5 8.2V19.8C18.12 19.02 20 16.76 20 14Z" fill="#fff" fillOpacity="0.95" />
                </svg>
            )}
        </button>
    );
}

export default function HeroSection({ dict, heroImageUrl, heroBgSanity }: HeroSectionProps & { heroBgSanity?: any }) {

    const [videoLoaded, setVideoLoaded] = useState(false);
    const [muted, setMuted] = useState(true);
    const iframeRef = React.useRef<HTMLIFrameElement>(null);
    const [sponsorLogos, setSponsorLogos] = useState<any[]>([]);

    useEffect(() => {
        async function fetchSponsorLogos() {
            const images = await getAssetImages();
            console.log("Dữ liệu logos (trước khi lọc):", images); // Kiểm tra dữ liệu gốc

            const logos = images.filter((img: any) => {
                if (!img.category) {
                    console.warn("Logo bị loại vì thiếu category:", img);
                    return false;
                }
                if (img.category !== "logo-tai-tro") {
                    console.warn("Logo bị loại vì category không hợp lệ:", img);
                    return false;
                }
                if (!img.image?.asset) {
                    console.warn("Logo bị loại vì thiếu image.asset:", img);
                    return false;
                }
                return true;
            });

            console.log("Dữ liệu logos (sau khi lọc):", logos); // Kiểm tra dữ liệu sau khi lọc
            setSponsorLogos(logos);
        }
        fetchSponsorLogos();
    }, []);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeWindow = iframeRef.current.contentWindow;
            if (iframeWindow) {
                iframeWindow.postMessage(
                    JSON.stringify({
                        event: 'command',
                        func: muted ? 'mute' : 'unMute',
                        args: []
                    }),
                    '*'
                );
            }
        }
    }, [muted]);

    useEffect(() => {
        if (!videoLoaded || !iframeRef.current) return;

        let attempts = 0;
        const maxAttempts = 8;
        const intervalMs = 700;

        const postQuality = () => {
            const iframeWindow = iframeRef.current?.contentWindow;
            if (!iframeWindow) return;
            console.log(`[HeroSection] setPlaybackQuality attempt ${attempts + 1}/${maxAttempts}`);
            iframeWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'setPlaybackQuality', args: ['hd720'] }),
                '*'
            );
            attempts += 1;
        };

        // Immediate attempt and repeated retries while player initializes
        postQuality();
        const id = setInterval(() => {
            if (attempts >= maxAttempts) {
                clearInterval(id);
                return;
            }
            postQuality();
        }, intervalMs);

        return () => clearInterval(id);
    }, [videoLoaded]);

    const heroBgUrl = "https://cdn.sanity.io/images/g8ghtlxt/production/16ae1b629e78c021259a498bf93156532d8fa696-1960x1324.png";
    const heroBgTitle = heroBgSanity?.title || null;

    // Đặt background cho section.hero-section nếu có hình nền
    const heroSectionStyle: React.CSSProperties | undefined = heroBgUrl
        ? {
            position: "relative",
            backgroundImage: `url(${heroBgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }
        : undefined;

    // Chia logo đều cho 2 bên
    const leftLogos = sponsorLogos.filter((_, i) => i % 2 === 0);
    const rightLogos = sponsorLogos.filter((_, i) => i % 2 === 1);

    return (
        <>
            {/* Full-height image section with video overlay */}
            <section className="hero-full-image-section">
                <div className="hero-video-layout">
                    <div className="hero-logo-rail hero-logo-rail-left" aria-label="Logo doi tac ben trai">
                        {leftLogos.length > 0 ? leftLogos.map((logo, idx) => {
                            const imageUrl = logo.image?.asset
                                ? urlForImage(logo.image).width(220).fit("clip").url()
                                : null;
                            if (!imageUrl) {
                                console.warn("Không thể tạo URL cho logo:", logo); // Cảnh báo nếu không tạo được URL
                                return null;
                            }

                            return (
                                <div className="hero-logo-item" key={`left-${logo._id || idx}`}>
                                    {imageUrl ? (
                                        <img
                                            className="hero-sponsor-logo"
                                            src={imageUrl}
                                            alt={logo.title || "Logo tai tro"}
                                        />
                                    ) : (
                                        <div className="hero-logo-placeholder">Logo không hợp lệ</div>
                                    )}
                                </div>
                            );
                        }) : (
                            <>
                                <div className="hero-logo-placeholder" />
                                <div className="hero-logo-placeholder" />
                                <div className="hero-logo-placeholder" />
                            </>
                        )}
                    </div>

                    <div className="hero-video-frame">
                        {/* Banner as fallback while video loads */}
                        {heroImageUrl && !videoLoaded && (
                            <img
                                src={heroImageUrl}
                                alt="Hero Full"
                                className="hero-full-image-banner"
                            />
                        )}
                        {/* YouTube video overlay */}
                        <iframe
                            ref={iframeRef}
                            className="hero-full-image-video"
                            src="https://www.youtube.com/embed/rMPMypn4yLo?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=rMPMypn4yLo&modestbranding=1&rel=0&vq=hd720"
                            title="Hero Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            frameBorder="0"
                            onLoad={() => setVideoLoaded(true)}
                        />
                        <div className="hero-video-overlay" />
                    </div>

                    <div className="hero-logo-rail hero-logo-rail-right" aria-label="Logo doi tac ben phai">
                        {rightLogos.length > 0 ? rightLogos.map((logo, idx) => {
                            const imageUrl = logo.image?.asset
                                ? urlForImage(logo.image).width(220).fit("clip").url()
                                : null;
                            if (!imageUrl) {
                                console.warn("Không thể tạo URL cho logo:", logo); // Cảnh báo nếu không tạo được URL
                                return null;
                            }

                            return (
                                <div className="hero-logo-item" key={`right-${logo._id || idx}`}>
                                    {imageUrl ? (
                                        <img
                                            className="hero-sponsor-logo"
                                            src={imageUrl}
                                            alt={logo.title || "Logo tai tro"}
                                        />
                                    ) : (
                                        <div className="hero-logo-placeholder">Logo không hợp lệ</div>
                                    )}
                                </div>
                            );
                        }) : (
                            <>
                                <div className="hero-logo-placeholder" />
                                <div className="hero-logo-placeholder" />
                                <div className="hero-logo-placeholder" />
                            </>
                        )}
                    </div>
                </div>

                {/* Nút bật/tắt âm thanh */}
                <AudioToggleButton muted={muted} setMuted={setMuted} />
            </section>
            <section className="hero-section" style={heroSectionStyle}>
                <BlinkingStars />
                <MeteorShowerCanvas />
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <h2 className="hero-subtitle text-gold">{dict.hero.years}</h2>
                    <h1 className="hero-title">
                        {dict.hero.title1}<br />
                        <span className="text-gold">{dict.hero.title2}</span>
                    </h1>
                    <p className="hero-desc">
                        {dict.hero.desc}
                    </p>
                    <div className="hero-actions">
                        <Link href="#hanh-trinh" className="btn btn-primary">{dict.hero.cta_timeline}</Link>
                        <Link href="#su-kien" className="btn btn-outline-gold">{dict.hero.cta_event}</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
