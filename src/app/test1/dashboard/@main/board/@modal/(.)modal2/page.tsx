// app/dashboard/@main/board/(modal2)/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Modal2() {
    const router = useRouter();

    const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        // router.push('/test1/dashboard/board');
        router.back();
    };

    console.log("Modal2 interception");
    return (
        <div
            // className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
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
                <h4 className="text-xl font-bold">모달2</h4>
                <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    닫기
                </button>
            </div>
        </div>
    );
}
