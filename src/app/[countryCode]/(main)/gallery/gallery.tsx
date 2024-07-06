"use client"
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";
import { images } from "./images"
import { useState } from "react";
import Image from "next/image";

const ImageComponent = (props: ThumbnailImageProps) => {
  const [show, setShow] = useState(false);

  const { src, alt, style, title } = props.imageProps;
  if (show) {
    return <Image alt={alt} width={300} height={300} quality={50} src={src} title={title || ""} style={style} />;
  }

  return (
    <div
      style={{ ...style, textAlign: "center" }}
      onMouseOver={() => setShow(true)}
      className="content-center text-xs bg-gray-500"
    >
      Hover or touch to show
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Gallery
        images={images}
        thumbnailImageComponent={ImageComponent}
        enableImageSelection={false}
      />
    </div>
  );
}