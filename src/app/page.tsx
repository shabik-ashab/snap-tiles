import { Header } from "@/components/Header";
import { Tile } from "@/components/Tile";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Header />
      <div className=" p-10">
        <Tile />
      </div>
    </main>
  );
}
