import React from "react";
import getImages from "@/lib/getImages";
import { ImageData } from "./LightBox";
import Tile from "./Tile";
import { unstable_cache } from 'next/cache';


const newImages = (images:ImageData[]):ImageData[] => {
  let flag = 1;
  const newImages:ImageData[] = images.reduce((acc:ImageData[], curr:ImageData) => {
    acc.push({
      _id: flag,
      id: curr.id,
      tags: curr.tags,
      webformatURL: curr.largeImageURL,
      largeImageURL: curr.largeImageURL,
      type: curr.type,
      views: curr.views,
      likes: curr.likes,
    })
    flag += 1;
    return acc;
  }, [])
  return newImages
}

const getCachedImages = unstable_cache(async (images) => newImages(images),['images'] )


export const GetImage = async ({ query }: { query: string }) => {
  const data = await getImages(query);
  const images: ImageData[] = data.hits;

  const getModalImage = async (id:number) => {
    const newImages = await getCachedImages(images)
    const image = newImages.find(newImages => newImages._id == id)
    return image
  }


  return (
    <div className="">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
        {images.map((image) => (
          <Tile key={image.id} image={image}  />
        ))}
      </div>
    </div>
  );
};

