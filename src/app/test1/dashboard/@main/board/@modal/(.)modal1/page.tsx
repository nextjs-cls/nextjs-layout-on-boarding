// app/dashboard/@main/board/(modal1)/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Modal1() {
    const router = useRouter();

    const openModal2 = () => {
        router.push('/test1/dashboard/board/modal2');
    };

    const closeModal = () => {
        router.back(); // /dashboard/@main/board 로 복귀
        // window.location.href = '/test1/dashboard/board'
    };
    console.log("Modal1 interception");
    return (
        <div
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
                style={{ background: '#fff', padding: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h4>모달1</h4>
                <button onClick={openModal2}>모달2 열기</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
}
