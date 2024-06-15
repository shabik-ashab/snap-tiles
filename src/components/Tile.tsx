"use client";
// Define the type for the data we are using

// Tile component using the defined type
import React, { Suspense } from "react";
import { ImageData } from "./LightBox";
import ImageModal from "./ImageModal";

interface TileProps {
  image: ImageData;
  cachedImages: ImageData[];
}

const Tile: React.FC<TileProps> = ({ image, cachedImages }) => {
  const [modalImage, setModalImage] = React.useState(image)
  const [open, setOpen] = React.useState(false)
  const [overflow, setOverflow] = React.useState(false)

  const handleClick = (id?:number) => {
    if(id){
      const modalImage = cachedImages.find(image => image._id == id)
      setModalImage(modalImage)
    }
    setOverflow(!overflow)
    setOpen(!open)
  }

  React.useEffect(() => {
    if(overflow){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "scroll";
    }
  },[overflow])
 
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          
          <img
            onClick={() => handleClick(image._id)}
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
          />
              
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">{image.type}</div>
          </h2>
          <p>{image.tags}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Views: {image.views}</div>
            <div className="badge badge-outline">Likes: {image.likes}</div>
          </div>
        </div>

        <div>
          {
            open && <ImageModal image={modalImage} handleClick={handleClick} />
          }


        </div>
      </div>
    </div>
  );
};


export default Tile;
