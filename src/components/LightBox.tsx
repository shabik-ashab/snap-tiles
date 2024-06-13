"use client";

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Tile from "./Tile";


const LightBox:React.FC<ImageProps> = ({images}) => {
  const [open, setOpen] = React.useState(false);
  const [slides, setSlides] = React.useState<Slide[]>([]);

  const handleImageClick = (id: number) => {
    const newImages = images;
    const newArr:Slide[] = newImages.reduce((acc:Slide[], curr) => {
      if (curr.id == id) {
        acc.unshift({
          src: curr.largeImageURL,
          width: 3840,
          height: 5070,
        });
      } else {
        acc.push({
          src: curr.largeImageURL,
          width: 3840,
          height: 5070,
        });
      }
      return acc;
    }, []);
    setSlides(newArr);
    setOpen(true);
  };

  return (
    <div className="">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
      {images.map((image) => (
        <Tile key={image.id} image={image} handleClick={handleImageClick} />
      ))}
      </div>

      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
      />
    </div>
  );
}

export default LightBox;

export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type:string
  views: number;
  likes: number;
};
export type Slide = {
  src:string,
  width:number,
  height: number 
}

export interface ImageProps {
  images: ImageData[];
}
