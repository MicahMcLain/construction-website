import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CldImage } from "next-cloudinary";

const ServiceCardCarousel: React.FC<{ urls: string[] }> = ({ urls }) => {
  return (
    <div className="h-auto w-auto pt-8">
      <Carousel showThumbs={false} infiniteLoop>
        {urls.map((public_id, index) => (
          <div key={index}>
            <CldImage
              src={public_id}
              alt="Service image"
              width={200}
              height={200}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCardCarousel;
