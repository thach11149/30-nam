import Link from "next/link";
import "./Footer.css";

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
    return (
        <footer className="site-footer bg-dark">
            <div className="container footer-inner">
                <div className="footer-col">
                    <h3 className="footer-logo">HVNCLC | <span className="text-gold">30 NĂM</span></h3>
                    <p className="footer-desc">{dict.footer.desc}</p>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">{dict.footer.contact_title}</h4>
                    <p>{dict.footer.org}</p>
                    <p>Email: banthuky@bsa.org.vn</p>
                </div>
                <div className="footer-col">
                    <h4 className="footer-title">{dict.footer.links_title}</h4>
                    <nav className="footer-nav">
                        <Link href={`/${lang}#hanh-trinh`}>{dict.footer.link1}</Link>
                        <Link href={`/${lang}/ebook`}>{dict.footer.link2}</Link>
                    </nav>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container text-center">
                    <p>{dict.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
