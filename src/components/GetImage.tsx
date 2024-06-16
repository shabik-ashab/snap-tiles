import React from "react";
import getImages from "@/lib/getImages";
import { unstable_cache } from 'next/cache';
import LightBox, { Slide } from "./Lightbox";

const slideImages = (images:ImageData[]):Slide[] => {
  const newImages:Slide[] = images.reduce((acc:Slide[], curr:ImageData) => {
    acc.push({
      src: curr.largeImageURL,
      width: 3840,
      height: 5070,
    })
    return acc;
  }, [])
  return newImages
}

const getCachedSlide = unstable_cache(async (images) => slideImages(images),['slide-images'] )


export const GetImage = async ({ query }: { query: string }) => {
  const data = await getImages(query);
  const images: ImageData[] = data.hits;
  const cachedSlide = await getCachedSlide(images)

  return (
    <div className="">
      <LightBox images={images} slideImages={cachedSlide} />
    </div>
  );
};

export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type:string
  views: number;
  likes: number;
};

