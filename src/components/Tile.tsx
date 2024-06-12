// Define the type for the data we are using
type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  views: number;
  likes: number;
};

// Tile component using the defined type
import React from "react";
import Image from 'next/image'

interface TileProps {
  image: ImageData;
}

const Tile: React.FC<TileProps> = ({ image }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3">
      <figure>
        <img src={image.previewURL} alt={image.tags} height={500} width={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Image!
          <div className="badge badge-secondary">{image.type}</div>
        </h2>
        <p>{image.tags}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Views: {image.views}</div>
          <div className="badge badge-outline">Likes: {image.likes}</div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
