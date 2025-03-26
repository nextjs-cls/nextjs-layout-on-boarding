import Link from "next/link";
import { Boundary } from '@ui/boundary';

export default function Home() {
  return (
  // <Boundary labels={['parallel-routes/page.tsx']} size="small">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={"/test1/dashboard/board"}> 게시판 레이아웃 테스트1 </Link>
    </div>
  // </Boundary>
  );
}
