import { GetImage } from "@/components/GetImage";
import { Header } from "@/components/Header";
import LightBox from "@/components/LightBox";
import { Tile } from "@/components/Tile";

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
