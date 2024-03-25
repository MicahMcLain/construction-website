import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CldImage } from "next-cloudinary";

const ServiceCardCarousel: React.FC<{ urls: string[] }> = ({ urls }) => {
  // const image = "Roger's Website/Basements/jo22h8cq4zhfgtnjhh0e";
  return (
    <div className="flex">
      <Carousel
        showThumbs={false} // Optional: Set to true to display thumbnails
        infiniteLoop // Enable continuous image rotation
        autoPlay // Optional: Set to true for automatic image transition
      >
        {urls.map((url, index) => (
          <CldImage
            key={index}
            src={url} //cloudinary public url
            alt="Service image"
            width="200"
            height="200"
          />
        ))}
      </Carousel>
      {/* <div>
        <CldImage
          src={image} //cloudinary public url
          alt="Service image"
          width="200"
          height="200"
        />
      </div> */}
    </div>
  );
};

export default ServiceCardCarousel;
