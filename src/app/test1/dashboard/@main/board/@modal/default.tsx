// 'use client'
// 'use server'

import {redirect} from "next/navigation";
// import Modal1 from "@/app/test1/dashboard/@main/board/modal1/page";
// import BoardPage from "@/app/test1/dashboard/@main/board/page";
// import Model from "@/app/test1/dashboard/@main/board/@modal/page";
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function Default() {
  console.log("@model Default tsx");
  // 방법1 'use server' 와 같이 사용
  redirect('/test1/dashboard/board');

  // 방법2 tsx 스크립트 리턴
  // return <BoardPage />;
  // return <Model />;

  // 방법3. router로 push, 'use client'와 같이 사용
  // const router = useRouter();
  //
  // useEffect(() => {
  //   // 클라이언트 마운트된 후에야 실행
  //   router.push('/test1/dashboard/board');
  // }, [router]);
  // useEffect(() => {
  //   router.replace('/test1/dashboard/board'); // push 대신 replace로 스택 쌓임 방지
  // }, [router]);

  return null; // 혹은 다른 UI
}
