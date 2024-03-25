import React, { Suspense } from "react";
import CloudinaryImages, {
  getServerSideProps,
} from "../components/CloudinaryImages";

const GalleryPage = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading images...</div>}>
        <CloudinaryImages
          images={(await getServerSideProps()).props.images}
          folder="Roger's Website"
        />
      </Suspense>
    </div>
  );
};

export default GalleryPage;
