import { getDictionary } from '@/dictionaries/getDictionary'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<any>
}) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);

    return (
        <>
            <Header dict={dict} lang={resolvedParams.lang} />
            <main>{children}</main>
            <Footer dict={dict} lang={resolvedParams.lang} />
        </>
    )
}
