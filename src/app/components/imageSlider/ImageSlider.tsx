"use client";

import { useState } from "react";
import Image from "next/image";
import "./imageSlider.css";

const images = [
  "/images/gradeschool/1.jpeg",
  "/images/gradeschool/2.jpeg",
  "/images/gradeschool/7.jpeg",
  "/images/gradeschool/9.jpeg",
  "/images/gradeschool/10.jpeg",
  "/images/gradeschool/11.jpeg",
];

const ImageSlider = () => {
   const [current, setCurrent] = useState(0);

   const prevSlide = () => {
     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
   };

   const nextSlide = () => {
     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
   };

   return (
     <div className="slider">
       <button className="slider-arrow left" onClick={prevSlide}>
         ❮
       </button>

       <div className="slider-viewport">
         <div
           className="slider-track"
           style={{ transform: `translateX(-${current * 100}%)` }}
         >
           {images.map((src, index) => (
             <div className="slide" key={index}>
               <Image
                 src={src}
                 alt={`Slide ${index + 1}`}
                 fill
                 priority={index === 0}
                 className="slider-image"
               />
             </div>
           ))}
         </div>
       </div>

       <button className="slider-arrow right" onClick={nextSlide}>
         ❯
       </button>
     </div>
   );
}
export default ImageSlider