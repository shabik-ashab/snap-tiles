import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main >
      <Header />
      <div className=" md:p-10">
       <GetImage />
      </div>     
    </main>
  );
}
