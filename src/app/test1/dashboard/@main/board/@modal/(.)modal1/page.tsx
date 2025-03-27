// app/dashboard/@main/board/(modal1)/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Modal1() {
    const router = useRouter();

    const openModal2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/test1/dashboard/board/modal2');
    };

    const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        router.back(); // 모달 닫을 때 이전 경로로 복귀
    };

    console.log("Modal1 interception");

    return (
        <div
            // className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={closeModal}

        >
            <div
                // className="bg-white p-6 rounded-lg shadow-lg"
                style={{ background: '#fff', padding: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h4 className="text-xl font-bold">모달1</h4>
                <div className="mt-4 space-x-4">
                    <button
                        onClick={openModal2}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        모달2 열기
                    </button>
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
