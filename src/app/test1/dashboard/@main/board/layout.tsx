// (C) app/dashboard/@main/layout.tsx


export default function MainLayout({
                                       children,  // 기본 메인 컨텐츠 (ex: /dashboard, /dashboard/board, etc)
                                       myinfo,    // @myinfo 라우트
                                       modal,    // @modal 라우트
                                   }: {
    children: React.ReactNode;
    myinfo: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className="relative">
            {children} {/* 메인 콘텐츠 */}
            {myinfo}   {/* 내 정보 슬롯 */}
            {modal}    {/* 모달 슬롯 */}
        </div>
    );
}