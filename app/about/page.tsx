import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="mb-4">
          Construction Co. is a leading construction company dedicated to
          providing high-quality services for both residential and commercial
          projects. With years of experience in the industry, we have built a
          strong reputation for delivering exceptional results.
        </p>
        <p className="mb-4">
          Our team consists of skilled professionals who are passionate about
          construction and committed to excellence in every project we
          undertake. From planning to completion, we work closely with our
          clients to ensure their vision is brought to life.
        </p>
        <p className="mb-4">
          At Construction Co., we prioritize safety, integrity, and customer
          satisfaction. Whether it's new construction, renovation, or
          restoration, you can trust us to deliver superior craftsmanship and
          attention to detail.
        </p>
        <p className="mb-4">
          Contact us today to learn more about our services and how we can help
          with your next construction project.
        </p>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-gray-300">
      <AboutUs />
    </div>
  );
};

export default AboutPage;
