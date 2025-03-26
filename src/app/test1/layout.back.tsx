// (A) app/dashboard/layout.tsx

export default function DashboardLayout({
                                            children,  // 보통 쓰지 않아도 되지만 일단 정의
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex' }}>
            {children}
        </div>
    );
}
