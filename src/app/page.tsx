import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  
  return (
    <main >
      <Header />
      <div className=" md:p-10">
        <Suspense key={query} fallback={<Loading />}>
          <GetImage query={query} />
        </Suspense>     
      </div>     
    </main>
  );
}
