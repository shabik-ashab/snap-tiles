"use client";
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Tile from "./Tile";
import { ImageData } from "./GetImage";


const LightBox:React.FC<ImageProps> = ({images, slideImages}) => {
  const [index, setIndex] = React.useState(-1);

  const handleImageClick = (id: number) => {
    console.log(id)
    setIndex(id);
  };

  return (
    <div className="">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
      {images.map((image, ind) => (
        <Tile key={image.id} index={ind} image={image} handleClick={handleImageClick} />
      ))}
      </div>


      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slideImages}
        plugins={[Zoom]}
      />
    </div>
  );
}

export default LightBox;

export type Slide = {
  src:string;
  width:number;
  height:number;
}

export interface ImageProps {
  images: ImageData[];
  slideImages: Slide[];
}