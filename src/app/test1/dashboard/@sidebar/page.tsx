// (B) app/dashboard/@sidebar/page.tsx
import Link from "next/link";

export default function Sidebar() {
    return (
        <nav>
            <h3>사이드바</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <a href="/test1/dashboard">대시보드 홈</a>
                </li>
                <li>
                    <Link href="/test1/dashboard/board">게시판</Link>
                </li>
                <li>
                    <a href="/test1/dashboard/myinfo">내 정보</a>
                </li>
            </ul>
        </nav>
    );
}
