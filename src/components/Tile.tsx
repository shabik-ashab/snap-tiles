import React from "react";
import { ImageData } from "./GetImage";

 interface TileProps {
  index: number;
  image: ImageData;
  handleClick: Function;
}

const Tile: React.FC<TileProps> = ({index, image, handleClick }) => {
  return (
    <div className="flex justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      <img onClick={async () => await handleClick(index)} src={image.webformatURL} alt={image.tags} className="object-cover object-center w-full h-40 max-w-full rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" />

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