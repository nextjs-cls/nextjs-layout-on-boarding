
// 동적으로 파라미터를 받지 않겠다는 의미
export const dynamicParams = false;

// 동적으로 받지 않는 대신 지정값에 대해서만 받겠다는 의미 /SSG
export function generateStaticParams() {
  const slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);
  // return <div className="card">{id}</div>;
  return null;
}
