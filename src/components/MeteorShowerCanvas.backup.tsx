// Backup of meteor shower (sao băng) canvas logic from HeroSection.tsx
// Last updated: 2026-03-06

import React from "react";

export function MeteorShowerCanvas({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let width = 0;
        let height = 0;
        const resize = () => {
            width = canvas.clientWidth || window.innerWidth;
            height = canvas.clientHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        resize();
        window.addEventListener("resize", resize);
        type Star = { x: number; y: number; outerR: number; innerR: number; phase: number; delta: number; driftX: number; driftY: number; warpChance: number; };
        const drawStar = (context: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
            let rot = (Math.PI / 2) * 3;
            const step = Math.PI / spikes;
            context.beginPath();
            context.moveTo(cx, cy - outerRadius);
            for (let i = 0; i < spikes; i += 1) {
                context.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
                rot += step;
                context.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
                rot += step;
            }
            context.closePath();
        };
        const stars: Star[] = Array.from({ length: 130 }, () => {
            const r = Math.random() * 1.8 + 0.8;
            return { x: Math.random() * width, y: Math.random() * height, outerR: r, innerR: r * 0.45, phase: Math.random() * Math.PI * 2, delta: Math.random() * 0.025 + 0.006, driftX: (Math.random() - 0.5) * 0.16, driftY: (Math.random() - 0.5) * 0.16, warpChance: Math.random() * 0.003 + 0.001 };
        });
        class Meteor {
            x = 0; y = 0; speed = 0; angle = 0; alpha = 0; width = 0; color = "255,214,102"; trail: Array<{ x: number; y: number }> = [];
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * width * 0.85 - width * 0.25;
                this.y = Math.random() * height * 0.45 + height * 0.65;
                this.speed = Math.random() * 5 + 3.5;
                this.angle = (Math.random() * 30 - 60) * (Math.PI / 180);
                this.alpha = Math.random() * 0.6 + 0.3;
                this.width = Math.random() * 1.5 + 0.8;
                this.trail = [];
                const colors = ["255,214,102", "255,196,74", "255,230,150", "255,170,65"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                this.trail.push({ x: this.x, y: this.y });
                if (this.trail.length > 18) this.trail.shift();
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                if (this.x > width + 220 || this.y < -220) this.reset();
            }
            draw(context: CanvasRenderingContext2D) {
                if (this.trail.length < 2) return;
                context.save();
                context.lineCap = "round";
                for (let i = 1; i < this.trail.length; i += 1) {
                    const progress = i / this.trail.length;
                    const prev = this.trail[i - 1];
                    const current = this.trail[i];
                    const gradient = context.createLinearGradient(prev.x, prev.y, current.x, current.y);
                    gradient.addColorStop(0, `rgba(${this.color},0)`);
                    gradient.addColorStop(1, `rgba(${this.color},${this.alpha * progress})`);
                    context.beginPath();
                    context.strokeStyle = gradient;
                    context.lineWidth = this.width * progress;
                    context.moveTo(prev.x, prev.y);
                    context.lineTo(current.x, current.y);
                    context.stroke();
                }
                const glow = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.width * 4);
                glow.addColorStop(0, `rgba(${this.color},${this.alpha})`);
                glow.addColorStop(1, `rgba(${this.color},0)`);
                context.fillStyle = glow;
                context.beginPath();
                context.arc(this.x, this.y, this.width * 4, 0, Math.PI * 2);
                context.fill();
                context.restore();
            }
        }
        const meteors: Meteor[] = [];
        const maxMeteors = 10;
        let spawnTick = 0;
        const spawnInterval = 14;
        const animate = () => {
            ctx.fillStyle = "rgba(7, 10, 20, 0.08)";
            ctx.fillRect(0, 0, width, height);
            stars.forEach((star) => {
                star.phase += star.delta;
                star.x += star.driftX + (Math.random() - 0.5) * 0.05;
                star.y += star.driftY + (Math.random() - 0.5) * 0.05;
                if (Math.random() < star.warpChance) {
                    star.x = Math.random() * width;
                    star.y = Math.random() * height;
                    star.phase = Math.random() * Math.PI * 2;
                }
                if (star.x < -8 || star.x > width + 8 || star.y < -8 || star.y > height + 8) {
                    star.x = Math.random() * width;
                    star.y = Math.random() * height;
                    star.phase = Math.random() * Math.PI * 2;
                }
                const opacity = 0.3 + Math.abs(Math.sin(star.phase)) * 0.7;
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.fillStyle = "#ffffff";
                ctx.shadowBlur = 6;
                ctx.shadowColor = "rgba(255,255,255,0.9)";
                drawStar(ctx, star.x, star.y, 5, star.outerR, star.innerR);
                ctx.fill();
                ctx.restore();
            });
            spawnTick += 1;
            if (spawnTick >= spawnInterval && meteors.length < maxMeteors) {
                meteors.push(new Meteor());
                spawnTick = 0;
            }
            meteors.forEach((meteor) => {
                meteor.update();
                meteor.draw(ctx);
            });
            requestAnimationFrame(animate);
        };
        animate();
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [canvasRef]);
    return <canvas ref={canvasRef} className="hero-meteor-canvas" aria-hidden="true" />;
}
