import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Home() {
  return (
    <main >
      <Header />
      <div className=" md:p-10">
        <Suspense fallback={<Loading />}>
          <GetImage />
        </Suspense>     
      </div>     
    </main>
  );
}
