"use client";
import React, { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

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
          <CldImage
            width="200"
            height="200"
            src="acen7cjy0sdo5dhexkal"
            alt="testingImg"
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

//grab all photos from cloudinary

// interface Photo {
//   id: string;
//   url: string;
// }

// const fetchPhotos = async (): Promise<Photo[]> => {
//   const response = await fetch(
//     "https://api.cloudinary.com/v1_1/dw9srpmjb/image/list",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.CLOUDINARY_API_KEY}`,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch photos from Cloudinary");
//   }

//   const data = await response.json();
//   return data.resources.map((photo: any) => ({
//     id: photo.public_id,
//     url: photo.secure_url,
//   }));
// };

// const PhotoGallery: React.FC = () => {
//   const [photos, setPhotos] = useState<Photo[]>([]);

//   useEffect(() => {
//     const getPhotos = async () => {
//       try {
//         const fetchedPhotos = await fetchPhotos();
//         setPhotos(fetchedPhotos);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       }
//     };

//     getPhotos();
//   }, []);

//   return (
//     <div>
//       <h1>Photo Gallery</h1>
//       <div className="photo-container">
//         {photos.map((photo) => (
//           <img key={photo.id} src={photo.url} alt="Cloudinary Photo" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGallery;

//add things to consider before starting a project
//add in image carousels for before and after photos

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
      {/* <PhotoGallery /> */}
    </div>
  );
};

export default ServicesPage;
