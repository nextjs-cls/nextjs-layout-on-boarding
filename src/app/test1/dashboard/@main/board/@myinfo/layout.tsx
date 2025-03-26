// (C) app/dashboard/@main/layout.tsx

export default function MainLayout({
                                       children,  // 기본 메인 컨텐츠 (ex: /dashboard, /dashboard/board, etc)
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* 메인 영역 기본 화면(혹은 다른 페이지들) */}
            {children}
        </>
    );
}
