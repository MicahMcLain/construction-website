import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CldImage } from "next-cloudinary";

const ServiceCardCarousel: React.FC<{ urls: string[] }> = ({ urls }) => {
  return (
    <div>
      <Carousel
        showThumbs={false} // Optional: Set to true to display thumbnails
        // infiniteLoop // Enable continuous image rotation
        autoPlay // Optional: Set to true for automatic image transition
      >
        {urls.map((url, index) => (
          <div key={index}>
            <CldImage src={url} alt="Service image" width="200" height="200" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCardCarousel;
