// app/aggregator/layout.tsx
export default function AggregatorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ padding: 20 }}>
            {/* 여긴 사이드바 없음 */}
            {children}
        </div>
    );
}
