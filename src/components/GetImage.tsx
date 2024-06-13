import React from "react";
import getImages from "@/lib/getImages";
import LightBox from "./LightBox";
import { ImageData } from "./LightBox";


export const GetImage = async ({query}:{query:string}) => {
  const data = await getImages(query);
  const images: ImageData[] = data.hits;
  console.log(query, images[0])
  return (
    <div className="">
        <LightBox images={images} />
    </div>
  );
};
