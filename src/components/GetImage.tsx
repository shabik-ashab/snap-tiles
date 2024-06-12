import React from 'react'
import Tile from './Tile'
import getImages from '@/lib/getImages'


export const GetImage = async () => {
  const data = await getImages()
  const images = data.hits;
  return (
    <div className=''>
    {images.map((image) => (
      <Tile key={image.id} image={image} />
    ))}
  </div>
  )
}
