"use client"; // Indicates to next.js that this component is client side.
import React, { useEffect, useState } from "react";

export default function PopupLoader({
    timeIn,
    timeOut,
    style
} : {
    timeIn : number | 0
    timeOut : number | 100
    style: number | 1
}) {
  
   const [show, setShow] = useState(false);
      useEffect(() => {
        setTimeout(() => {
          setShow(true);
        }, timeIn),
        setTimeout(() => {
            setShow(false);
          }, timeOut)
      }, []);

      if (!show) return null; 
  
  switch (style) {
    case 1: //lightning flash full screen with inverted bg
     
      return (
        <div className="popup flex place-content-center z-50">
          <img src="https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Asset+18+cropped-inverted.png" 
            alt="bg"
            className="w-full h-screen absolute top-0 z-0"
            width={2880}
            height={1480}
            />

          <div className="popup flex items-center absolute top-1/4 z-20"> 
            <img src="https://webnailsbucket.s3.amazonaws.com/rocknails/halloween2024/Asset+5.png" 
              alt="Halloween"
              width={800}
              height={201}
              />
          </div>
        </div>
        );
    case 2: //flash a bat hits screen
      return (
      <div className="popup w-full flex place-content-center absolute top-1/4 z-50">
          <img src="https://webnailsbucket.s3.amazonaws.com/rocknails/halloween2024/Asset+5.png" 
              alt="Halloween"
              className="z-0"
              width={800}
              height={201}
              />
          
      </div>
      
      );
    case 3:
      return (
      <audio src={'https://webnailsbucket.s3.amazonaws.com/holmdel/halloween2024/halloween+sound.mp3'} autoPlay></audio>
      );
    case 4:
      return (
        <audio src={'https://webnailsbucket.s3.amazonaws.com/beon/halloween2024/Beon+-+ghost-voice-halloween-moany-ghost-168411.mp3'} autoPlay></audio>
      );
}}