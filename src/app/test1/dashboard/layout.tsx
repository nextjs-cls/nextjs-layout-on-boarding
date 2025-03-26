// (A) app/dashboard/layout.tsx

export default function DashboardLayout({
                                            children,  // 보통 쓰지 않아도 되지만 일단 정의
                                            sidebar,   // @sidebar
                                            main,      // @main
                                        }: {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    main: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>{children}</div>
            {/* 왼쪽 사이드바 */}
            <div style={{ width: 200, background: '#eee' }}>
                {sidebar}
            </div>
            {/* 오른쪽 메인 영역 */}
            <div style={{ flex: 1, padding: 20 }}>
                {main}
            </div>
        </div>
    );
}

// const title = 'Parallel Routes';
//
// export const metadata = {
//     title,
//     openGraph: {
//         title,
//         images: [`/api/og?title=${title}`],
//     },
// };

// export default function Layout({
//                                    children,
//                                    main,
//                                    sidebar,
//                                }: {
//     children: React.ReactNode;
//     main: React.ReactNode;
//     sidebar: React.ReactNode;
// }) {
//     return (
//         <div className="space-y-6">
//             <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
//                 {children}
//
//                 <div className="space-y-6">
//                     {main}
//                     {sidebar}
//                 </div>
//             </div>
//         </div>
//     );
// }

