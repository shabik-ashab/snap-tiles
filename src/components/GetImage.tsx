import React from 'react'
import getImages from '@/lib/getImages'
import LightBox from './LightBox'
import { ImageData } from './LightBox'

export const GetImage = async () => {
  const data = await getImages()
  const images:ImageData[] = data.hits;
  return (
    <div className=''>
      <LightBox images={images} />
  </div>
  )
}
