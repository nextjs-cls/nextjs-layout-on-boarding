// app/dashboard/@main/board/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function BoardPage() {
  const router = useRouter();

    const openModal1 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/test1/dashboard/board/modal1');
    };

    const openModal2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/test1/dashboard/board/modal2');
    };

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold">게시판 목록</h3>
            <div className="space-x-4">
                <button
                    onClick={openModal1}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    모달1 열기
                </button>
                <button
                    onClick={openModal2}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    모달2 열기
                </button>
            </div>
            <ul className="mt-4">
                <li>게시글 A</li>
                <li>게시글 B</li>
            </ul>
        </div>
    );
}
