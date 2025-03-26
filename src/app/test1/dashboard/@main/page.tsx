// (D) app/dashboard/@main/page.tsx
import Link from "next/link";
import { Boundary } from '@ui/boundary';

export default function DashboardMain() {
    return (
        // <Boundary labels={['@main/page.tsx']} size="small">
        <div>
            <h2>대시보드 메인</h2>
            <p>여긴 /dashboard</p>
            <Link href={'/test1/dashboard/board'}>게시판 링크</Link>
        </div>
        // </Boundary>
    );
}
