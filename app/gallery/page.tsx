"use client";
import React from "react";
import ServiceCardCarousel from "../components/Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CldImage } from "next-cloudinary";

const GalleryPage = () => {
  const public_ids = [
    "Roger's Website/Basements/jo22h8cq4zhfgtnjhh0e",
    "Roger's Website/Basements/wpvohs6pirfai04porp3",
    "Roger's Website/Basements/m0ez2ly2fvr0q3p4hlrw",
    "Roger's Website/Basements/xxbs3oy8dwpbdgvxxa0a",
  ];

  return (
    <div className="flex justify-center">
      <ServiceCardCarousel urls={public_ids} />
    </div>
  );
};

export default GalleryPage;
