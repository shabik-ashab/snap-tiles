import React from "react";
import getImages from "@/lib/getImages";
import Tile from "./Tile";
import { unstable_cache } from 'next/cache';
import LightBox from "./Lightbox";


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
  const cachedImages = await getCachedImages(images)

  return (
    <div className="">
      <LightBox images={cachedImages} />
    </div>
  );
};

export type ImageData = {
  _id: number;
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type:string
  views: number;
  likes: number;
};

