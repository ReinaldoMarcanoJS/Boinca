import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    src: StaticImageData 
}

export const SliderItem = ({src} : Props) => {
  return (
    <div className="slide py-2">
      <Image
        src={src}
        height={100}
        width={250}
        className="h-[50px] w-[80px]"
        alt="logo"
      />
    </div>
  )
}
