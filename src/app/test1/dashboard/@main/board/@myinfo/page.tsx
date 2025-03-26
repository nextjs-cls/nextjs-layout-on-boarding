// (F) app/dashboard/@main/@myinfo/page.tsx
import Link from "next/link";

export default function MyInfoPage() {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                width: 300,
                background: '#fff',
                border: '1px solid #ccc',
                padding: 20,
            }}
        >
            <h4>내 정보</h4>
            <p>사용자 정보, 알림, 프로필 수정 등등</p>
            <Link href={'/test1/dashboard/board/detail'}>게시판 상세</Link>
            <Link href={'/test1/dashboard/board'}>게시판 이동</Link>
        </div>
    );
}
