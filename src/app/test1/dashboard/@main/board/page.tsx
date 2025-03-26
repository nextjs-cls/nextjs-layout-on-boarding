// app/dashboard/@main/board/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function BoardPage() {
  const router = useRouter();

  const openModal1 = () => {
    router.push('/test1/dashboard/board/modal1');
  };
  const openModal2 = () => {
    router.push('/test1/dashboard/board/modal2');
  };

  return (
      <div>
        <h3>게시판 목록</h3>
        <button onClick={openModal1}>모달1 열기</button>
        <button onClick={openModal2}>모달2 열기</button>
        <ul>
          <li>게시글 A</li>
          <li>게시글 B</li>
        </ul>
      </div>
  );
}
