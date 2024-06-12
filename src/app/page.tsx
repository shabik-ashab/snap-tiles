import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";

export const runtime = "edge"

export default function Home() {
  return (
    <main >
      <Header />
      <div className=" p-10">
       <GetImage />
      </div>     
    </main>
  );
}
