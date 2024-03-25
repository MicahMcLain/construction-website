"use client";
import React from "react";
import { Metadata } from "next";
import Carousel from "../components/Carousel";
import ServiceCardCarousel from "../components/Carousel";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 ml-2">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Kitchens"
            description="Transform your kitchen with our expert remodeling services."
          />

          <ServiceCard
            title="Bathrooms"
            description="Create your dream bathroom with our professional renovation solutions."
          />

          <ServiceCard
            title="Interior Remodels"
            description="Revitalize your interior spaces with our remodeling expertise."
          />

          <ServiceCard
            title="Basements"
            description="Maximize your living space with our basement finishing services."
          />

          <ServiceCard
            title="Decks"
            description="Enhance your outdoor living experience with a custom-built deck."
          />

          <ServiceCard
            title="Outdoor Living Spaces"
            description="Design and construct beautiful outdoor living areas tailored to your needs."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const basement_public_ids = [
  "Roger's Website/Basements/jo22h8cq4zhfgtnjhh0e",
  "Roger's Website/Basements/wpvohs6pirfai04porp3",
  "Roger's Website/Basements/v1gzrdphhxmhndxxqntv",
  "Roger's Website/Basements/m0ez2ly2fvr0q3p4hlrw",
  "Roger's Website/Basements/f3mcbcmmtqby4eycq3lp",
  "Roger's Website/Basements/xxbs3oy8dwpbdgvxxa0a",
  "Roger's Website/Basements/bwcdge2zzldkq57zqutv",
  "Roger's Website/Basements/tynson8gdcyhttd3npd7",
  "Roger's Website/Basements/phqfdtbd36rfbmlazxuz",
];
// const basement_images = basement_public_ids.map((publicId) => ({
//   public_id: publicId,
// }));

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <ServiceCardCarousel urls={basement_public_ids}></ServiceCardCarousel>
    </div>
  );
};

export default ServicesPage;

// export const metadata: Metadata = {
//   title: "Tri-B Contracting - Services",
//   description: "Tri-B Contracting Services",
// };
