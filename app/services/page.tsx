import React from "react";
import { Metadata } from "next";

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

//get all pictures from cloudinary
export async function getStaticProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
    headers: {
     Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(res => res.json());
  console.log('results:', results);
  const { resources, next_cursor: nextCursor } = results;
  const images = resources.map((resource: {
    asset_id: any; public_id: string; secure_url: string; height: number; width: number;
  }) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      url: resource.secure_url,
      width,
      height
    }
  });
  return {
    props: {
      images
    }
  }
}

const ServicesPage = ({ images }: { images: Array<{ id: string; title: string; url: string; width: number; height: number }> }) => {
  console.log('images:', images);
  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Tri-B Contracting - Services",
  description: "Tri-B Contracting Services",
};
