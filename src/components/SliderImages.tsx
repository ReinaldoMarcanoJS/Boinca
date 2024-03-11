'use client'
import Image from "next/image";
import React from "react";
import {Splide} from "@splidejs/splide"
import 'react-slideshow-image/dist/styles.css'
import motorUs from "../../public/motor-us.png";
import web from "../../public/web.png";
import Franklin_Electric from "../../public/Franklin_Electric.png";
import Lincoln_Electric from "../../public/Lincoln_Electric.png";
import pentax from "../../public/pentax.png";
import teco from "../../public/teco.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
   

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '320px',
  width: '320px'
}
const slideImages = [
  {
    url: Lincoln_Electric,
        caption: 'Slide 1'
  },
  {
    url: web,
    caption: 'Slide 2'
  },
  {
    url: pentax,
    caption: 'Slide 2'
  }
  ,
  {
    url: motorUs,
    caption: 'Slide 2'
  },
  {
    url: teco,
    caption: 'Slide 3'
  },
];

export const SliderImages = () => {

    return (
      <div className="slide-container items-center pb-20 h-52 w-80">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <Image style={{ ...divStyle }} src={slideImage.url} alt=""/>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
