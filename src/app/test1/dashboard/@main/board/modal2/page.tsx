// app/dashboard/@main/board/(modal2)/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Modal2() {
    const router = useRouter();
    // const closeModal = () => router.back();

    const closeModal = (e: { preventDefault: () => void, stopPropagation: () => void; }) => {
        e.preventDefault();
        e.stopPropagation();
        router.back(); // /dashboard/@main/board 로 복귀
        // router.push('/test1/dashboard/board');
    };
    console.log("Modal2");

    return null;
    return (
        <div
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
                style={{ background: '#fff', padding: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h4>모달2</h4>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
}
