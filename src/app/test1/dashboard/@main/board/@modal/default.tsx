'use client'

import {redirect} from "next/navigation";

export default function Default() {
  console.log("Default tsx");
  redirect('/test1/dashboard/board')
  return <div>Default Layout</div>;
}
