import React from "react";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
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

const ServicesPage = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicesPage;
