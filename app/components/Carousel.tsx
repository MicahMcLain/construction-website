import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CldImage } from "next-cloudinary";

const ServiceCardCarousel: React.FC<{ urls: string[] }> = ({ urls }) => {
  return (
    <div>
      <ul className="flex">
        <Carousel
          showThumbs={false} // Optional: Set to true to display thumbnails
          infiniteLoop // Enable continuous image rotation
          autoPlay // Optional: Set to true for automatic image transition
        >
          {urls.map((url, index) => (
            <li key={index}>
              {/* Add a container element */}
              <CldImage
                src={url}
                alt="Service image"
                width="200"
                height="200"
              />
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default ServiceCardCarousel;
