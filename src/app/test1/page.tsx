import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={"/test1/dashboard"}> 대시보드 레이아웃 테스트1 </Link><br />
      <Link href={"/test1/aggregator"}> 집계 레이아웃 테스트1 </Link>
      <Link href={"/test1/dashboard/board_back"}> 대시보드 레이아웃 테스트1 </Link>
    </div>
  );
}
