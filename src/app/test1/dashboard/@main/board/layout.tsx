// (C) app/dashboard/@main/layout.tsx

import {Boundary} from "@ui/boundary";
import {TabGroup} from "@ui/tab-group";

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
        <>
            {/* 메인 영역 기본 화면(혹은 다른 페이지들) */}
            {children}

            {/* "내 정보" 병렬 라우트 슬롯 */}
            {myinfo}
            {modal}
        </>
    );
}
//
// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <Boundary labels={['parallel-routes/@audience/layout.tsx']} size="small">
//             <div className="space-y-8">
//                 <TabGroup
//                     path="/parallel-routes"
//                     items={[
//                         {
//                             text: 'Home',
//                         },
//                         {
//                             text: 'Demographics',
//                             slug: 'demographics',
//                         },
//                         {
//                             text: 'Subscribers',
//                             slug: 'subscribers',
//                         },
//                     ]}
//                 />
//
//                 {children}
//             </div>
//         </Boundary>
//     );
// }
