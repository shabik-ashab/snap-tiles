"use client";
// Define the type for the data we are using

// Tile component using the defined type
import React from "react";
import { ImageData } from "./LightBox";
import Link from "next/link";

interface TileProps {
  image: ImageData;
}

const Tile: React.FC<TileProps> = ({ image }) => {
  const [id, setId] = React.useState(image.id)

  const handleClick =  () => {
    
  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          
          <img
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
      </div>
    </div>
  );
};


export default Tile;
