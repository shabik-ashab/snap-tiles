import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";
import { Suspense } from "react";
import Loading from "./Loading";
import Footer from "@/components/Footer";

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
      <div className="min-h-screen md:p-10">
        <Suspense key={query} fallback={<Loading />}>
          <GetImage query={query} />
        </Suspense>     
        {/* <NewModal /> */}
      </div>   
      <Footer /> 
    </main>
  );
}
