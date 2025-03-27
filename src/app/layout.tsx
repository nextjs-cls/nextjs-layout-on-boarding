// app/layout.tsx
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Next App Router Example',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

function Header() {
    return (
        <div style={{ background: '#eee', padding: '10px' }}>
            <Link href="/">메인</Link> | <a href="/test1/dashboard">대시보드</a> | <a href="/test1/aggregator">집계 대시보드</a>
        </div>
    );
}
function Footer() {
    return <div style={{ background: '#eee', padding: '10px' }}>FOOTER</div>;
}
