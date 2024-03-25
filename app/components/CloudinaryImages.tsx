interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  // Add other relevant image properties if needed
}

interface CloudinaryImagesProps {
  folder: string;
  images: CloudinaryImage[];
}

const CloudinaryImages: React.FC<CloudinaryImagesProps> = ({
  images,
  folder,
}) => {
  return (
    <div>
      {images.map((image) => (
        <img
          key={image.public_id}
          src={image.secure_url}
          alt={image.public_id}
        />
      ))}
    </div>
  );
};
export async function getServerSideProps() {
  //   const folder = context.query.folder || "";
  const folder = "Roger's Website";
  const urlWithParams = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?prefix=${folder}`;

  const response = await fetch(urlWithParams, {
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.CLOUDINARY_API_KEY}:`
      ).toString("base64")}${process.env.CLOUDINARY_API_SECRET}`,
    },
  });

  const data = await response.json();
  const images = data.resources;

  return {
    props: {
      images,
      folder,
    },
  };
}

export default CloudinaryImages;
