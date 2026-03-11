"use client";
import Link from "next/link";
import "./Header.css";
import { useEffect, useState } from "react";
import { getAssetImages } from "../sanity/lib/assetImage";
import { urlForImage } from "../sanity/lib/image";

export default function Header({ dict, lang }: { dict: any; lang: string }) {
    const [logo, setLogo] = useState<any>(null);

    useEffect(() => {
        async function fetchLogo() {
            const images = await getAssetImages();
            const logo30 = images.find((img: any) => img.title === "logo-30-nam");
            setLogo(logo30);
        }
        fetchLogo();
    }, []);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <nav className="main-nav left-nav">
                    <Link href={`/${lang}#hanh-trinh`} className="nav-link">{dict.navigation.timeline}</Link>
                    <Link href={`/${lang}#su-kien`} className="nav-link">{dict.navigation.event}</Link>
                </nav>
                <div className="logo-group center-logo">
                    {logo && logo.image ? (
                        <Link href={`/${lang}`} className="logo-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={urlForImage(logo.image).width(120).url()} alt="Logo 30 năm" style={{ height: 56, width: 'auto', objectFit: 'contain' }} />
                        </Link>
                    ) : (
                        <span className="logo-30nam-text">30 NĂM</span>
                    )}
                </div>
                <nav className="main-nav right-nav">
                    <Link href={`/${lang}#tam-nhin`} className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.8rem' }}>{dict.navigation.sponsor}</Link>
                    <div className="lang-switcher" style={{ marginLeft: '1rem', display: 'flex', gap: '0.5rem', fontWeight: 'bold' }}>
                        <Link href="/vi" className={lang === 'vi' ? 'text-gold' : 'text-inverse'} style={{ opacity: lang === 'vi' ? 1 : 0.6 }}>VI</Link>
                        <span>|</span>
                        <Link href="/en" className={lang === 'en' ? 'text-gold' : 'text-inverse'} style={{ opacity: lang === 'en' ? 1 : 0.6 }}>EN</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
